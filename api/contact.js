const recipient = 'yokeshmanivannan2000@gmail.com';
const defaultFrom = 'onboarding@resend.dev';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldLimits = {
  fullName: 120,
  email: 254,
  company: 160,
  website: 500,
  stage: 100,
  requirements: 1000,
  projectDetails: 5000,
};

function errorResponse(res, status, error) {
  return res.status(status).json({
    success: false,
    error,
  });
}

function readField(body, field) {
  return typeof body?.[field] === 'string'
    ? body[field].trim()
    : '';
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[character]));
}

function sanitizeDiagnostic(value) {
  return String(value || '')
    .replace(/Bearer\s+\S+/gi, 'Bearer [redacted]')
    .replace(/re_[A-Za-z0-9_]+/g, '[redacted]')
    .slice(0, 500);
}

function extractEmailAddress(value) {
  const trimmed = String(value || '').trim();
  const angled = trimmed.match(/<([^>]+)>/);
  return (angled ? angled[1] : trimmed).trim().toLowerCase();
}

function resolveFromAddress() {
  const configured = typeof process.env.CONTACT_FROM_EMAIL === 'string'
    ? process.env.CONTACT_FROM_EMAIL.trim()
    : '';

  if (!configured) {
    return defaultFrom;
  }

  const address = extractEmailAddress(configured);
  const domain = address.split('@')[1] || '';

  // Resend only sends from verified domains. The test sender works
  // without verification; custom domains fail until they are verified.
  if (domain === 'resend.dev' && emailPattern.test(address)) {
    return configured;
  }

  return defaultFrom;
}

function parseRequestBody(req) {
  if (Buffer.isBuffer(req.body)) {
    const text = req.body.toString('utf8').trim();
    return text ? JSON.parse(text) : {};
  }

  if (typeof req.body === 'string') {
    const text = req.body.trim();
    return text ? JSON.parse(text) : {};
  }

  return req.body;
}

function emailRow(label, value) {
  return `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #2b2635;color:#b8b3ae;width:34%;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:12px 16px;border-bottom:1px solid #2b2635;color:#f4f0e8;white-space:pre-wrap;">
        ${escapeHtml(value)}
      </td>
    </tr>
  `;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return errorResponse(res, 405, 'Method not allowed.');
  }

  const apiKey = typeof process.env.RESEND_API_KEY === 'string'
    ? process.env.RESEND_API_KEY.trim()
    : '';

  if (!apiKey) {
    console.error('Contact API configuration error: missing RESEND_API_KEY');
    return errorResponse(res, 500, 'Unable to send your request.');
  }

  let body;

  try {
    body = parseRequestBody(req);
  } catch {
    return errorResponse(res, 400, 'Invalid request.');
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return errorResponse(res, 400, 'Invalid request.');
  }

  const fields = Object.fromEntries(
    Object.keys(fieldLimits).map((field) => [
      field,
      readField(body, field),
    ])
  );

  const {
    fullName,
    email,
    company,
    website,
    stage,
    requirements,
    projectDetails,
  } = fields;

  if (
    [fullName, email, company, stage, requirements, projectDetails]
      .some((field) => !field)
  ) {
    return errorResponse(res, 400, 'Please complete all required fields.');
  }

  if (
    Object.entries(fields).some(
      ([field, value]) => value.length > fieldLimits[field]
    )
  ) {
    return errorResponse(res, 400, 'One or more fields are too long.');
  }

  if (!emailPattern.test(email)) {
    return errorResponse(res, 400, 'Please provide a valid email address.');
  }

  if (website) {
    try {
      const parsedWebsite = new URL(website);

      if (!['http:', 'https:'].includes(parsedWebsite.protocol)) {
        throw new Error('Invalid protocol');
      }
    } catch {
      return errorResponse(res, 400, 'Please provide a valid website URL.');
    }
  }

  const from = resolveFromAddress();
  const subject = `New ScaleRooks Project Enquiry — ${fullName}`;
  const submitted = new Date().toISOString();

  const html = `
<!doctype html>
<html>
  <body style="margin:0;background:#08070a;color:#f4f0e8;font-family:Arial,sans-serif;">
    <div style="max-width:720px;margin:0 auto;padding:32px 20px;background:#08070a;">

      <div style="border-bottom:2px solid #d7a62a;padding-bottom:20px;">
        <div style="color:#d7a62a;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">
          ScaleRooks
        </div>

        <h1 style="margin:12px 0 0;color:#f4f0e8;font-size:26px;">
          New Project Enquiry
        </h1>
      </div>

      <table style="width:100%;margin-top:24px;border-collapse:collapse;background:#100d15;">
        ${emailRow('Full Name', fullName)}
        ${emailRow('Email', email)}
        ${emailRow('Company', company)}
        ${emailRow('Website', website || 'Not provided')}
        ${emailRow('Business Stage', stage)}
        ${emailRow('Selected Requirements', requirements)}
        ${emailRow('Project Details', projectDetails)}
        ${emailRow('Submitted', submitted)}
      </table>

      <p style="margin:24px 0 0;color:#b8b3ae;font-size:12px;">
        Reply directly to this email to contact the prospective client.
      </p>

    </div>
  </body>
</html>
`;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: ['yokeshmanivannan2000@gmail.com'],
        reply_to: email,
        subject,
        html,
      }),
    });

    const resendText = await resendResponse.text();

    if (!resendResponse.ok) {
      console.error('Resend email request failed', {
        status: resendResponse.status,
        body: sanitizeDiagnostic(resendText),
      });

      return errorResponse(res, 502, 'Unable to send your request.');
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error('Resend email request threw', {
      name: error?.name,
      message: sanitizeDiagnostic(error?.message),
    });

    return errorResponse(res, 502, 'Unable to send your request.');
  }
}
