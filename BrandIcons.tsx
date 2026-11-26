import React from 'react';

export const BrandLogoMark: React.FC<{ className?: string }> = ({ className = 'w-11 h-11' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="64" height="64" rx="12" fill="#181F25" />
    {/* Outer architectural structural hexagon */}
    <path
      d="M32 10L51 21V43L32 54L13 43V21L32 10Z"
      stroke="#D97706"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    {/* Inner multi-layer grid symbolizing Concrete, Block, and Steel */}
    <path
      d="M32 10V32M32 32L51 21M32 32L13 21"
      stroke="#F5F4F0"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 37.5L32 43.5L42 37.5"
      stroke="#D97706"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="32" cy="32" r="3.5" fill="#D97706" />
  </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.031 2C6.508 2 2.023 6.485 2.023 12.007c0 1.766.461 3.489 1.337 5.01L2 22l5.122-1.343a9.97 9.97 0 0 0 4.905 1.287h.004c5.522 0 10.007-4.485 10.007-10.007A9.974 9.974 0 0 0 19.107 4.93 9.973 9.973 0 0 0 12.031 2Zm5.844 14.274c-.246.693-1.434 1.326-1.988 1.41-.507.076-1.15.109-1.856-.115-.428-.136-.978-.317-1.682-.621-2.961-1.278-4.895-4.262-5.043-4.459-.147-.197-1.205-1.603-1.205-3.058 0-1.455.762-2.171 1.033-2.467.271-.296.591-.37.788-.37.197 0 .394.002.566.01.182.009.426-.069.666.508.246.592.837 2.047.911 2.195.074.148.123.321.025.518-.098.197-.148.321-.296.493-.147.173-.31.386-.443.518-.148.148-.302.309-.13.605.173.296.766 1.264 1.645 2.048 1.13 1.007 2.083 1.319 2.378 1.467.296.148.468.123.641-.074.172-.197.739-.863.936-1.159.197-.296.394-.247.665-.148.271.099 1.724.813 2.02.961.295.148.492.222.566.346.074.123.074.715-.172 1.408Z" />
  </svg>
);
