const SectionDivider = () => {
  return (
    <div className="relative w-full h-[140px] overflow-hidden -mt-[1px]">

      {/* TOP PART — must match Web section */}
      <div className="absolute inset-0 bg-[#2a0638]" />

      {/* CURVE that flows into App section */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,100 480,0 720,30 960,60 1200,120 1440,60 L1440,140 L0,140 Z"
          fill="#1a0030"
        />
      </svg>

    </div>
  );
};

export default SectionDivider;
