import { events, get_position } from "./utillites.js";

let prev_scroll =  0;

const backChange = () => {

        const u = document.querySelectorAll(".u");
        const body = document.querySelector("body");
        const main = document.querySelector("main");
        const before_end = body.classList.contains("before-end");
        const reverse = body.classList.contains("reverse");
        const before_start = body.classList.contains("before-start");
        const scrollY = window.scrollY;

        for (const [i, index] of u.entries()) {

            const before_i = body.classList.contains(`before-${i}`);

             if (scrollY > get_position(index) && scrollY < get_position(index) + index.scrollHeight) {                   

                if (before_start) body.classList.remove("before-start");    

                if (before_end) body.classList.remove("before-end"); 

                for (const i in u) {

                   if (!before_i) body.classList.remove(`before-${i}`);
                }

                body.classList.add(`before-${i}`);

                if (scrollY < prev_scroll) {

                    if (!reverse && !before_i) body.classList.add("reverse");

                } else if (scrollY > prev_scroll) {

                    if (reverse && !before_i) body.classList.remove("reverse");
                }
                
            } else  if (scrollY > get_position(main) + main.scrollHeight) {

                for (const i in u) {

                   if (!before_i) body.classList.remove(`before-${i}`);
                }

                body.classList.add("before-end");

                if (reverse) body.classList.remove("reverse");

            }  else  if (scrollY < prev_scroll && scrollY < get_position(main)) {

                for (const i in u) {

                   if (!before_i) body.classList.remove(`before-${i}`);
                }

                body.classList.add("before-start");

                if (reverse) body.classList.remove("reverse");
            } 
        }
        
        prev_scroll = scrollY;
    };

export const scroll = () => {

    events(window, "scroll", backChange);
};