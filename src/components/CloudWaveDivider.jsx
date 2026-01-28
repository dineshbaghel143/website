const CloudWaveDivider = () => {
  return (
    <div className="relative w-full h-[260px] overflow-hidden bg-[#12001f]">
      <svg
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="cloudWaveGrad" x1="0" y1="0" x2="0" y2="1">
            {/* SAME AS NEXT SECTION START */}
            <stop offset="0%" stopColor="#7e22ce" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>

          <filter id="cloudWaveGlow">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* FULL HEIGHT WAVE — VERY IMPORTANT */}
        <path
          d="
            M0,160
            C240,120 480,220 720,170
            C960,120 1200,180 1440,150
            L1440,260
            L0,260
            Z
          "
          fill="url(#cloudWaveGrad)"
          filter="url(#cloudWaveGlow)"
        />
      </svg>
    </div>
  );
};

export default CloudWaveDivider;
