let parser = new DOMParser();
const xmlFileOne = "IDW60920.xml";
const xmlFileTwo = "IDW12300.xml";
let documentXMLone;
let documentXMLtwo;

let txtArrayOne = [];
let txtArrayTwo = [];
let txtArrayThree = [];
let dateArray = [];

function runXHR() {

  const xhr = new XMLHttpRequest();
  xhr.open("GET", xmlFileOne, true);
  xhr.send();
  xhr.addEventListener("load", () => {
    const xhr_nest = new XMLHttpRequest();
    xhr_nest.addEventListener("load", () => {
      documentXMLtwo = parser.parseFromString(xhr_nest.response, "text/xml");
      xml();
    });
    xhr_nest.open("GET", xmlFileTwo, true);
    xhr_nest.send();
    documentXMLone = parser.parseFromString(xhr.response, "text/xml");
  });

}

function xmlDocTwo(param) {
  for (let index = 0; index <= 6; index++) {
    let txtOne = "";
    let txtTwo = "";
    let date;
    for (const obj of param) {
      if (obj.querySelectorAll("forecast-period")[index]) {
        const forecast_period = obj.querySelectorAll("forecast-period")[index];
        if (obj.getAttribute("aac") === "WA_ME001") {
          const text = forecast_period.querySelectorAll("text");
          date = new Date(forecast_period.getAttribute("start-time-local"));
          date = date.toLocaleDateString();
          for (const obj of text) {
            if (obj.getAttribute("type") === "forecast") {
              txtOne += obj.childNodes[0].nodeValue;
            }
          }
        }
        if (obj.getAttribute("aac") === "WA_PT053") {
          const element = forecast_period.querySelectorAll("element");
          const text = forecast_period.querySelectorAll("text");
          for (const obj of element) {
            if (obj.getAttribute("type") === "air_temperature_minimum") {
              txtTwo += `<br>Minimum&nbsp;${  obj.childNodes[0].nodeValue  }&nbsp;°C`;
            }
            if (obj.getAttribute("type") === "air_temperature_maximum") {
              txtTwo += `<br>Maximum&nbsp;${  obj.childNodes[0].nodeValue  }&nbsp;°C`;
            }
            if (obj.getAttribute("type") === "forecast_icon_code") {
              document.querySelectorAll(".x")[index].src = `./images/${  obj.childNodes[0].nodeValue  }.png`;
            }
          }
          for (const obj of text) {
            if (obj.getAttribute("type") === "precis") {
              document.querySelectorAll(".x")[index].alt = obj.childNodes[0].nodeValue;
            }
          }
        }
      }
    }
    txtArrayOne.push(txtOne);
    txtArrayTwo.push(txtTwo);
    dateArray.push(date);
  }
}

function xmlDocOne(param) {
  for (let index = 0; index <= 6; index++) {
    let txtThree = "";
    for (const obj of param) {
      if (obj.getAttribute("stn-name") === "PERTH METRO" && obj.querySelectorAll("period")[0].querySelectorAll("level")[0].querySelectorAll("element")) {
        const element = obj.querySelectorAll("period")[0].querySelectorAll("level")[0].querySelectorAll("element");
        for (const obj of element ) {
          if (obj.getAttribute("type") === "air_temperature") {
            txtThree += `<br>Current&nbsp;${   obj.childNodes[0].nodeValue  }&nbsp;°C`;
          }
          if (obj.getAttribute("type") === "maximum_air_temperature") {
            txtThree += `<br>Currrent Maximum&nbsp;${   obj.childNodes[0].nodeValue  }&nbsp;°C`;
          }
          if (obj.getAttribute("type") === "minimum_air_temperature") {
            txtThree += `<br>Current Minimum&nbsp;${   obj.childNodes[0].nodeValue  }&nbsp;°C`;
          }
        }
      }
    }
    txtArrayThree.push(txtThree);
  }
}

function xml() {
  xmlDocOne(documentXMLone.querySelectorAll("product")[0].querySelectorAll("observations")[0].querySelectorAll("station"));
  xmlDocTwo(documentXMLtwo.querySelectorAll("product")[0].querySelectorAll("forecast")[0].querySelectorAll("area"));

  for (let index = 0; index <= 6; index++) {
    if (index < 1) {
      document.querySelectorAll(".f")[index].innerHTML = dateArray[index];
      document.querySelectorAll(".z")[index].innerHTML = txtArrayOne[index] + txtArrayTwo[index] + txtArrayThree[index];
    } else if (index >= 1) {
      document.querySelectorAll(".f")[index].innerHTML = dateArray[index];
      document.querySelectorAll(".z")[index].innerHTML = txtArrayOne[index] + txtArrayTwo[index];
    }
  }
}

window.addEventListener("load", function() {
  runXHR();
});
