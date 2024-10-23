import "./fancyLoader.css";
const FancyLoader = () => {
  return (
    <div className="modal-center">
      <div className="flex items-center justify-center h-screen">
        <div className="relative w-16 h-16">
          {/* Outer Ring */}
          <div className="absolute top-0 left-0 w-full h-full border-4 border-muted-gold border-r-transparent  border-l-transparent rounded-full animate-spin"></div>

          {/* Inner Ring */}
          <div className="absolute top-1 left-1 w-12 h-12 border-4 border-gold border-r-transparent  border-l-transparent rounded-full animate-spin-reverse"></div>

          {/* Center Dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-light-dark rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyLoader;
