const { useEffect, useState } = require("react");

const className = "scroll-lock";
const contentId = "content";

const useScrollLock = (enabled) => {
  const [scrollLockY, setScrollLockY] = useState(0);

  useEffect(() => {
    setScrollLockY(window.pageYOffset);
    const content = document.getElementById(contentId);

    if (enabled) {
      content.style.top = `${-window.pageYOffset}px`;
      document.body.classList.add(className);
    } else {
      content.style.top = 0;
      document.body.classList.remove(className);

      window.scrollTo(0, scrollLockY);
    }
  }, [enabled]);
};

export default useScrollLock;
