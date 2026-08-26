import React, { useState } from 'react';
import { SECTION_THEMES } from './BackgroundVideo';
import {
  Video,
  VideoOff,
  Sliders,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Sun,
  Moon,
  Layers,
  Eye
} from 'lucide-react';

export default function BackgroundControls({
  isVideoEnabled,
  setIsVideoEnabled,
  overlayDarkness,
  setOverlayDarkness,
  overrideThemeKey,
  setOverrideThemeKey
}) {
  const [isOpen, setIsOpen] = useState(false);

  const darknessOptions = [
    { label: 'High Visibility', value: 0.35, icon: Eye },
    { label: 'Vibrant FX', value: 0.45, icon: Sun },
    { label: 'Balanced Contrast', value: 0.58, icon: Moon }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto select-none">
      {/* Expanded Controls Card */}
      {isOpen && (
        <div className="mb-3 w-84 max-w-[90vw] rounded-2xl bg-[#13111C]/95 backdrop-blur-xl border border-purple-500/30 shadow-2xl p-5 text-slate-200 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-white tracking-wide">
                Cinematic Background FX
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Toggle Video Motion */}
          <div className="flex items-center justify-between mb-4 bg-white/5 p-3 rounded-xl border border-white/5">
            <div className="flex items-center space-x-3">
              {isVideoEnabled ? (
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                  <Video className="w-4 h-4" />
                </div>
              ) : (
                <div className="p-2 rounded-lg bg-slate-700/40 text-slate-400">
                  <VideoOff className="w-4 h-4" />
                </div>
              )}
              <div>
                <p className="text-xs font-medium text-white">Motion Video Layers</p>
                <p className="text-[11px] text-slate-400">
                  {isVideoEnabled ? 'Video + Canvas Active' : 'Canvas Only'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsVideoEnabled(!isVideoEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isVideoEnabled ? 'bg-purple-600' : 'bg-slate-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isVideoEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Darkness Mask Controls */}
          <div className="mb-4">
            <label className="text-xs font-medium text-slate-300 block mb-2 flex items-center justify-between">
              <span>Background Opacity Scale</span>
              <span className="text-purple-400 font-mono text-[11px]">
                {Math.round((1 - overlayDarkness) * 100)}% FX Opacity
              </span>
            </label>
            <div className="grid grid-cols-3 gap-1.5 bg-white/5 p-1 rounded-xl border border-white/5">
              {darknessOptions.map((opt) => {
                const Icon = opt.icon;
                const active = overlayDarkness === opt.value;
                return (
                  <button
                    key={opt.label}
                    onClick={() => setOverlayDarkness(opt.value)}
                    className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-[11px] font-medium transition-all ${
                      active
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 mb-1" />
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section Presets */}
          <div>
            <label className="text-xs font-medium text-slate-300 block mb-2 flex items-center justify-between">
              <span>Preset Visual Environments</span>
              {overrideThemeKey ? (
                <button
                  onClick={() => setOverrideThemeKey(null)}
                  className="text-[10px] text-purple-400 hover:underline font-medium"
                >
                  Reset to Auto-Sync
                </button>
              ) : (
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">
                  Auto-Scroll Sync
                </span>
              )}
            </label>

            <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1 custom-scrollbar">
              <button
                onClick={() => setOverrideThemeKey(null)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-left transition-all ${
                  overrideThemeKey === null
                    ? 'bg-purple-500/20 border border-purple-500/40 text-purple-300 font-medium'
                    : 'bg-white/5 border border-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                  <span>Auto (Scroll & Route Sync)</span>
                </div>
                {overrideThemeKey === null && (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                )}
              </button>

              {Object.entries(SECTION_THEMES).map(([key, theme]) => {
                const isSelected = overrideThemeKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => setOverrideThemeKey(key)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-left transition-all ${
                      isSelected
                        ? 'bg-purple-500/20 border border-purple-500/40 text-purple-300 font-medium'
                        : 'bg-white/5 border border-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: theme.accentColor + '1)' }}
                      />
                      <span className="truncate">{theme.name}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 bg-white/5 px-1.5 py-0.5 rounded flex-shrink-0 ml-2">
                      {theme.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#13111C]/90 hover:bg-[#1A1728] backdrop-blur-xl border border-purple-500/30 text-white shadow-xl shadow-purple-900/20 transition-all hover:scale-105"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500" />
        </span>
        <Video className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-semibold tracking-wide">
          {isOpen ? 'Close FX' : 'Background FX'}
        </span>
        {isOpen ? (
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        ) : (
          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
        )}
      </button>
    </div>
  );
}
