import { events, get_position } from "./utillites.js";

let prev_scroll =  0;

const backChange = () => {

        const u = document.querySelectorAll(".u");
        const body = document.querySelector("body");
        const main = document.querySelector("main");
        const before_end = body.classList.contains("before-end");
        const before_start = body.classList.contains("before-start");
        const scrollY = window.scrollY;

        for (const [i, index] of u.entries()) {

            const before_i = body.classList.contains(`before-${i}`);

            if (scrollY > get_position(index) && scrollY < get_position(index) + index.scrollHeight) {

                if (!before_i) body.classList.add(`before-${i}`);

                for (const x of u.keys()) {

                    if(x !== i) {
                        body.classList.remove(`before-${x}`);
                    }
                }

                if (before_start) body.classList.remove("before-start");

                if (before_end) body.classList.remove("before-end");
            } else  if (scrollY > get_position(main) + main.scrollHeight) {

                if (!before_end && before_i) body.classList.add("before-end");

                for (const x of u.keys()) {

                    body.classList.remove(`before-${x}`);
                }
            }  else  if (scrollY < prev_scroll && scrollY < get_position(main)) {

                if (!before_start && before_i) body.classList.add("before-start");

                for (const x of u.keys()) {

                    body.classList.remove(`before-${x}`);
                }
            } 
        }
        
        prev_scroll = scrollY;
    };

export const scroll = () => {

    events(window, "scroll", backChange);
};