import { useState, useEffect } from "react";

const defaults = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};

const getWidth = () => window.innerWidth;

const getSize = (breakpoints, width) => {
  const { sm, md, lg, xl } = breakpoints;
  if (width >= sm && width < md) {
    return "sm";
  } else if (width >= md && width < lg) {
    return "md";
  } else if (width >= lg && width < xl) {
    return "lg";
  } else if (width >= xl) {
    return "xl";
  } else {
    return "xs";
  }
};

const useResponsive = breakpoints => {
  const rules = { ...defaults, ...breakpoints };
  const [width, setWidth] = useState(() => getWidth());
  const [size, setSize] = useState(() => getSize(rules, window.innerWidth));
  useEffect(() => {
    const resizeHandler = () => {
      setWidth(getWidth());
      setSize(getSize(rules, getWidth()));
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [rules]);

  return {
    size,
    width
  };
};

export default useResponsive;
