
ktoraGodzina();

function ktoraGodzina() {
    divNaZegarki();
    pokazPanelGodzin();
    document.getElementById("stronaDoUstawianiaGodzin").style.display = "none";
    pokazPanelMinut();
    document.getElementById("stronaDoUstawianiaMinut").style.display = "none";
    var textarea = document.querySelector("#wybierzGodzine");
    textarea.addEventListener("click", function () {
        console.log("pozycja kursora: " + pobierzPozycjeKursora(textarea));
        if (pobierzPozycjeKursora(textarea) < 3) {
            console.log("Pokaz tarcze do wybierania godzin.");
            document.getElementById("stronaDoUstawianiaGodzin").style.display = "block";
            document.getElementById("stronaDoUstawianiaMinut").style.display = "none";
        }
        else {
            console.log("Pokaz tarcze do wybierania minut.");
            document.getElementById("stronaDoUstawianiaMinut").style.display = "block";
            document.getElementById("stronaDoUstawianiaGodzin").style.display = "none";
        }
    });

    function pobierzPozycjeKursora(textarea) {
        return textarea.selectionStart
    }
}

//----------------------------------------------------------------------------------------------------------------------
function divNaZegarki() {


    let myDiv = document.createElement("div");
    myDiv.setAttribute("id", "zegarki");
    myDiv.setAttribute("class", "divzegarki");
    document.getElementById("wybierzGodzine").insertAdjacentElement("afterend", myDiv);
}

