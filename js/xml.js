const xml_doc_two = (param) => {

    let txt_array_one = [];
    let txt_array_two = [];
    let date_array = [];

    for (let index = 0; index <= 6; index++) {

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let txt_one = "";
        let txt_two = "";
        let date;
        let day;

        for (const obj of param) {

            if (obj.querySelectorAll("forecast-period")[index]) {

                const forecast_period = obj.querySelectorAll("forecast-period")[index];
                if (obj.getAttribute("aac") === "WA_ME001") {

                    const text = forecast_period.querySelectorAll("text");
                    date = new Date(forecast_period.getAttribute("start-time-local"));
                    day = days[date.getDay()];
                    date = date.toLocaleDateString("en-AU", { timeZone: "Australia/Perth" });

                    for (const obj of text) {

                        if (obj.getAttribute("type") === "forecast") {

                            txt_one += `<span class="block">${  obj.childNodes[0].nodeValue }</span>`;
                        }
                    }
                }
                if (obj.getAttribute("aac") === "WA_PT053") {

                    const element = forecast_period.querySelectorAll("element");
                    const text = forecast_period.querySelectorAll("text");
                    for (const obj of element) {
                        
                        if (obj.getAttribute("type") === "air_temperature_minimum") {

                          txt_two += `<span>Minimum<br>${  obj.childNodes[0].nodeValue  }&nbsp;°C</span>`;

                        }
                        if (obj.getAttribute("type") === "air_temperature_maximum") {

                           txt_two += `<span>Maximum<br>${  obj.childNodes[0].nodeValue  }&nbsp;°C</span>`;

                        }
                        if (obj.getAttribute("type") === "forecast_icon_code") {

                           document.querySelectorAll(".x")[index].src = `./images/${  obj.childNodes[0].nodeValue  }.webp`;

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
        txt_array_one.push(txt_one);
        txt_array_two.push(txt_two);
        date_array.push({date: date, day: day});
    }

    return [txt_array_one, txt_array_two, date_array];
};

const xml_doc_one = (param) => {

    let txtArray = [];

    for (let index = 0; index <= 6; index++) {

        let txt = "";
        for (const obj of param) {
            
            if (obj.getAttribute("stn-name") === "PERTH METRO" && obj.querySelectorAll("period")[0].querySelectorAll("level")[0].querySelectorAll("element")) {

                const element = obj.querySelectorAll("period")[0].querySelectorAll("level")[0].querySelectorAll("element");
                for (const obj of element ) {

                    if (obj.getAttribute("type") === "air_temperature") {

                        txt += `<br><br><span>${   obj.childNodes[0].nodeValue  }&nbsp;°C</span>`;
                    }
                }
            }
        }

        txtArray.push(txt);
    }

    return txtArray; 
};

const xml_loop = (parm_1, param_2) => {

    const retun_two = xml_doc_two(param_2.querySelectorAll("product")[0].querySelectorAll("forecast")[0].querySelectorAll("area"));
    const retun_one = xml_doc_one(parm_1.querySelectorAll("product")[0].querySelectorAll("observations")[0].querySelectorAll("station"));
    document.querySelector(".y").innerHTML = `${retun_one[0]}`;
    for (let index = 0; index <= 6; index++) {
        document.querySelectorAll(".f")[index].innerHTML = `<span>${retun_two[2][index].day}</span><br><br><span>${retun_two[2][index].date}</span>`;
        document.querySelectorAll(".z")[index].innerHTML = `${retun_two[0][index]}<span class="row block">${retun_two[1][index]}</span>`;
    }
};

export const run_fetch = async () => {
    
    const response_one = await fetch("./IDW60920.xml");
    const xml_string_one = await response_one.text();
    const xml_doc_one = new DOMParser().parseFromString(xml_string_one, "text/xml");
    const response_two = await fetch("./IDW12300.xml");
    const xml_string_two = await response_two.text();
    const xml_doc_two = new DOMParser().parseFromString(xml_string_two, "text/xml");
    xml_loop(xml_doc_one,  xml_doc_two);
};