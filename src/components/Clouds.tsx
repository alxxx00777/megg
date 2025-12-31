export const Clouds = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Cloud layers */}
      <div className="absolute top-0 left-0 w-full h-48 animate-cloud-drift-1">
        <svg viewBox="0 0 1440 320" className="w-[200%] h-full opacity-30">
          <path
            fill="hsl(220, 30%, 85%)"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,165.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
      
      <div className="absolute top-10 left-0 w-full h-40 animate-cloud-drift-2">
        <svg viewBox="0 0 1440 320" className="w-[250%] h-full opacity-25">
          <path
            fill="hsl(220, 25%, 80%)"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
      
      <div className="absolute top-5 left-0 w-full h-56 animate-cloud-drift-3">
        <svg viewBox="0 0 1440 320" className="w-[180%] h-full opacity-20">
          <path
            fill="hsl(220, 20%, 90%)"
            d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,122.7C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* CSS for cloud animations */}
      <style>{`
        @keyframes cloud-drift-1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes cloud-drift-2 {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes cloud-drift-3 {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(-75%); }
        }
        .animate-cloud-drift-1 {
          animation: cloud-drift-1 60s linear infinite;
        }
        .animate-cloud-drift-2 {
          animation: cloud-drift-2 45s linear infinite;
        }
        .animate-cloud-drift-3 {
          animation: cloud-drift-3 80s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Clouds;