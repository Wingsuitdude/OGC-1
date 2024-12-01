import { useEffect, useRef } from 'react';

export function Video() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = document.createElement('iframe');
    videoElement.src = 'https://www.youtube.com/embed/3mdm7OSuoBk?autoplay=1&mute=1&controls=0&loop=1&playlist=3mdm7OSuoBk&showinfo=0&rel=0&modestbranding=1';
    videoElement.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    videoElement.style.position = 'absolute';
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    videoElement.style.top = '0';
    videoElement.style.left = '0';
    videoElement.style.border = 'none';
    videoElement.style.pointerEvents = 'none';
    
    if (videoRef.current) {
      videoRef.current.appendChild(videoElement);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeChild(videoElement);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div ref={videoRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 via-zinc-900/50 to-zinc-900/70 z-10" />
      </div>
      <div className="absolute inset-0 animate-pulse-glow mix-blend-overlay opacity-30 z-20" style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.3), transparent 80%)'
      }} />
    </div>
  );
}