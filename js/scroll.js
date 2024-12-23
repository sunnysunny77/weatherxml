
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

             if (scrollY > get_position(index) && scrollY < get_position(index) + index.scrollHeight) {   
            
                if (!before_i) body.classList.add(`before-${i}`);
                if (before_start) body.classList.remove("before-start");   
            } else  if (scrollY > get_position(main) + main.scrollHeight) {

                if (before_i) body.classList.remove(`before-${i}`);
                if (!before_start) body.classList.add("before-start");    
            }  else  if (scrollY < prev_scroll) {

                if (before_i) body.classList.remove(`before-${i}`);
                if (!before_start && before_i) body.classList.add("before-start");    
            }  else {

                if (before_i) body.classList.remove(`before-${i}`);
            }
        }
        prev_scroll = scrollY;
    });
};