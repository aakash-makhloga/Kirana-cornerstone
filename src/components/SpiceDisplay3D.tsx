
import React, { useEffect, useState } from "react";

interface SpiceDisplay3DProps {
  spiceName: string;
}

const SpiceDisplay3D: React.FC<SpiceDisplay3DProps> = ({ spiceName }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading a 3D model
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [spiceName]);

  if (loading) {
    return <div className="h-8 w-8 animate-pulse bg-gray-200 rounded-full"></div>;
  }

  // This would be replaced with actual 3D rendering logic in a real application
  return (
    <div className="rounded-full bg-gradient-to-br from-amber-300 to-orange-500 h-8 w-8 flex items-center justify-center text-xs text-white font-bold">
      {spiceName.charAt(0)}
    </div>
  );
};

export default SpiceDisplay3D;
