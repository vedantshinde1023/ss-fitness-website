import { useRef, useState, useEffect } from 'react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
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

    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleMouseMove as any);
      return () => {
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mousemove', handleMouseMove as any);
      };
    }
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-lg cursor-col-resize select-none group"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
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

      {/* Vertical Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-accent transition-all duration-75"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="flex gap-1">
            <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.5 15a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.5 3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM11.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM11.5 15a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 text-white font-semibold text-sm md:text-base drop-shadow-lg">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 text-white font-semibold text-sm md:text-base drop-shadow-lg">
        {afterLabel}
      </div>
    </div>
  );
}
