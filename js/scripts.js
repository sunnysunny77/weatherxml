let parser = new DOMParser();
let xmlFile0 = "IDW60920.xml";
let xmlFile = "IDW12300.xml";

let txtcArray = [];
let txt0Array = [];
let txt1Array = [];
let dateArray = [];

function runXHR(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  if (xhr.readyState === 4 && xhr.status === 200) {
    return parser.parseFromString(xhr.response, "text/xml");
  }
}

function xmlDoc(t) {
  for (let x = 0; x <= 6; x++) {
    let txt0 = "";
    let txt1 = "";
    let date;
    for (const element of t) {
      if (element.querySelectorAll("forecast-period")[x]) {
        let r = element.querySelectorAll("forecast-period")[x];
        if (element.getAttribute("aac") === "WA_ME001") {
          let q = r.querySelectorAll("text");
          date = new Date(r.getAttribute("start-time-local"));
          date = date.toLocaleDateString();
          for (const element_ of q) {
            if (element_.getAttribute("type") === "forecast") {
              txt0 += element_.childNodes[0].nodeValue;
            }
          }
        }
        if (element.getAttribute("aac") === "WA_PT053") {
          let q = r.querySelectorAll("element");
          let c = r.querySelectorAll("text");
          for (const element of q) {
            if (element.getAttribute("type") === "air_temperature_minimum") {
              txt1 += `<br>Minimum&nbsp;${  element.childNodes[0].nodeValue  }&nbsp;°C`;
            }
            if (element.getAttribute("type") === "air_temperature_maximum") {
              txt1 += `<br>Maximum&nbsp;${  element.childNodes[0].nodeValue  }&nbsp;°C`;
            }
            if (element.getAttribute("type") === "forecast_icon_code") {
              document.querySelectorAll(".x")[x].src = `./images/${  element.childNodes[0].nodeValue  }.png`;
            }
          }
          for (const element of c) {
            if (element.getAttribute("type") === "precis") {
              document.querySelectorAll(".x")[x].alt = element.childNodes[0].nodeValue;
            }
          }
        }
      }
    }
    txt0Array.push(txt0);
    txt1Array.push(txt1);
    dateArray.push(date);
  }
}

function xmlDoc0(u) {
  for (let x = 0; x <= 6; x++) {
    let txtc = "";
    for (const element of u) {
      if (element.getAttribute("stn-name") === "PERTH METRO" && element.querySelectorAll("period")[0].querySelectorAll("level")[0].querySelectorAll("element")) {
        let q = element.querySelectorAll("period")[0].querySelectorAll("level")[0].querySelectorAll("element");
        for (const element of q) {
          if (element.getAttribute("type") === "air_temperature") {
            txtc += `<br>Current&nbsp;${  element.childNodes[0].nodeValue  }&nbsp;°C`;
          }
          if (element.getAttribute("type") === "maximum_air_temperature") {
            txtc += `<br>Currrent Maximum&nbsp;${  element.childNodes[0].nodeValue  }&nbsp;°C`;
          }
          if (element.getAttribute("type") === "minimum_air_temperature") {
            txtc += `<br>Current Minimum&nbsp;${  element.childNodes[0].nodeValue  }&nbsp;°C`;
          }
        }
      }
    }
    txtcArray.push(txtc);
  }
}

function xml() {
  const documentXML0 = runXHR(xmlFile0);
  const documentXML = runXHR(xmlFile);
  xmlDoc0(documentXML0.querySelectorAll("product")[0].querySelectorAll("observations")[0].querySelectorAll("station"));
  xmlDoc(documentXML.querySelectorAll("product")[0].querySelectorAll("forecast")[0].querySelectorAll("area"));

  for (let x = 0; x <= 6; x++) {
    if (x < 1) {
      document.querySelectorAll(".f")[x].innerHTML = dateArray[x];
      document.querySelectorAll(".z")[x].innerHTML = txt0Array[x] + txt1Array[x] + txtcArray[x];
    } else if (x >= 1) {
      document.querySelectorAll(".f")[x].innerHTML = dateArray[x];
      document.querySelectorAll(".z")[x].innerHTML = txt0Array[x] + txt1Array[x];
    }
  }
}

window.addEventListener("load", function() {
  xml();
});
