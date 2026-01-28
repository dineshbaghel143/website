const SectionWaveDivider = () => {
  return (
    <div className="relative w-full h-[240px] overflow-hidden">

      {/* TOP BACKGROUND (UI/UX SECTION COLOR) */}
      <div className="absolute inset-0 bg-[#7b1fa2]" />

      {/* 🔮 GLOW LAYER */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full blur-[40px] opacity-50"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 C240,200 480,40 720,80 960,120 1200,200 1440,140 L1440,240 L0,240 Z"
          fill="#b84cff"
        />
      </svg>

      {/* MAIN CURVE */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 C240,200 480,40 720,80 960,120 1200,200 1440,140 L1440,240 L0,240 Z"
          fill="#12001f"
        />
      </svg>

    </div>
  );
};

export default SectionWaveDivider;