//----------------------------------------------------------------------------------------------------------------------
function pokazPanelGodzin() {
    srednica = 180;
    poradnia = "";
    divGodziny();
    svgGodziny();
    tarczaGodziny();
    spotyGodzin();
    srodekTarczyGodzin();
    kreskaGodzin();
    polaGodzin();
    poczatkowaGodzina();
    guzikAMPM();
    // todo tu dac ifa co jesli jest jakaś godzina wpisana to w zalezności
    // todo od niej ustawia am i pm a nie tylko na podstawie aktualnej godziny
    m = new Date().getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    let n = new Date().getHours();
    if (n < 10) {
        n = "0" + n;
    }
    ustawionaGodzina = n;
    kreskaGodziny.setAttribute("transform", "rotate(" + ((n * 30) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
    godzinyspot.setAttribute("transform", "rotate(" + ((n * 30) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
    if (n <= 12) {
        poradnia = "AM";
        document.getElementById("AmPm").innerHTML = poradnia;
    }
    else {
        poradnia = "PM";
        document.getElementById("AmPm").innerHTML = poradnia;
    }
}

//----------------------------------------------------------------------------------------------------------------------
function ustawianieGodziny() {
    let minu = document.getElementById("wybierzGodzine").value.substring(3, 5);
    if (document.getElementById("wybierzGodzine").value == 0) {
        // todo sprawdzic jak na zegarze beda minuty jednocyfrowe  - jest ok - dziala dobrze
        minu = new Date().getMinutes();
        if (minu < 10) {
            minu = "0" + minu;
        }
    }
    let xx = document.getElementById("wybierzGodzine");
    kreskaGodziny.setAttribute("transform", "rotate(" + ((window.event.target.id * 30) + 90) + "," + srednica / 2 + "," + srednica / 2 + ")");
    godzinyspot.setAttribute("transform", "rotate(" + ((window.event.target.id * 30) + 90) + "," + srednica / 2 + "," + srednica / 2 + ")");
    if (document.getElementById("AmPm").innerHTML === "PM") {
        if (parseInt(window.event.target.id) == 12) {
            xx.value = "00" + ":" + minu;
            ustawionaGodzina = "00";
        }
        else {
            xx.value = (parseInt(window.event.target.id) + 12) + ":" + minu;
            ustawionaGodzina = (parseInt(window.event.target.id) + 12);
        }
    }
    else {
        if (parseInt(window.event.target.id) < 10) {
            xx.value = "0" + (parseInt(window.event.target.id) + ":" + minu);
            ustawionaGodzina = "0" + parseInt(window.event.target.id);
        }
        else {
            xx.value = (parseInt(window.event.target.id) + ":" + minu);
            ustawionaGodzina = parseInt(window.event.target.id);
        }
    }
    document.getElementById("wybierzGodzine").dispatchEvent(new Event("change"));
}

//----------------------------------------------------------------------------------------------------------------------
function ustawianieMinuty() {
    let godz = document.getElementById("wybierzGodzine").value.substring(0, 2);
    // let minu = document.getElementById("wybierzGodzine").value.substring(3, 5);
    if (godz.length < 2) {
        console.log(" if dla godz.length < 2");
        let n = new Date().getHours();
        if (n < 10) {
            godz = "0" + n;
        } else {
            godz = n;
        }
        // let x = new Date().getHours();
        // if (x < 10) {
        //     godz = "0" + x;
        // }
    }
    if (window.event.target.id < 10) {
        document.getElementById("wybierzGodzine").value = godz + ":" + "0" + (window.event.target.id);
    }
    else {
        document.getElementById("wybierzGodzine").value = godz + ":" + (window.event.target.id);
    }
    kreskaMinuty.setAttribute("transform", "rotate(" + ((window.event.target.id * 6) + 90) + "," + srednica / 2 + "," + srednica / 2 + ")");
    minutyspot1.setAttribute("transform", "rotate(" + ((window.event.target.id * 6) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
    ustawionaMinuta = window.event.target.id;
    document.getElementById("wybierzGodzine").dispatchEvent(new Event("change"));
}

//----------------------------------------------------------------------------------------------------------------------
function pokazPanelMinut() {
    divMinuty();
    svgMinuty();
    tarczaMinuty();
    spotyMinut();
    srodekTarczyMinut();
    kreskaMinut();
    polaMinut();
    poczatkowaMinuta();
    kreskaMinuty.setAttribute("transform", "rotate(" + ((new Date().getMinutes() * 6) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
    minutyspot1.setAttribute("transform", "rotate(" + ((new Date().getMinutes() * 6) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
}

//----------------------------------------------------------------------------------------------------------------------
function spotyMinut() {
    let svg = document.getElementById("panelMinut");
    for (let i = 0; i < 60; i++) {
        let svgNS = "http://www.w3.org/2000/svg";
        let myCircle = document.createElementNS(svgNS, "circle");
        if (i % 5 == 0) {
            myCircle.setAttribute("class", "aktywnyspotszaryciemny");
            myCircle.setAttribute("r", (srednica * 0.02).toString());
        } else {
            myCircle.setAttribute("class", "aktywnyspotszary");
            myCircle.setAttribute("r", ((srednica * 0.02) / 2).toString());
        }
        myCircle.setAttribute("id", i.toString());
        myCircle.setAttribute("onclick", "koniecMinut()");
        myCircle.setAttribute("onmouseover", "ustawianieMinuty()");
        myCircle.setAttribute("cx", ((srednica * 0.02) + ((srednica * 0.02))).toString());
        myCircle.setAttribute("cy", (srednica * 0.5).toString());
        myCircle.setAttribute("fill", "lightblue");
        myCircle.setAttribute("transform", "rotate( " + ((i * 6) + 90) + "," + srednica * 0.5 + " ," + srednica * 0.5 + ")");
        svg.appendChild(myCircle);
    }
}

//----------------------------------------------------------------------------------------------------------------------
function spotyGodzin() {
    let svg = document.getElementById("panelGodzin");
    for (let i = 1; i < 13; i++) {
        let svgNS = "http://www.w3.org/2000/svg";
        let myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "aktywnyspotszary");
        myCircle.setAttribute("id", i.toString());
        myCircle.setAttribute("onclick", "koniecGodzin()");
        myCircle.setAttribute("onmouseover", "ustawianieGodziny()");
        myCircle.setAttribute("cx", ((srednica * 0.02) + ((srednica * 0.04))).toString());
        myCircle.setAttribute("cy", (srednica * 0.5).toString());
        myCircle.setAttribute("r", (srednica * 0.04).toString());
        myCircle.setAttribute("transform", "rotate( " + ((i * 30) + 90) + "," + srednica / 2 + " ," + srednica / 2 + ")");
        svg.appendChild(myCircle);
    }
}

//----------------------------------------------------------------------------------------------------------------------
function polaGodzin() {
    for (let i = 1; i < 13; i++) {
        let svg = document.getElementById("panelGodzin");
        let svgNS = "http://www.w3.org/2000/svg";
        let mypolygon = document.createElementNS(svgNS, "polygon");
        mypolygon.setAttribute("class", "pola");
        mypolygon.setAttribute("id", i.toString());
        mypolygon.setAttribute("onclick", "koniecGodzin()");
        mypolygon.setAttribute("onmouseover", "ustawianieGodziny()");
        mypolygon.setAttribute("points", "0" + " " + ((srednica * 0.5) - (srednica * 0.13)) + "," + 0 + " " + ((srednica * 0.5) + (srednica * 0.13)) + " , " + (srednica * 0.5) + " " + (srednica * 0.5));
        mypolygon.setAttribute("transform", "rotate( " + ((i * 30) + 90) + "," + srednica / 2 + " ," + srednica / 2 + ")");
        svg.appendChild(mypolygon);
    }
}

//----------------------------------------------------------------------------------------------------------------------
function polaMinut() {
    let svg = document.getElementById("panelMinut");
    for (let i = 0; i < 60; i++) {
        let svgNS = "http://www.w3.org/2000/svg";
        let mypolygon = document.createElementNS(svgNS, "polygon");
        mypolygon.setAttribute("class", "pola");
        mypolygon.setAttribute("id", i.toString());
        mypolygon.setAttribute("onclick", "koniecMinut()");
        mypolygon.setAttribute("onmouseover", "ustawianieMinuty()");
        mypolygon.setAttribute("points", "0" + " " + ((srednica * 0.5) - (srednica * 0.024)) + "," + 0 + " " + ((srednica * 0.5) + (srednica * 0.024)) + "," + (srednica * 0.5) + " " + (srednica * 0.5));
        mypolygon.setAttribute("transform", "rotate( " + ((i * 6) + 90) + "," + srednica * 0.5 + " ," + srednica * 0.5 + ")");
        svg.appendChild(mypolygon);
    }
}

//----------------------------------------------------------------------------------------------------------------------
function tarczaGodziny() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "tloTarcza");
    myCircle.setAttribute("cx", (srednica * 0.5).toString());
    myCircle.setAttribute("cy", (srednica * 0.5).toString());
    myCircle.setAttribute("r", (srednica * 0.5).toString());
    svg.appendChild(myCircle);
}

//----------------------------------------------------------------------------------------------------------------------
function tarczaMinuty() {
    let svg = document.getElementById("panelMinut");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "tloTarcza");
    myCircle.setAttribute("cx", (srednica * 0.5).toString());
    myCircle.setAttribute("cy", (srednica * 0.5).toString());
    myCircle.setAttribute("r", (srednica * 0.5).toString());
    svg.appendChild(myCircle);
}

//----------------------------------------------------------------------------------------------------------------------
function poczatkowaGodzina() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "aktywnyspot");
    myCircle.setAttribute("id", "godzinyspot");
    myCircle.setAttribute("onclick", "koniecGodzin()");
    myCircle.setAttribute("cx", ((srednica * 0.02) + (srednica * 0.04)).toString());
    myCircle.setAttribute("cy", ((srednica * 0.5).toString()));
    myCircle.setAttribute("r", ((srednica * 0.04).toString()));
    svg.appendChild(myCircle);
}

//----------------------------------------------------------------------------------------------------------------------
function poczatkowaMinuta() {
    let svg = document.getElementById("panelMinut");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "aktywnyspot");
    myCircle.setAttribute("id", "minutyspot1");
    myCircle.setAttribute("onclick", "koniecMinut()");
    myCircle.setAttribute("cx", ((srednica * 0.02) + ((srednica * 0.02))).toString());
    myCircle.setAttribute("cy", (srednica * 0.5).toString());
    myCircle.setAttribute("r", (srednica * 0.02).toString());
    svg.appendChild(myCircle);
}

//----------------------------------------------------------------------------------------------------------------------
function kreskaGodzin() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myLine = document.createElementNS(svgNS, "line");
    myLine.setAttribute("class", "line");
    myLine.setAttribute("id", "kreskaGodziny");
    myLine.setAttribute("x1", ((srednica * 0.5) - (srednica * 0.01)).toString());
    myLine.setAttribute("y1", ((srednica * 0.5).toString()));
    myLine.setAttribute("x2", ((srednica * 0.02) + ((srednica * 0.04) * 2)).toString());
    myLine.setAttribute("y2", (srednica * 0.5).toString());
    svg.appendChild(myLine);
}

//----------------------------------------------------------------------------------------------------------------------
function kreskaMinut() {
    let svg = document.getElementById("panelMinut");
    let svgNS = "http://www.w3.org/2000/svg";
    let myLine = document.createElementNS(svgNS, "line");
    myLine.setAttribute("class", "line");
    myLine.setAttribute("id", "kreskaMinuty");
    myLine.setAttribute("x1", (srednica * 0.5).toString());
    myLine.setAttribute("y1", (srednica * 0.5).toString());
    myLine.setAttribute("x2", ((srednica * 0.02) + ((srednica * 0.02) * 2)).toString());
    myLine.setAttribute("y2", (srednica * 0.5).toString());
    svg.appendChild(myLine);
}

//----------------------------------------------------------------------------------------------------------------------
function srodekTarczyGodzin() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "srodkowyspot");
    myCircle.setAttribute("cx", (srednica * 0.5).toString());
    myCircle.setAttribute("cy", (srednica * 0.5).toString());
    myCircle.setAttribute("r", (srednica * 0.01).toString());
    svg.appendChild(myCircle);
}

