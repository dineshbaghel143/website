const GlowWaveDivider = () => {
  return (
    <div className="relative w-full h-[220px] overflow-hidden -mb-[1px]">
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <defs>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* TOP FILL (ERP COLOR) */}
        <rect width="1440" height="220" fill="#6b21a8" />

        {/* WAVE CUT */}
        <path
          d="M0,120 C240,180 480,40 720,90 960,140 1200,200 1440,120 L1440,0 L0,0 Z"
          fill="#12001f"
          filter="url(#softGlow)"
        />
      </svg>
    </div>
  );
};

export default GlowWaveDivider;
