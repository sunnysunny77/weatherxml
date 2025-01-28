
//import "../node_modules/bootstrap/js/dist/alert";
//import "../node_modules/bootstrap/js/dist/button";
//import "../node_modules/bootstrap/js/dist/carousel";
//import "../node_modules/bootstrap/js/dist/collapse";
//import "../node_modules/bootstrap/js/dist/dropdown";
//import "../node_modules/ootstrap/js/dist/modal";
//import "../node_modules/bootstrap/js/dist/offcanvas";
//import "../node_modules/bootstrap/js/dist/popover";
//import "../node_modules/bootstrap/js/dist/scrollspy";
//import "../node_modules/bootstrap/js/dist/tab";
//import "../node_modules/bootstrap/js/dist/toast";
//import "../node_modules/bootstrap/js/dist/tooltip";

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