//----------------------------------------------------------------------------------------------------------------------
function srodekTarczyMinut() {
    let svg = document.getElementById("panelMinut");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "srodkowyspot");
    myCircle.setAttribute("cx", (srednica * 0.5).toString());
    myCircle.setAttribute("cy", (srednica * 0.5).toString());
    myCircle.setAttribute("r", (srednica * 0.01).toString());
    svg.appendChild(myCircle);
}


//----------------------------------------------------------------------------------------------------------------------
function svgGodziny() {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "panelGodzin");
    svg.setAttribute("width", srednica.toString());
    svg.setAttribute("height", srednica.toString());
    let div = document.getElementById("stronaDoUstawianiaGodzin");
    div.appendChild(svg);
}

//----------------------------------------------------------------------------------------------------------------------
function svgMinuty() {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "panelMinut");
    svg.setAttribute("width", srednica.toString());
    svg.setAttribute("height", srednica.toString());
    let div = document.getElementById("stronaDoUstawianiaMinut");
    div.appendChild(svg);
}

//----------------------------------------------------------------------------------------------------------------------
function zmianaAmPm() {
    if (document.getElementById("AmPm").innerHTML === "AM") {
        document.getElementById("AmPm").innerHTML = "PM";
        ustawionaGodzina = (parseInt(ustawionaGodzina) + 12);
        document.getElementById("wybierzGodzine").value = (ustawionaGodzina) + ":" + m;
    } else if (document.getElementById("AmPm").innerHTML == "PM") {
        document.getElementById("AmPm").innerHTML = "AM";
        ustawionaGodzina = (parseInt(ustawionaGodzina) - 12);
        if (ustawionaGodzina < 10) {
            document.getElementById("wybierzGodzine").value = "0" + (ustawionaGodzina) + ":" + m;
        }
        else {
            document.getElementById("wybierzGodzine").value = (ustawionaGodzina) + ":" + m;
        }
    }
    else {
    }
}

