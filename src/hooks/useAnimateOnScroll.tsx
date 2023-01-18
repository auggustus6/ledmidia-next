import { useEffect, useRef } from "react";

const useAnimateOnScroll = (threshold = 0.1) => {
  const elementRef = useRef<HTMLHeadingElement>(null!);
  let wasAnimated = false;

  useEffect(() => {
    function handleMutation([entry]: IntersectionObserverEntry[]) {
      if (entry.isIntersecting && !wasAnimated) {
        elementRef.current.classList.add("active");
        wasAnimated = true;
      } else {
        elementRef.current.classList.remove("active");
      }
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    };

    const observer = new IntersectionObserver(handleMutation, options);
    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  return elementRef;
};

export default useAnimateOnScroll;
