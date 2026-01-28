const AppToUiDivider = () => {
  return (
    <div className="relative w-full h-[220px] overflow-hidden bg-[#1a0030]">
      {/* CURVE */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#7b1fa2"
          d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,229.3C840,235,960,213,1080,192C1200,171,1320,149,1380,138.7L1440,128L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default AppToUiDivider;
