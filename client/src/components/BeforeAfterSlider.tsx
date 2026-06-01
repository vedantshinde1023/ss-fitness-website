import { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    if (percentage >= 0 && percentage <= 100) {
      setSliderPosition(percentage);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ aspectRatio: '16 / 9' }}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before Image (Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-full object-cover"
          style={{ width: `${(100 / sliderPosition) * 100}%` }}
          draggable={false}
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-accent cursor-col-resize transition-all"
        style={{
          left: `${sliderPosition}%`,
          boxShadow: '0 0 20px rgba(255, 223, 0, 0.6)',
        }}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
          <div className="flex gap-1">
            <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5a1 1 0 11-2 0 1 1 0 012 0zM10.5 8.5a1 1 0 11-2 0 1 1 0 012 0zM10.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
            <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5a1 1 0 11-2 0 1 1 0 012 0zM10.5 8.5a1 1 0 11-2 0 1 1 0 012 0zM10.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-4 py-2 rounded-lg">
        <p className="text-accent font-semibold text-sm">{beforeLabel}</p>
      </div>

      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-4 py-2 rounded-lg">
        <p className="text-accent font-semibold text-sm">{afterLabel}</p>
      </div>
    </div>
  );
}
