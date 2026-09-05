const recipient = 'yokeshmanivannan2000@gmail.com';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getText(value, maxLength) {
  return typeof value === 'string' ? value.trim().replace(/[\r\n]+/g, ' ').slice(0, maxLength) : '';
}

function getErrorResponse(res, status, message) {
  return res.status(status).json({ success: false, message });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return getErrorResponse(res, 405, 'Method not allowed.');
  }

  if (!process.env.RESEND_API_KEY) {
    return getErrorResponse(res, 500, 'Unable to send your request.');
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return getErrorResponse(res, 400, 'Invalid request.');
  }

  const fullName = getText(body?.fullName, 120);
  const email = getText(body?.email, 254).toLowerCase();
  const company = getText(body?.company, 160);
  const website = getText(body?.website, 500);
  const stage = getText(body?.stage, 100);
  const requirements = getText(body?.requirements, 1000);
  const projectDetails = getText(body?.projectDetails, 5000);

  if (!fullName || !email || !company || !stage || !requirements || !projectDetails) {
    return getErrorResponse(res, 400, 'Please complete all required fields.');
  }

  if (!emailPattern.test(email)) {
    return getErrorResponse(res, 400, 'Please provide a valid email address.');
  }

  if (website) {
    try {
      const parsedWebsite = new URL(website);
      if (!['http:', 'https:'].includes(parsedWebsite.protocol)) throw new Error('Invalid protocol');
    } catch {
      return getErrorResponse(res, 400, 'Please provide a valid website URL.');
    }
  }

  const subject = `New ScaleRooks Discovery Request — ${company}`;
  const text = [
    'New ScaleRooks Discovery Request',
    '',
    `Full Name: ${fullName}`,
    `Work Email: ${email}`,
    `Company: ${company}`,
    `Current Website: ${website || 'Not provided'}`,
    `Business Stage: ${stage}`,
    `Primary Requirements: ${requirements}`,
    `Project Details & Specific Goals: ${projectDetails}`,
    `Submitted: ${new Date().toISOString()}`,
  ].join('\n\n');

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev',
        to: [recipient],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!resendResponse.ok) {
      return getErrorResponse(res, 502, 'Unable to send your request.');
    }

    return res.status(200).json({ success: true });
  } catch {
    return getErrorResponse(res, 502, 'Unable to send your request.');
  }
}