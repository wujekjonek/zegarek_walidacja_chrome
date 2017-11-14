CreateClock();


function CreateClock() {

    clockDiameter = 180;
    //    srednica = 180;
    //    mouseCoordinates


    var myDiv = document.createElement('div');
    myDiv.id = "stronaDoUstawianiaGodzin";
    document.body.appendChild(myDiv);

    svgGodziny();
    tarczaGodziny();
    tarczaMinuty();
    dotsOfHours();
    dotsOfMinutes();
    srodekTarczyGodzin();
    // srodekTarczyMinut();
    poczatkowaGodzina();
    kreskaGodzin();
    kreskaMinut();

}

//----------------------------------------------------------------------------------------------------------------------
function svgGodziny() {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "panelGodzin");
    svg.setAttribute("class", "cale");
    svg.setAttribute("width", ((clockDiameter * 2) + 20).toString());
    svg.setAttribute("height", clockDiameter.toString());
    let div = document.getElementById("stronaDoUstawianiaGodzin");
    div.appendChild(svg);
}

//----------------------------------------------------------------------------------------------------------------------
function tarczaGodziny() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "tloTarcza");
    myCircle.setAttribute("cx", (clockDiameter * 0.5).toString());
    myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
    myCircle.setAttribute("r", (clockDiameter * 0.5).toString());

    myCircle.onmousemove = function showCoordinates(event) {
        let x = event.clientX;
        let y = event.clientY;
        let mouseCoordinates = "polozenie kursora na tarczy godzin X: " + x + ", Y: " + y;
        document.getElementById("czytajGodzine").innerHTML = mouseCoordinates;


        // let svg = document.getElementById("panelGodzin");
        // let svgNS = "http://www.w3.org/2000/svg";
        // let myLine = document.createElementNS(svgNS, "line");
        // myLine.setAttribute("class", "line");
        // // myLine.setAttribute("id", "kreskaGodziny");
        // myLine.setAttribute("x1", (clockDiameter * 0.5).toString());
        // myLine.setAttribute("y1", (clockDiameter * 0.5).toString());
        // myLine.setAttribute("x2", (x - document.getElementById("panelGodzin").getBoundingClientRect().left).toString());
        // myLine.setAttribute("y2", (y - document.getElementById("panelGodzin").getBoundingClientRect().top).toString());
        // svg.appendChild(myLine);


        let x1 = (clockDiameter * 0.5) - 90;
        let y1 = (clockDiameter * 0.5) - 90;
        let x2 = (x - document.getElementById("panelGodzin").getBoundingClientRect().left) - 90;
        let y2 = -(((y) - document.getElementById("panelGodzin").getBoundingClientRect().top) - 90);


        let wspolczynnikKierunkowy = (y2 - y1) / (x2 - x1);

        // document.getElementById("wspolczynnik").innerHTML = "kąt nachylenia: "+(Math.round(wspolczynnikKierunkowy)) ;
        // document.getElementById("wspolczynnik").innerHTML = "kąt nachylenia: "+(wspolczynnikKierunkowy) ;

        document.getElementById("wspolczynnik").innerHTML = "kąt nachylenia: " + Math.atan2(y2, x2);
        document.getElementById("sinus").innerHTML = "x1: " + x1;
        document.getElementById("cosinus").innerHTML = "y1: " + y1;
        document.getElementById("tangens").innerHTML = "x2: " + x2;
        document.getElementById("atangens").innerHTML = "y2: " + y2;


        document.getElementById("dzielenie").innerHTML = "dzielenie: " + (((Math.atan2(y2, x2))/0.1308996938995747)/2);


//----------------------------------------------------------------------------------------------------------------------
        if (Math.atan2(y2, x2) > -0.1308996938995747 && Math.atan2(y2, x2) < 0.1308996938995747) {
            document.getElementById("cwiartka").innerHTML = "6 ";
            godzinyspot.setAttribute("transform", "rotate(" + (180) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (180) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > 0.1308996938995747 && Math.atan2(y2, x2) < 0.39269908169872414) {
            document.getElementById("cwiartka").innerHTML = "5 ";
            godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > 0.39269908169872414 && Math.atan2(y2, x2) < 0.6544984694978735) {
            document.getElementById("cwiartka").innerHTML = "4 ";
            godzinyspot.setAttribute("transform", "rotate(" + (150) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (150) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > 0.6544984694978735 && Math.atan2(y2, x2) < 0.916297857297023) {
            document.getElementById("cwiartka").innerHTML = "3 ";
            godzinyspot.setAttribute("transform", "rotate(" + (135) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (135) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > 0.916297857297023 && Math.atan2(y2, x2) < 1.1780972450961724) {
            document.getElementById("cwiartka").innerHTML = "2 ";
            godzinyspot.setAttribute("transform", "rotate(" + (120) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (120) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > 1.1780972450961724 && Math.atan2(y2, x2) < 1.4398966328953218) {
            document.getElementById("cwiartka").innerHTML = "1 ";
            godzinyspot.setAttribute("transform", "rotate(" + (105) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (105) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > 1.4398966328953218 && Math.atan2(y2, x2) < 1.7016960206944711) {
            document.getElementById("cwiartka").innerHTML = "00 ";
            godzinyspot.setAttribute("transform", "rotate(" + (90) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (90) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > 1.7016960206944711 && Math.atan2(y2, x2) < 1.9634954084936205) {
            document.getElementById("cwiartka").innerHTML = "23 ";
            godzinyspot.setAttribute("transform", "rotate(" + (75) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (75) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > 1.9634954084936205 && Math.atan2(y2, x2) < 2.22529479629277) {
            document.getElementById("cwiartka").innerHTML = "22 ";
            godzinyspot.setAttribute("transform", "rotate(" + (60) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (60) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > 2.22529479629277 && Math.atan2(y2, x2) < 2.4870941840919194) {
            document.getElementById("cwiartka").innerHTML = "21 ";
            godzinyspot.setAttribute("transform", "rotate(" + (45) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (45) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > 2.4870941840919194 && Math.atan2(y2, x2) < 2.748893571891069) {
            document.getElementById("cwiartka").innerHTML = "20 ";
            godzinyspot.setAttribute("transform", "rotate(" + (30) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (30) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > 2.748893571891069 && Math.atan2(y2, x2) < 3.010692959690218) {
            document.getElementById("cwiartka").innerHTML = "19 ";
            godzinyspot.setAttribute("transform", "rotate(" + (15) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (15) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > 3.010692959690218 || Math.atan2(y2, x2) < -3.010692959690218) {
            document.getElementById("cwiartka").innerHTML = "18 ";
            godzinyspot.setAttribute("transform", "rotate(" + (0) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (0) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > -3.010692959690218 && Math.atan2(y2, x2) < -2.748893571891069) {
            document.getElementById("cwiartka").innerHTML = "17 ";
            godzinyspot.setAttribute("transform", "rotate(" + (345) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (345) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > -2.748893571891069 && Math.atan2(y2, x2) < -2.4870941840919194) {
            document.getElementById("cwiartka").innerHTML = "16 ";
            godzinyspot.setAttribute("transform", "rotate(" + (330) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (330) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > -2.4870941840919194 && Math.atan2(y2, x2) < -2.22529479629277) {
            document.getElementById("cwiartka").innerHTML = "15 ";
            godzinyspot.setAttribute("transform", "rotate(" + (315) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (315) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > -2.22529479629277 && Math.atan2(y2, x2) < -1.9634954084936205) {
            document.getElementById("cwiartka").innerHTML = "14 ";
            godzinyspot.setAttribute("transform", "rotate(" + (300) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (300) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > -1.9634954084936205 && Math.atan2(y2, x2) < -1.7016960206944711) {
            document.getElementById("cwiartka").innerHTML = "13 ";
            godzinyspot.setAttribute("transform", "rotate(" + (285) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (285) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");


        } else if (Math.atan2(y2, x2) > -1.7016960206944711 && Math.atan2(y2, x2) < -1.4398966328953218) {
            document.getElementById("cwiartka").innerHTML = "12 ";
            godzinyspot.setAttribute("transform", "rotate(" + (270) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (270) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > -1.4398966328953218 && Math.atan2(y2, x2) < -1.1780972450961724) {
            document.getElementById("cwiartka").innerHTML = "11 ";
            godzinyspot.setAttribute("transform", "rotate(" + (255) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (255) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > -1.1780972450961724 && Math.atan2(y2, x2) < -0.916297857297023) {
            document.getElementById("cwiartka").innerHTML = "10 ";
            godzinyspot.setAttribute("transform", "rotate(" + (240) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (240) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > -0.916297857297023 && Math.atan2(y2, x2) < -0.6544984694978735) {
            document.getElementById("cwiartka").innerHTML = "9 ";
            godzinyspot.setAttribute("transform", "rotate(" + (225) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (225) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");

        } else if (Math.atan2(y2, x2) > -0.6544984694978735 && Math.atan2(y2, x2) < -0.39269908169872414) {
            document.getElementById("cwiartka").innerHTML = "8 ";
            godzinyspot.setAttribute("transform", "rotate(" + (210) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (210) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");


        } else if (Math.atan2(y2, x2) > -0.39269908169872414 && Math.atan2(y2, x2) < -0.1308996938995747) {
            document.getElementById("cwiartka").innerHTML = "7 ";
            godzinyspot.setAttribute("transform", "rotate(" + (195) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaGodziny.setAttribute("transform", "rotate(" + (195) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");


        } else {
            document.getElementById("cwiartka").innerHTML = "else: ";
        }


//----------------------------------------------------------------------------------------------------------------------

    };
    svg.appendChild(myCircle);
}

//----------------------------------------------------------------------------------------------------------------------
function tarczaMinuty() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "tloTarcza2");
    myCircle.setAttribute("cx", ((clockDiameter * 0.5) + clockDiameter + 10).toString());
    myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
    myCircle.setAttribute("r", (clockDiameter * 0.5).toString());
    myCircle.onmousemove = function showCoordinates(event) {
        let x = event.clientX;
        let y = event.clientY;
        let mouseCoordinates = "polozenie kursora na tarczy minut X: " + x + ", Y: " + y;
        document.getElementById("czytajMinute").innerHTML = mouseCoordinates;


        // let x1 = (clockDiameter * 0.5) - 90;
        // let y1 = (clockDiameter * 0.5) - 90;
        let x2 = (x - document.getElementById("panelGodzin").getBoundingClientRect().left) - clockDiameter - clockDiameter / 2 - 10;
        let y2 = -(((y) - document.getElementById("panelGodzin").getBoundingClientRect().top) - 90);


        console.log("x2: " + x2);
        console.log("y2: " + y2);


        console.log(Math.atan2(y2, x2));

        // myCircle.setAttribute("cx", ((clockDiameter * 0.5) + clockDiameter + 10).toString());
        // myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());


        if (Math.atan2(y2, x2) > -0.05235987755982988 && Math.atan2(y2, x2) < 0.05235987755982988) {
            document.getElementById("minuty").innerHTML = "15 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (180) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (180) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 0.15707963267948966 && Math.atan2(y2, x2) < 0.2617993877991494) {
            document.getElementById("minuty").innerHTML = "14 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (174) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 0.2617993877991494 && Math.atan2(y2, x2) < 0.36651914291880916) {
            document.getElementById("minuty").innerHTML = "13 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (168) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");


        } else if (Math.atan2(y2, x2) > 0.36651914291880916 && Math.atan2(y2, x2) < 0.47123889803846897) {
            document.getElementById("minuty").innerHTML = "12 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (162) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 0.47123889803846897 && Math.atan2(y2, x2) < 0.5759586531581287) {
            document.getElementById("minuty").innerHTML = "11 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (156) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 0.5759586531581287 && Math.atan2(y2, x2) < 0.6806784082777885) {
            document.getElementById("minuty").innerHTML = "10 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (150) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 0.6806784082777885 && Math.atan2(y2, x2) < 0.7853981633974483) {
            document.getElementById("minuty").innerHTML = "9 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (144) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 0.7853981633974483 && Math.atan2(y2, x2) < 0.890117918517108) {
            document.getElementById("minuty").innerHTML = "8 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (138) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 0.890117918517108 && Math.atan2(y2, x2) < 0.9948376736367678) {
            document.getElementById("minuty").innerHTML = "7 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (132) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 0.9948376736367678 && Math.atan2(y2, x2) < 1.0995574287564276) {
            document.getElementById("minuty").innerHTML = "6 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (126) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 1.0995574287564276 && Math.atan2(y2, x2) < 1.2042771838760873) {
            document.getElementById("minuty").innerHTML = "5 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (120) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 1.2042771838760873 && Math.atan2(y2, x2) < 1.308996938995747) {
            document.getElementById("minuty").innerHTML = "4 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (114) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 1.308996938995747 && Math.atan2(y2, x2) < 1.413716694115407) {
            document.getElementById("minuty").innerHTML = "3 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (108) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 1.413716694115407 && Math.atan2(y2, x2) < 1.5184364492350666) {
            document.getElementById("minuty").innerHTML = "2 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (102) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 1.5184364492350666 && Math.atan2(y2, x2) < 1.6231562043547263) {
            document.getElementById("minuty").innerHTML = "1 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (96) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");

        } else if (Math.atan2(y2, x2) > 1.6231562043547263 && Math.atan2(y2, x2) < 1.7278759594743862) {
            document.getElementById("minuty").innerHTML = "0 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (90) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");



        } else if (Math.atan2(y2, x2) > 1.7278759594743862 && Math.atan2(y2, x2) < 1.832595714594046) {
            document.getElementById("minuty").innerHTML = "59 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (84) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");



        } else if (Math.atan2(y2, x2) > 1.832595714594046 && Math.atan2(y2, x2) < 1.9373154697137056) {
            document.getElementById("minuty").innerHTML = "58 ";
            // godzinyspot.setAttribute("transform", "rotate(" + (165) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            kreskaMinuty.setAttribute("transform", "rotate(" + (78) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")");














        } else {
            document.getElementById("minuty").innerHTML = "else: ";
        }

        // let svg = document.getElementById("panelGodzin");
        // let svgNS = "http://www.w3.org/2000/svg";
        // let myLine = document.createElementNS(svgNS, "line");
        // myLine.setAttribute("class", "line");
        // // myLine.setAttribute("id", "kreskaGodziny");
        // myLine.setAttribute("x1", ((clockDiameter * 0.5) + clockDiameter + 10).toString());
        // myLine.setAttribute("y1", (clockDiameter * 0.5).toString());
        // myLine.setAttribute("x2", (x - document.getElementById("panelGodzin").getBoundingClientRect().left).toString());
        // myLine.setAttribute("y2", (y - document.getElementById("panelGodzin").getBoundingClientRect().top).toString());
        // svg.appendChild(myLine);
        console.log(" minuty ");
    };


    svg.appendChild(myCircle);
}


//----------------------------------------------------------------------------------------------------------------------
function dotsOfMinutes() {
// function spotyMinut() {
    // function that draws gray dots of minutes
    let svg = document.getElementById("panelGodzin");
    for (let i = 0; i < 60; i++) {
        let svgNS = "http://www.w3.org/2000/svg";
        let myCircle = document.createElementNS(svgNS, "circle");
        if (i % 5 == 0) {
            myCircle.setAttribute("class", "aktywnyspotszary");
            myCircle.setAttribute("r", (clockDiameter * 0.02).toString());
        } else {
            myCircle.setAttribute("class", "aktywnyspotszary");
            myCircle.setAttribute("r", ((clockDiameter * 0.02) / 2).toString());
        }
        myCircle.setAttribute("id", i.toString());
        // myCircle.setAttribute("onclick", "koniecMinut()");
        // myCircle.setAttribute("onmouseover", "ustawianieMinuty()");

        myCircle.onmouseover = function wypisz() {
            document.getElementById("minuta").innerHTML = "minuta " + i.toString();
        };

        // myCircle.setAttribute("cx", (((clockDiameter * 0.02) + ((clockDiameter * 0.02)))).toString());
        myCircle.setAttribute("cx", (190 + 10).toString());
        myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("fill", "lightblue");
        // myCircle.setAttribute("transform", "rotate( " + ((i * 6) + 90) + "," + clockDiameter * 0.5 + " ," + clockDiameter * 0.5 + ")");
        myCircle.setAttribute("transform", "rotate( " + ((i * 6) + 90) + "," + (((clockDiameter * 0.5) + clockDiameter) + 10) + " ," + clockDiameter * 0.5 + ")");
        svg.appendChild(myCircle);
    }
}


//----------------------------------------------------------------------------------------------------------------------


function kreskaGodzin() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myLine = document.createElementNS(svgNS, "line");
    myLine.setAttribute("class", "line");
    myLine.setAttribute("id", "kreskaGodziny");
    myLine.setAttribute("x1", ((clockDiameter * 0.5) - (clockDiameter * 0.01)).toString());
    myLine.setAttribute("y1", ((clockDiameter * 0.5).toString()));
    myLine.setAttribute("x2", ((clockDiameter * 0.02) + ((clockDiameter * 0.04) * 2)).toString());
    myLine.setAttribute("y2", (clockDiameter * 0.5).toString());
    svg.appendChild(myLine);
}

function poczatkowaGodzina() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "aktywnyspot");
    myCircle.setAttribute("id", "godzinyspot");
    // myCircle.setAttribute("onclick", "koniecGodzin()");
    myCircle.setAttribute("cx", ((clockDiameter * 0.02) + (clockDiameter * 0.04)).toString());
    myCircle.setAttribute("cy", ((clockDiameter * 0.5).toString()));
    myCircle.setAttribute("r", ((clockDiameter * 0.04).toString()));
    svg.appendChild(myCircle);
}


//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------


function srodekTarczyMinut() {
    // a function that draws the center of the dial of the minutes
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "srodkowyspot");
    myCircle.setAttribute("cx", ((clockDiameter * 0.5) + clockDiameter + 10).toString());
    myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
    myCircle.setAttribute("r", (clockDiameter * 0.01).toString());
    svg.appendChild(myCircle);

}

//----------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------
function srodekTarczyGodzin() {

    // a function that draws the center of the dial of the hours

    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "srodkowyspot");
    myCircle.setAttribute("cx", ((clockDiameter * 0.5)).toString());
    myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
    myCircle.setAttribute("r", (clockDiameter * 0.01).toString());
    svg.appendChild(myCircle);
}


//----------------------------------------------------------------------------------------------------------------------

function dotsOfHours() {

    // function that draws gray dots of hours

    let svg = document.getElementById("panelGodzin");
    for (let i = 1; i < 25; i++) {
        let svgNS = "http://www.w3.org/2000/svg";
        let myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "aktywnyspotszary");
        myCircle.setAttribute("id", i.toString());
        myCircle.onmouseover = function wypisz() {
            document.getElementById("godzina").innerHTML = "godzina " + i.toString();
        };
        myCircle.setAttribute("cx", ((clockDiameter * 0.02) + ((clockDiameter * 0.04))).toString());
        myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("r", (clockDiameter * 0.04).toString());
        myCircle.setAttribute("transform", "rotate( " + ((i * 15) + 90) + "," + clockDiameter / 2 + " ," + clockDiameter / 2 + ")");
        svg.appendChild(myCircle);
    }
}


//----------------------------------------------------------------------------------------------------------------------
function kreskaMinut() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myLine = document.createElementNS(svgNS, "line");
    myLine.setAttribute("class", "line");
    myLine.setAttribute("id", "kreskaMinuty");
    myLine.setAttribute("x1", ((clockDiameter * 0.5) + clockDiameter + 10).toString());
    myLine.setAttribute("y1", (clockDiameter * 0.5).toString());
    myLine.setAttribute("x2", ((clockDiameter * 0.5) + clockDiameter / 2 + 20).toString());
    myLine.setAttribute("y2", (clockDiameter * 0.5).toString());
    svg.appendChild(myLine);
}





