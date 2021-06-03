
function events (obj,typ,opts) {
    if (obj) {
        obj.addEventListener(typ,callback,opts);
    }
}

window.onload = function () {

    let parser = new DOMParser();
    let xmlDoc;
    let xmlDoc0;
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "cont.php", true);
        xmlhttp.onload = function() {
        if (xmlhttp.status == 200) {
            if (this.responseText == 1) {
                let xmlFile0 = 'IDW60920.xml';
                let xmlFile = 'IDW12300.xml';
                xmlhttp.open("GET", xmlFile0, true);
                xmlhttp.onload = function() {
                    if (xmlhttp.status == 200) {
                        xmlDoc0 = parser.parseFromString(this.response,"text/xml");
                        xmlhttp.open("GET", xmlFile, true);
                        xmlhttp.onload = function() {
                            if (xmlhttp.status == 200) {
                                xmlDoc = parser.parseFromString(this.response,"text/xml");
                                for (let x = 0; x <= 6; x++){
                                    let txt = "<br>";
                                    let y = xmlDoc.getElementsByTagName("product")[0].getElementsByTagName("forecast")[0].getElementsByTagName("area")[2].getElementsByTagName("forecast-period")[x].getElementsByTagName("element");
                                    for (i = 0; i < y.length; i++) {
                                        if (y[i].getAttribute('type') === "forecast_icon_code") { 
                                            document.getElementsByClassName("x")[x].src = "./images/" + y[i].childNodes[0].nodeValue  + ".png"
                                        }
                                        if (y[i].hasAttribute("units")) {
                                            if (y[i].getAttribute('type') === "air_temperature_minimum") {
                                                txt += "Minimum&nbsp;" + y[i].childNodes[0].nodeValue + "&nbsp;°C<br>";
                                            }
                                            if (y[i].getAttribute('type') === "air_temperature_maximum") {
                                                txt += "Maximum&nbsp;" + y[i].childNodes[0].nodeValue + "&nbsp;°C<br>";
                                            }
                                        }
                                    }
                                    let txt0 = "<br>"
                                    let u = xmlDoc0.getElementsByTagName("product")[0].getElementsByTagName("observations")[0].getElementsByTagName("station")[0].getElementsByTagName("period")[0].getElementsByTagName("level")[0].getElementsByTagName("element");
                                    for (i = 0; i < u.length; i++) {
                                        if (u[i].hasAttribute("units")) {
                                            if (u[i].getAttribute('type') === "minimum_air_temperature") {
                                                txt0 += "Current Minimum&nbsp;" + u[i].childNodes[0].nodeValue + "&nbsp;°C<br>";
                                            }
                                            if (u[i].getAttribute('type') === "maximum_air_temperature") {
                                                txt0 += "Currrent Maximum&nbsp;" + u[i].childNodes[0].nodeValue + "&nbsp;°C<br>";
                                            }
                                            if (u[i].getAttribute('type') === "air_temperature") {
                                                txt0 += "Current&nbsp;" + u[i].childNodes[0].nodeValue + "&nbsp;°C<br>";
                                            }
                                        }
                                    }
                                    let date = new Date(xmlDoc.getElementsByTagName("product")[0].getElementsByTagName("forecast")[0].getElementsByTagName("area")[2].getElementsByTagName("forecast-period")[x].getAttribute('start-time-local'))
                                    date.toLocaleDateString()
                                    if (x < 1) {
                                        document.getElementsByClassName("f")[x].innerHTML = date.toLocaleDateString()
                                        document.getElementsByClassName("z")[x].innerHTML = xmlDoc.getElementsByTagName("product")[0].getElementsByTagName("forecast")[0].getElementsByTagName("area")[1].getElementsByTagName("forecast-period")[x].getElementsByTagName("text")[0].childNodes[0].nodeValue + txt0;
                                        document.getElementsByClassName("y")[x].innerHTML = xmlDoc.getElementsByTagName("product")[0].getElementsByTagName("forecast")[0].getElementsByTagName("area")[1].getElementsByTagName("forecast-period")[x].getElementsByTagName("text")[0].childNodes[0].nodeValue + txt0;
                                       
                                    } else if (x >= 1) {
                                          document.getElementsByClassName("f")[x].innerHTML = date.toLocaleDateString()
                                          document.getElementsByClassName("z")[x].innerHTML = xmlDoc.getElementsByTagName("product")[0].getElementsByTagName("forecast")[0].getElementsByTagName("area")[1].getElementsByTagName("forecast-period")[x].getElementsByTagName("text")[0].childNodes[0].nodeValue + txt;
                                          document.getElementsByClassName("y")[x].innerHTML = xmlDoc.getElementsByTagName("product")[0].getElementsByTagName("forecast")[0].getElementsByTagName("area")[1].getElementsByTagName("forecast-period")[x].getElementsByTagName("text")[0].childNodes[0].nodeValue + txt;
                                    }
                                 }
                            
                            } else {
                                console.log(this.status)
                            }                   
                         }
                         xmlhttp.send();
                    } else {
                        console.log(this.status)
                    }                   
                }
                xmlhttp.send();
            } else {
                console.log(this.responseText)
            }
        }
        else {
            console.log(this.status)
        }
    }
    xmlhttp.send();
}
    
    

