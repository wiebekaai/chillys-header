import { useEffect, useState } from "react";
import { throttle } from "underscore";

const THROTTLE_WAIT = 300;

const useDocumentScrollThrottled = (callback) => {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  const onScroll = () => {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body;

    setScrollPosition((previous) => {
      previousScrollTop = previous;
      return currentScrollTop;
    });

    callback({
      previousScrollTop,
      currentScrollTop,
    });
  };

  const onScrollThrothled = throttle(onScroll, THROTTLE_WAIT);

  useEffect(() => {
    window.addEventListener("scroll", onScrollThrothled);
    return () => window.removeEventListener("scroll", onScrollThrothled);
  }, []);
};

export default useDocumentScrollThrottled;
