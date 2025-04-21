import { OverlayScrollbars } from "overlayscrollbars";

export const init = () => {

    OverlayScrollbars(document.body, {
      
      overflow: {
        x: "hidden",
        y: "scroll",
      },
      scrollbars: {
        theme: "os-theme-body",
      },
    });
};