import { useEffect, useRef } from 'react';
import './InteractiveLight.css';

export default function InteractiveLight() {
  const glowRef = useRef(null);
  const clickRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      glowRef.current.style.left = (e.clientX - 200) + 'px';
      glowRef.current.style.top  = (e.clientY - 200) + 'px';
    };

    const handleClick = (e) => {
      const el = clickRef.current;
      el.classList.remove('active');
      void el.offsetWidth;
      el.style.left = (e.clientX - 150) + 'px';
      el.style.top  = (e.clientY - 150) + 'px';
      el.classList.add('active');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="interactive-light">
      <div className="light-glow" ref={glowRef}></div>
      <div className="click-light" ref={clickRef}></div>
    </div>
  );
}
