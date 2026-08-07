import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ConsultationButton = ({ 
  onClick, 
  text = "Get Consultation", 
  compact = false, 
  variant = "glass", // 'primary' | 'glass' | 'outline'
  className = "", 
  style = {} 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isPrimary = variant === 'primary';

  const height       = compact ? '38px'  : '54px';
  const fontSize     = compact ? '9px'   : '10.5px';
  const letterSpace  = compact ? '0.15em': '0.22em';
  const pl           = compact ? '18px'  : '30px';
  const pr           = compact ? '6px'   : '8px';
  const gap          = compact ? '10px'  : '18px';
  const iconSize     = compact ? 24       : 32;
  const arrowSize    = compact ? 11       : 14;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center select-none group ${className}`}
      style={{
        height,
        paddingLeft: pl,
        paddingRight: pr,
        gap,
        borderRadius: '999px',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        background: 'none',
        overflow: 'hidden',
        transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
        ...style
      }}
    >
      {/* The actual pill background — completely separate from any parent rendering */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '999px',
          background: isPrimary
            ? 'linear-gradient(135deg, #0c5abf 0%, #1d72ef 60%, #4ba3fb 100%)'
            : 'rgba(255,255,255,0.055)',
          border: isPrimary
            ? '1px solid rgba(255,255,255,0.3)'
            : '1px solid rgba(75,163,251,0.28)',
          boxShadow: isPrimary
            ? '0 6px 32px rgba(4,102,200,0.55), inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 0 rgba(0,0,0,0.15)'
            : '0 2px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease',
          ...(isHovered && !isPrimary && {
            background: 'rgba(75,163,251,0.10)',
            borderColor: 'rgba(75,163,251,0.55)',
            boxShadow: '0 4px 24px rgba(4,102,200,0.3), inset 0 1px 0 rgba(255,255,255,0.18), 0 0 0 1px rgba(75,163,251,0.15)',
          }),
          ...(isHovered && isPrimary && {
            background: 'linear-gradient(135deg, #1668d0 0%, #2b82ff 60%, #5eb1ff 100%)',
            boxShadow: '0 8px 40px rgba(4,102,200,0.7), inset 0 1px 0 rgba(255,255,255,0.5), 0 0 30px rgba(75,163,251,0.4)',
          }),
        }}
      />

      {/* Shimmer sweep on hover */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '999px',
          background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
          transition: 'opacity 0.3s ease, transform 0.6s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Text */}
      <span
        style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: "'Outfit', 'SUSE', sans-serif",
          fontWeight: 700,
          fontSize,
          letterSpacing: letterSpace,
          textTransform: 'uppercase',
          color: '#ffffff',
          whiteSpace: 'nowrap',
          textShadow: isPrimary
            ? '0 1px 3px rgba(0,0,0,0.4)'
            : '0 0 12px rgba(75,163,251,0.5)',
        }}
      >
        {text}
      </span>

      {/* Arrow pill */}
      <span
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: iconSize,
          height: iconSize,
          borderRadius: '50%',
          flexShrink: 0,
          background: isPrimary
            ? 'rgba(255,255,255,0.95)'
            : 'rgba(255,255,255,0.12)',
          border: isPrimary ? 'none' : '1px solid rgba(255,255,255,0.25)',
          color: isPrimary ? '#0466c8' : '#ffffff',
          boxShadow: isPrimary
            ? '0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)'
            : '0 2px 8px rgba(0,0,0,0.25)',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), background 0.3s ease',
          transform: isHovered ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg) scale(1)',
        }}
      >
        <ArrowUpRight size={arrowSize} strokeWidth={2.2} />
      </span>
    </button>
  );
};
