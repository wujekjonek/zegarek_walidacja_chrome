let clockDiameter = 180;
let svgNS = "http://www.w3.org/2000/svg";



class superClass {

    // POLA KLASY
    clockDiameter: number;

    //  KONSTRUKTOR
    constructor() {
        this.clockDiameter = 180;
    }


    //  METODY

//----------------------------------------------------------------------------------------------------------------------

    makeSVG() {
        // a method that draws the SVG
        console.log(" makeSVG()");
        // let clockDiameter = 180;
        let myDiv = document.createElement('div');
        myDiv.id = "stronaDoUstawianiaGodzin";
        document.body.appendChild(myDiv);
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("id", "panelForDials");
        svg.setAttribute("class", "cale");
        svg.setAttribute("width", ((this.clockDiameter * 2) + 20).toString());
        svg.setAttribute("height", clockDiameter.toString());
        let div = document.getElementById("stronaDoUstawianiaGodzin");
        div.appendChild(svg);



        this.drawDialForMinutes();
        this.drawDialForHours();
        this.drawDotsForHours();
        this.drawCenterOfDialForHours();
        this.drawPointerForHours();
        this.drawActiveDotForHours();
        this.drawCenterOfDialForMinutes();
        this.drawDotsOfMinutes();
        this.drawPointerForMinutes();
        this.drawActiveDotForMinutes();


    }

//----------------------------------------------------------------------------------------------------------------------

    drawDialForHours() {
        // a method that draws the dial for the hours
        console.log(" drawDialForHours()");
        // let clockDiameter = 180;
        let svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        let myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "dialColor");
        myCircle.setAttribute("cx", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("r", (clockDiameter * 0.5).toString());
        myCircle.onmousemove = function showCoordinates(event) {

            let x = event.clientX;
            let y = event.clientY;

            let x2 = (x - document.getElementById("panelForDials").getBoundingClientRect().left) - (clockDiameter / 2);
            let y2 = -(((y) - document.getElementById("panelForDials").getBoundingClientRect().top) - (clockDiameter / 2));

            let godzina = Math.abs(Math.round((((Math.atan2(y2, x2)) / (Math.PI / 24)) / 2)));

            if (Math.atan2(y2, x2) < 0) {
                setHour((godzina + 6).toString());
                pointerForH.setAttribute("transform", "rotate(" + ((godzina * (15) + 180) + "," + (clockDiameter) / 2 + "," + (clockDiameter) / 2 + ")"));
                activeDotForH.setAttribute("transform", "rotate(" + ((godzina * (15) + 180) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")"));
            }
            else if (Math.atan2(y2, x2) > ((Math.PI / 24) * 13)) {
                setHour((((180 - (godzina * 15)) / 15) + 18).toString());
                pointerForH.setAttribute("transform", "rotate(" + (180 - (godzina * (15) ) + "," + (clockDiameter) / 2 + "," + (clockDiameter) / 2 + ")"));
                activeDotForH.setAttribute("transform", "rotate(" + (180 - (godzina * (15) ) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")"));
            } else {
                setHour((Math.abs((godzina - 6))).toString());
                pointerForH.setAttribute("transform", "rotate(" + (((Math.abs((godzina - 6))) * (15) + 90) + "," + (clockDiameter) / 2 + "," + (clockDiameter) / 2 + ")"));
                activeDotForH.setAttribute("transform", "rotate(" + ((Math.abs((godzina - 6))) * (15) + 90) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            }
        };
        svg.appendChild(myCircle);
    }

//----------------------------------------------------------------------------------------------------------------------

    drawDotsForHours() {
        // a method that draws the dots for the hours
        //  console.log(" drawDotsForHours()");
        //   let clockDiameter = 180;
        let svg = document.getElementById("panelForDials");
        for (let i = 1; i < 25; i++) {
            // let svgNS = "http://www.w3.org/2000/svg";
            let myCircle = document.createElementNS(svgNS, "circle");
            myCircle.setAttribute("class", "aktywnyspotszary");
            myCircle.setAttribute("cx", ((clockDiameter * 0.02) + ((clockDiameter * 0.04))).toString());
            myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
            myCircle.setAttribute("r", (clockDiameter * 0.04).toString());
            myCircle.setAttribute("transform", "rotate( " + ((i * 15) + 90) + "," + clockDiameter / 2 + " ," + clockDiameter / 2 + ")");
            svg.appendChild(myCircle);
        }
    }

//----------------------------------------------------------------------------------------------------------------------

    drawCenterOfDialForHours() {
        // a method that draws
        // console.log(" drawCenterOfDialForHours()");
        let clockDiameter = 180;
        // a method that draws the center of the dial for the hours
        let svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        let myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "centerdot");
        myCircle.setAttribute("cx", ((clockDiameter * 0.5)).toString());
        myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("r", (clockDiameter * 0.01).toString());
        svg.appendChild(myCircle);
    }

//----------------------------------------------------------------------------------------------------------------------

    drawPointerForHours() {
        // a method that draws pointer for the hours
        // console.log(" drawPointerForHours()");
        let clockDiameter = 180;
        let svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        let myLine = document.createElementNS(svgNS, "line");
        myLine.setAttribute("class", "line");
        myLine.setAttribute("id", "pointerForH");
        myLine.setAttribute("x1", ((clockDiameter * 0.5) - (clockDiameter * 0.01)).toString());
        myLine.setAttribute("y1", ((clockDiameter * 0.5).toString()));
        myLine.setAttribute("x2", ((clockDiameter * 0.02) + ((clockDiameter * 0.04) * 2)).toString());
        myLine.setAttribute("y2", (clockDiameter * 0.5).toString());
        svg.appendChild(myLine);
    }

//----------------------------------------------------------------------------------------------------------------------

