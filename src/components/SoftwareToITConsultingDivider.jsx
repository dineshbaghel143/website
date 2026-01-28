const SoftwareToITConsultingDivider = () => {
  return (
    <div className="relative w-full h-[240px] overflow-hidden bg-[#12001f]">
      <svg
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          {/* SAME COLOR AS IT CONSULTING TOP */}
          <linearGradient id="itWaveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7e22ce" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>

          {/* SOFT GLOW */}
          <filter id="itWaveGlow">
            <feGaussianBlur stdDeviation="20" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* FULL HEIGHT WAVE – NO STRAIGHT EDGE */}
        <path
          d="
            M0,150
            C240,110 480,210 720,160
            C960,110 1200,180 1440,150
            L1440,240
            L0,240
            Z
          "
          fill="url(#itWaveGrad)"
          filter="url(#itWaveGlow)"
        />
      </svg>
    </div>
  );
};

export default SoftwareToITConsultingDivider;
