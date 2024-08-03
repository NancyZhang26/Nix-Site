import React, { useRef } from 'react';
import useOnScreen from 'src/app/hooks/IntersectionObserver';

function MyComponent() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} style={{ height: '500px' }}>
      {isVisible ? '我可见了！' : '我还在等待...'}
    </div>
  );
}

export default MyComponent;
