
import { events, get_position } from "./utillites.js";

export const scroll = () => {

    let prev_scroll =  0;

    events(window, "scroll", () => {

        const u = document.querySelectorAll(".u");
        const body = document.querySelector("body");
        const main = document.querySelector("main");
        const scrollY = window.scrollY;

        for (const [i, index] of u.entries()) {

            const before_start = body.classList.contains("before-start");
            const before_i = body.classList.contains(`before-${i}`);
            const before_end = body.classList.contains("before-end");
            const reverse = body.classList.contains("reverse");

             if (scrollY > get_position(index) && scrollY < get_position(index) + index.scrollHeight) {   
                
                if (before_start) body.classList.remove("before-start");       
                if (before_end) body.classList.remove("before-end"); 
                if (scrollY < prev_scroll && !before_i) return body.classList.add(`before-${i}`, "reverse");
                if (reverse && !before_i) body.classList.remove("reverse");
                if (!before_i) body.classList.add(`before-${i}`);
            } else  if (scrollY > get_position(main) + main.scrollHeight) {

                if (before_i) body.classList.remove(`before-${i}`);
                if (!before_end) body.classList.add("before-end"); 
                if (reverse) body.classList.remove("reverse");
            }  else  if (scrollY < prev_scroll && scrollY < get_position(main)) {

                if (before_i) body.classList.remove(`before-${i}`);
                if (before_end) body.classList.remove("before-end"); 
                if (reverse) body.classList.remove("reverse");
                if (!before_start && before_i) body.classList.add("before-start");    
            }  else {

                if (before_i) body.classList.remove(`before-${i}`);
            }
        }
        prev_scroll = scrollY;
    });
};