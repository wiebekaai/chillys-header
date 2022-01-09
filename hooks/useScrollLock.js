const { useEffect, useState } = require("react");

const className = "scroll-lock";

const useScrollLock = (enabled) => {
  const [scrollLockY, setScrollLockY] = useState(0);

  useEffect(() => {
    setScrollLockY(window.pageYOffset);
    if (enabled) {
      document.body.style.top = `${-window.pageYOffset}px`;
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
      document.body.style.top = 0;
      window.scrollTo(0, scrollLockY);
    }
  }, [enabled]);
};

export default useScrollLock;
