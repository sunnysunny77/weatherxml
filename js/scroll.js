
import { events, get_position } from "./utillites.js";

export const scroll = () => {

    events(window, "scroll", () => {

        const u = document.querySelectorAll(".u");
        const body = document.querySelector("body");
        const scrollY = window.scrollY;

        for (const [i, index] of u.entries()) {

            if (scrollY > get_position(index) && scrollY < get_position(index) + index.scrollHeight) {   
            
                body.classList.add(`before-${i}`);
            } else {

                if(body.classList.contains(`before-${i}`)) {
                    
                    body.classList.remove(`before-${i}`);
                    body.classList.add("before");
                    return;
                }

                body.classList.remove(`before-${i}`);
            }
        }
    });
};