//----------------------------------------------------------------------------------------------------------------------
function guzikAMPM() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "aktywnyspotampm");
    myCircle.setAttribute("cx", (srednica / 2).toString());
    myCircle.setAttribute("cy", (srednica - (srednica * 0.07) * 5).toString());
    myCircle.setAttribute("r", (srednica * 0.07).toString());
    myCircle.setAttribute("onclick", "zmianaAmPm()");
    svg.appendChild(myCircle);
    let myText = document.createElementNS(svgNS, "text");
    myText.setAttribute("class", "ampmtext");
    myText.setAttribute("id", "AmPm");
    myText.setAttribute("x", (srednica / 2 - ( +((srednica * 0.07) * 0.67))).toString());
    myText.setAttribute("y", (srednica / 2 + ((srednica * 0.07) * 2.47)).toString());
    myText.setAttribute("onclick", "zmianaAmPm()");
    myText.setAttribute("font-size", ((srednica * 0.07) * 0.9).toString());
    myText.textContent = poradnia;
    svg.appendChild(myText);
}

//----------------------------------------------------------------------------------------------------------------------
function divGodziny() {
    let myDiv = document.createElement("div");
    myDiv.id = "stronaDoUstawianiaGodzin";
    document.getElementById("zegarki").appendChild(myDiv);
}

//----------------------------------------------------------------------------------------------------------------------
function divMinuty() {
    let myDiv = document.createElement("div");
    myDiv.id = "stronaDoUstawianiaMinut";
    document.getElementById("zegarki").appendChild(myDiv);
}

//----------------------------------------------------------------------------------------------------------------------
function koniecMinut() {
    document.getElementById("stronaDoUstawianiaMinut").style.display = "none";
}

//----------------------------------------------------------------------------------------------------------------------
function koniecGodzin() {
    document.getElementById("stronaDoUstawianiaGodzin").style.display = "none";
}


