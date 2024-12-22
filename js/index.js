import { service_worker } from "./service_worker.js";
import { events } from "./utillites.js";
import { run_fetch } from "./xml.js";
import { scroll } from "./scroll.js";
import { fallback } from "./fallback.js";

events(window, "load", () =>{
  
 fallback();
 service_worker(); 
 run_fetch();
 scroll();
});