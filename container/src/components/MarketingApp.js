import { mount } from "marketing/MarketingApp"; // module federation
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  // mounting MarketingApp reference to module federation
  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