    drawPointerForMinutes() {
        // a method that draws pointer for the hours
        // console.log(" drawPointerForMinutes()");
        let clockDiameter = 180;
        let svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        let myLine = document.createElementNS(svgNS, "line");
        myLine.setAttribute("class", "line");
        myLine.setAttribute("id", "pointerForM");
        myLine.setAttribute("x1", ((clockDiameter * 0.5) + clockDiameter + 10).toString());
        myLine.setAttribute("y1", (clockDiameter * 0.5).toString());
        myLine.setAttribute("x2", ((clockDiameter * 0.5) + clockDiameter / 2 + 20).toString());
        myLine.setAttribute("y2", (clockDiameter * 0.5).toString());
        svg.appendChild(myLine);
    }

//----------------------------------------------------------------------------------------------------------------------

    drawActiveDotForHours() {
        // a method that draws
        // let clockDiameter = 180;
        let svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        let myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "aktywnyspot");
        myCircle.setAttribute("id", "activeDotForH");
        myCircle.setAttribute("cx", ((clockDiameter * 0.02) + (clockDiameter * 0.04)).toString());
        myCircle.setAttribute("cy", ((clockDiameter * 0.5).toString()));
        myCircle.setAttribute("r", ((clockDiameter * 0.04).toString()));
        svg.appendChild(myCircle);
    }

//----------------------------------------------------------------------------------------------------------------------

    drawActiveDotForMinutes() {
        // a method that draws
        // let clockDiameter = 180;
        let svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        let myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "aktywnyspot");
        myCircle.setAttribute("id", "activeDotForM");
        myCircle.setAttribute("cx", (190 + 10).toString());
        myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("r", (clockDiameter * 0.02).toString());
        svg.appendChild(myCircle);
    }

//----------------------------------------------------------------------------------------------------------------------

    drawDialForMinutes() {
        // a method that draws the dial for the minutes
        // let clockDiameter = 180;
        let svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        let myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "dialColor");
        myCircle.setAttribute("cx", ((clockDiameter * 0.5) + clockDiameter + 10).toString());
        myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("r", (clockDiameter * 0.5).toString());
        myCircle.onmousemove = function showCoordinates(event) {
            let x = event.clientX;
            let y = event.clientY;
            // let mouseCoordinates = "polozenie kursora na tarczy minut X: " + x + ", Y: " + y;
            // document.getElementById("czytajMinute").innerHTML = mouseCoordinates;

            let x2 = (x - document.getElementById("panelForDials").getBoundingClientRect().left) - clockDiameter - clockDiameter / 2 - 10;
            let y2 = -(((y) - document.getElementById("panelForDials").getBoundingClientRect().top) - 90);

            let minuta = Math.abs(Math.round((((Math.atan2(y2, x2)) / (Math.PI / 60)) / 2)));
            if (Math.atan2(y2, x2) < 0) {
                setMinute((minuta + 15).toString());
                pointerForM.setAttribute("transform", "rotate(" + ((minuta * (6) + 180) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")"));
                activeDotForM.setAttribute("transform", "rotate(" + ((minuta * (6) + 180) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")"));
            }
            else if (Math.atan2(y2, x2) > ((Math.PI / 60) * 31)) {
                setMinute((((180 - (minuta * 6)) / 6) + 45).toString());
                pointerForM.setAttribute("transform", "rotate(" + (180 - (minuta * (6) ) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")"));
                activeDotForM.setAttribute("transform", "rotate(" + (180 - (minuta * (6) ) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")"));

            } else {
                setMinute((Math.abs((minuta - 15))).toString());
                pointerForM.setAttribute("transform", "rotate(" + (((Math.abs((minuta - 15))) * (6) + 90) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")"));
                activeDotForM.setAttribute("transform", "rotate(" + (((Math.abs((minuta - 15))) * (6) + 90) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")"));
            }
        };
        svg.appendChild(myCircle);
    }

//----------------------------------------------------------------------------------------------------------------------

    drawCenterOfDialForMinutes() {
        // a method that draws the center of the dial for the minutes
        // let clockDiameter = 180;
        let svg = document.getElementById("panelForDials");
        let myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "centerdot");
        myCircle.setAttribute("cx", ((clockDiameter * 0.5) + clockDiameter + 10).toString());
        myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("r", (clockDiameter * 0.01).toString());
        svg.appendChild(myCircle);
    }

//----------------------------------------------------------------------------------------------------------------------

    drawDotsOfMinutes() {
        // a method that draws gray dots for minutes
        // let clockDiameter = 180;
        let svg = document.getElementById("panelForDials");
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
            myCircle.setAttribute("cx", (190 + 10).toString());
            myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
            myCircle.setAttribute("fill", "lightblue");
            myCircle.setAttribute("transform", "rotate( " + ((i * 6) + 90) + "," + (((clockDiameter * 0.5) + clockDiameter) + 10) + " ," + clockDiameter * 0.5 + ")");
            svg.appendChild(myCircle);
        }
    }
}


function setHour(x) {
    if (x < 10) {
        x = "0" + x;
    }
    console.log("to jest x: ---->  " + x);
    document.getElementById("setTime").value = x;
}





function setMinute(y) {
    if (y < 10) {
        y = "0" + y;
    }
    console.log("to jest y: ---->  " + y);
    document.getElementById("setTime").value = y;
}























