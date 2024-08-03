import { useState, useEffect, useRef } from 'react';

function useOnScreen(ref: React.RefObject<Element>, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasEnteredOnce, setHasEnteredOnce] = useState(false); // 新增的状态用于跟踪是否已进入过视口
  const observerRef = useRef<IntersectionObserver>(); // 使用 useRef 来存储 observer

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          setHasEnteredOnce(true); // 设置为 true 表示已进入过视口
        } else {
          setIntersecting(false);
        }
      },
      {
        rootMargin,
      }
    );

    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    return () => {
      if (ref.current && observerRef.current) {
        observerRef.current.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]);

  useEffect(() => {
    if (hasEnteredOnce && ref.current && observerRef.current) {
      // 当元素已经进入过视口后，取消观察
      observerRef.current.unobserve(ref.current);
    }
  }, [hasEnteredOnce, ref]);

  return isIntersecting;
}

export default useOnScreen;