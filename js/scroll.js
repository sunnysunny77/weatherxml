
import { events, get_position } from "./utillites.js";

export const scroll = () => {

    let prev_scroll =  0;

    events(window, "scroll", () => {

        const u = document.querySelectorAll(".u");
        const body = document.querySelector("body");
        const main = document.querySelector("main");
        const before_end = body.classList.contains("before-end");
        const reverse = body.classList.contains("reverse");
        const before_start = body.classList.contains("before-start");
        const scrollY = window.scrollY;

        for (const [i, index] of u.entries()) {

            const before_i = body.classList.contains(`before-${i}`);
            const before_i_plus = body.classList.contains(`before-${i + 1}`);
            const before_i_minus = body.classList.contains(`before-${i - 1}`);

             if (scrollY > get_position(index) && scrollY < get_position(index) + index.scrollHeight) {                   

                if (before_start) body.classList.remove("before-start");       
                if (before_end) body.classList.remove("before-end"); 
                if (scrollY < prev_scroll) {
                    if (before_i_plus && !before_i) { 
                        body.classList.replace(`before-${i + 1}`, `before-${i}`);
                    } else if (scrollY < prev_scroll && !before_i_plus && !before_i) {
                        body.classList.add(`before-${i}`);
                    }
                    if (!reverse && !before_i) body.classList.add("reverse");
                } else if (scrollY > prev_scroll) {
                    if (reverse && !before_i) body.classList.remove("reverse");
                    if (before_i_minus && !before_i) {
                        body.classList.replace(`before-${i - 1}`, `before-${i}`);
                    } else if (!before_i_minus && !before_i) {
                        body.classList.add(`before-${i}`);
                    }
                }
            } else  if (scrollY > get_position(main) + main.scrollHeight) {

                if (before_i && !before_end) body.classList.replace(`before-${i}`, "before-end");
                if (reverse) body.classList.remove("reverse");
            }  else  if (scrollY < prev_scroll && scrollY < get_position(main)) {

                if (before_i && !before_start) body.classList.replace(`before-${i}`, "before-start");
                if (reverse) body.classList.remove("reverse");
            } 
        }
        prev_scroll = scrollY;
    });
};