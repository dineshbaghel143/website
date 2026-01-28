const AIMLToCloudDivider = () => {
  return (
    <div className="relative w-full h-[220px] overflow-hidden bg-[#12001f]">
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6b21a8" />
            <stop offset="100%" stopColor="#12001f" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="20" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Smooth Wave */}
        <path
          d="M0,130 
             C240,190 480,60 720,100 
             960,140 1200,200 1440,130 
             L1440,0 L0,0 Z"
          fill="url(#waveGradient)"
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
};

export default AIMLToCloudDivider;
