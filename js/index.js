import { service_worker } from "./service_worker.js";
import { events } from "./utillites.js";
import {  run_fetch } from "./xml.js";

events(window, "load", () =>{
  
 service_worker(); 
 run_fetch();
});