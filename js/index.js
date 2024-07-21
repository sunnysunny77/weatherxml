import { service_worker } from "./service_worker.js";
import { events } from "./utillites.js";
import {  xml } from "./xml.js";

events(window, "load", () =>{
  
  service_worker(); 
  xml();
});