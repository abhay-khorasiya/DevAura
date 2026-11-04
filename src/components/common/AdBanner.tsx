import React, { useEffect } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

interface AdBannerProps {
  type: 'skyscraper' | 'sidebar' | 'leaderboard';
  position: string;
  client?: string;
  slot?: string;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export const AdBanner: React.FC<AdBannerProps> = ({
  type,
  position,
  client = 'ca-pub-XXXXXXXXXXXXXXXX',
  slot = '1234567890',
  className = '',
}) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      // AdSense push error handler (e.g. adblock or dev environment)
    }
  }, []);

  // Skyscraper (Left / Right vertical sidebar rails - 160x600 or 280/300x600 wide)
  if (type === 'skyscraper') {
    const hasCustomWidth = className.includes('w-') || className.includes('max-w-');
    const widthClasses = hasCustomWidth ? '' : 'w-[140px] sm:w-[160px]';
    const isWide = hasCustomWidth || className.includes('280') || className.includes('300');

    return (
      <div 
        className={`${widthClasses} h-[600px] max-h-[85vh] rounded-2xl border border-dashed border-slate-300/80 bg-gradient-to-b from-slate-50 via-white to-slate-100/60 p-3 flex flex-col justify-between items-center text-center shadow-xs transition hover:border-indigo-300 relative overflow-hidden group ${className}`}
        data-ad-position={position}
      >
        {/* Top Header Label */}
        <div className="w-full flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2">
          <span className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">
            Ad
          </span>
          <span className="text-[9px] text-slate-400 flex items-center gap-0.5">
            DevAura <ExternalLink className="w-2.5 h-2.5" />
          </span>
        </div>

        {/* Real AdSense Slot */}
        <div className="w-full flex-1 flex flex-col items-center justify-center relative">
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '100%' }}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-format="vertical"
            data-full-width-responsive="true"
          />

          {/* Fallback / Dev placeholder when AdSense is pending */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center pointer-events-none group-hover:scale-105 transition-transform duration-300">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-3 shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-slate-700 leading-tight">
              Sponsored Placement
            </span>
            <span className="text-[10px] text-slate-400 mt-1">
              Google AdSense Ready
            </span>
            <span className="mt-4 text-[9px] font-mono px-2 py-0.5 rounded bg-slate-200/70 text-slate-600">
              {isWide ? '300 × 600' : '160 × 600'}
            </span>
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="w-full pt-1.5 border-t border-slate-200 text-center">
          <span className="text-[8px] text-slate-400 uppercase tracking-wider font-semibold">
            Advertisement
          </span>
        </div>
      </div>
    );
  }

  // Sidebar Rectangle (300x250 or 280x250 for content rails)
  if (type === 'sidebar') {
    return (
      <div 
        className={`w-full max-w-[280px] h-[250px] rounded-2xl border border-dashed border-slate-300/80 bg-gradient-to-b from-slate-50 via-white to-slate-100/60 p-3 flex flex-col justify-between items-center text-center shadow-xs transition hover:border-indigo-300 relative overflow-hidden group ${className}`}
        data-ad-position={position}
      >
        <div className="w-full flex items-center justify-between border-b border-slate-200 pb-1.5">
          <span className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">
            Sponsored
          </span>
          <span className="text-[9px] text-slate-400 flex items-center gap-0.5">
            Ad <ExternalLink className="w-2.5 h-2.5" />
          </span>
        </div>

        <div className="w-full flex-1 flex flex-col items-center justify-center relative">
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '100%' }}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-format="rectangle"
            data-full-width-responsive="true"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center pointer-events-none group-hover:scale-105 transition-transform duration-300">
            <div className="w-8 h-8 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center text-violet-600 mb-2 shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-700">
              Developer Ad Space
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5">
              Targeted Developer Audience
            </span>
            <span className="mt-2 text-[9px] font-mono px-2 py-0.5 rounded bg-slate-200/70 text-slate-600">
              300 × 250
            </span>
          </div>
        </div>

        <div className="w-full pt-1.5 border-t border-slate-200 text-center">
          <span className="text-[8px] text-slate-400 uppercase tracking-wider font-semibold">
            Advertisement
          </span>
        </div>
      </div>
    );
  }

  // Leaderboard (Horizontal 728x90)
  return (
    <div 
      className={`w-full max-w-4xl h-[90px] rounded-xl border border-dashed border-slate-300/80 bg-gradient-to-r from-slate-50 via-white to-slate-100/60 px-4 py-2 flex items-center justify-between text-center shadow-xs transition hover:border-indigo-300 relative overflow-hidden group ${className}`}
      data-ad-position={position}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />

      <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
        <div className="flex items-center space-x-3 text-left">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-800 block">
              Sponsored Developer Tools & Cloud
            </span>
            <span className="text-[10px] text-slate-400">
              Google AdSense Leaderboard Placement
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-200/70 text-slate-600">
            728 × 90
          </span>
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">
            Ad
          </span>
        </div>
      </div>
    </div>
  );
};
