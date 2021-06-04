
window.onload = function () {
    let parser = new DOMParser();
    let xmlDoc0;
    let xmlDoc;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "cont.php", true);
    xmlhttp.onload = function() {
        if (xmlhttp.status == 200) {
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
                                let t = xmlDoc.getElementsByTagName("product")[0].getElementsByTagName("forecast")[0].getElementsByTagName("area")[2].getElementsByTagName("forecast-period")[x];
                                let y = t.getElementsByTagName("element");
                                let o = t.getElementsByTagName("text");
                                let txt0 = "<br>"
                                let u = xmlDoc0.getElementsByTagName("product")[0].getElementsByTagName("observations")[0].getElementsByTagName("station")[0].getElementsByTagName("period")[0].getElementsByTagName("level")[0].getElementsByTagName("element");
                                let date = new Date(t.getAttribute('start-time-local'))
                                let p = xmlDoc.getElementsByTagName("product")[0].getElementsByTagName("forecast")[0].getElementsByTagName("area")[1].getElementsByTagName("forecast-period")[x].getElementsByTagName("text")[0];
                                date.toLocaleDateString()
                                for (i = 0; i < y.length; i++) {
                                    if (y[i].getAttribute('type') === "forecast_icon_code") { 
                                        document.getElementsByClassName("x")[x].src = "./images/" + y[i].childNodes[0].nodeValue  + ".png";
                                    }
                                    if (y[i].getAttribute('type') === "air_temperature_minimum") {
                                        txt += "Minimum&nbsp;" + y[i].childNodes[0].nodeValue + "&nbsp;°C<br>";
                                    }
                                    if (y[i].getAttribute('type') === "air_temperature_maximum") {
                                        txt += "Maximum&nbsp;" + y[i].childNodes[0].nodeValue + "&nbsp;°C<br>";
                                    }
                                }
                                for (m = 0; m < o.length; m++) {
                                    if (o[m].getAttribute('type') === "precis") {
                                        document.getElementsByClassName("x")[x].alt = o[m].childNodes[0].nodeValue; 
                                    }
                                }
                                for (i = 0; i < u.length; i++) {
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
                                if (x < 1) {
                                    document.getElementsByClassName("f")[x].innerHTML = date.toLocaleDateString()
                                    document.getElementsByClassName("z")[x].innerHTML = p.childNodes[0].nodeValue + txt0;
                                } else if (x >= 1) {
                                    document.getElementsByClassName("f")[x].innerHTML = date.toLocaleDateString()
                                    document.getElementsByClassName("z")[x].innerHTML = p.childNodes[0].nodeValue + txt;
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
    xmlhttp.send();
}
    
    

