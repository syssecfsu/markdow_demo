import { useLayoutEffect, useState } from "react";

function useWindowSize(reduce) {
  const [size, setSize] = useState({ height: undefined, width: undefined });

  useLayoutEffect(() => {
    function updateSize() {
      setSize({
        width: window.innerWidth - reduce.width,
        height: window.innerHeight - reduce.height,
      });
    }

    window.addEventListener("resize", updateSize);

    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, [reduce.width, reduce.height]);

  return size;
}

export default useWindowSize;
