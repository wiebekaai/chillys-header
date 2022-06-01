import { useEffect, useState } from "react";
import useDocumentScrollThrottled from "./useDocumentScrollThrottled";
import useScrollLock from "./useScrollLock";

const useScroll = (callback, config) => {
  const { lock = false } = config;

  const [state, setState] = useState({
    currentScrollTop: 0,
    previousScrollTop: 0,
  });
  const [pause, setPause] = useState(false);

  useDocumentScrollThrottled(setState);
  useScrollLock(lock);

  useEffect(() => {
    setPause(true);
  }, [lock]);

  useEffect(() => {
    if (pause) {
      setPause(false);
      return;
    }

    if (callback) callback(state);
  }, [state]);
};

export default useScroll;
