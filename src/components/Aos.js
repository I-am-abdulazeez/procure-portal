import { useEffect } from "react";

import "aos/dist/aos.css";

export const CallAOS = () => {
  let AOS;
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });
};
