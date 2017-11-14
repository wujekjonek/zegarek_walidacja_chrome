// declare let clockDiameter: number;
var clockDiameter = 180;
var svgNS = "http://www.w3.org/2000/svg";
var clocksClass = (function () {
    //  KONSTRUKTOR
    function clocksClass() {
        this.clockDiameter = 180;
    }
    //  METODY
    //----------------------------------------------------------------------------------------------------------------------
    clocksClass.prototype.makeSVG = function () {
        // a method that draws the SVG
        console.log(" makeSVG()");
        // let clockDiameter = 180;
        var myDiv = document.createElement('div');
        myDiv.id = "stronaDoUstawianiaGodzin";
        document.body.appendChild(myDiv);
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("id", "panelForDials");
        svg.setAttribute("class", "cale");
        svg.setAttribute("width", ((this.clockDiameter * 2) + 20).toString());
        svg.setAttribute("height", clockDiameter.toString());
        var div = document.getElementById("stronaDoUstawianiaGodzin");
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
    };
    //----------------------------------------------------------------------------------------------------------------------
    clocksClass.prototype.drawDialForHours = function () {
        // a method that draws the dial for the hours
        console.log(" drawDialForHours()");
        // let clockDiameter = 180;
        var svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        var myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "dialColor");
        myCircle.setAttribute("cx", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("r", (clockDiameter * 0.5).toString());
        myCircle.onmousemove = function showCoordinates(event) {
            var x = event.clientX;
            var y = event.clientY;
            var x2 = (x - document.getElementById("panelForDials").getBoundingClientRect().left) - (clockDiameter / 2);
            var y2 = -(((y) - document.getElementById("panelForDials").getBoundingClientRect().top) - (clockDiameter / 2));
            var godzina = Math.abs(Math.round((((Math.atan2(y2, x2)) / (Math.PI / 24)) / 2)));
            if (Math.atan2(y2, x2) < 0) {
                setHour((godzina + 6).toString());
                pointerForH.setAttribute("transform", "rotate(" + ((godzina * (15) + 180) + "," + (clockDiameter) / 2 + "," + (clockDiameter) / 2 + ")"));
                activeDotForH.setAttribute("transform", "rotate(" + ((godzina * (15) + 180) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")"));
            }
            else if (Math.atan2(y2, x2) > ((Math.PI / 24) * 13)) {
                setHour((((180 - (godzina * 15)) / 15) + 18).toString());
                pointerForH.setAttribute("transform", "rotate(" + (180 - (godzina * (15)) + "," + (clockDiameter) / 2 + "," + (clockDiameter) / 2 + ")"));
                activeDotForH.setAttribute("transform", "rotate(" + (180 - (godzina * (15)) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")"));
            }
            else {
                setHour((Math.abs((godzina - 6))).toString());
                pointerForH.setAttribute("transform", "rotate(" + (((Math.abs((godzina - 6))) * (15) + 90) + "," + (clockDiameter) / 2 + "," + (clockDiameter) / 2 + ")"));
                activeDotForH.setAttribute("transform", "rotate(" + ((Math.abs((godzina - 6))) * (15) + 90) + "," + clockDiameter / 2 + "," + clockDiameter / 2 + ")");
            }
        };
        svg.appendChild(myCircle);
    };
    //----------------------------------------------------------------------------------------------------------------------
    clocksClass.prototype.drawDotsForHours = function () {
        // a method that draws the dots for the hours
        //  console.log(" drawDotsForHours()");
        //   let clockDiameter = 180;
        var svg = document.getElementById("panelForDials");
        for (var i = 1; i < 25; i++) {
            // let svgNS = "http://www.w3.org/2000/svg";
            var myCircle = document.createElementNS(svgNS, "circle");
            myCircle.setAttribute("class", "aktywnyspotszary");
            myCircle.setAttribute("cx", ((clockDiameter * 0.02) + ((clockDiameter * 0.04))).toString());
            myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
            myCircle.setAttribute("r", (clockDiameter * 0.04).toString());
            myCircle.setAttribute("transform", "rotate( " + ((i * 15) + 90) + "," + clockDiameter / 2 + " ," + clockDiameter / 2 + ")");
            svg.appendChild(myCircle);
        }
    };
    //----------------------------------------------------------------------------------------------------------------------
    clocksClass.prototype.drawCenterOfDialForHours = function () {
        // a method that draws
        // console.log(" drawCenterOfDialForHours()");
        var clockDiameter = 180;
        // a method that draws the center of the dial for the hours
        var svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        var myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "centerdot");
        myCircle.setAttribute("cx", ((clockDiameter * 0.5)).toString());
        myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("r", (clockDiameter * 0.01).toString());
        svg.appendChild(myCircle);
    };
    //----------------------------------------------------------------------------------------------------------------------
    clocksClass.prototype.drawPointerForHours = function () {
        // a method that draws pointer for the hours
        // console.log(" drawPointerForHours()");
        var clockDiameter = 180;
        var svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        var myLine = document.createElementNS(svgNS, "line");
        myLine.setAttribute("class", "line");
        myLine.setAttribute("id", "pointerForH");
        myLine.setAttribute("x1", ((clockDiameter * 0.5) - (clockDiameter * 0.01)).toString());
        myLine.setAttribute("y1", ((clockDiameter * 0.5).toString()));
        myLine.setAttribute("x2", ((clockDiameter * 0.02) + ((clockDiameter * 0.04) * 2)).toString());
        myLine.setAttribute("y2", (clockDiameter * 0.5).toString());
        svg.appendChild(myLine);
    };
    //----------------------------------------------------------------------------------------------------------------------
    clocksClass.prototype.drawPointerForMinutes = function () {
        // a method that draws pointer for the hours
        // console.log(" drawPointerForMinutes()");
        var clockDiameter = 180;
        var svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        var myLine = document.createElementNS(svgNS, "line");
        myLine.setAttribute("class", "line");
        myLine.setAttribute("id", "pointerForM");
        myLine.setAttribute("x1", ((clockDiameter * 0.5) + clockDiameter + 10).toString());
        myLine.setAttribute("y1", (clockDiameter * 0.5).toString());
        myLine.setAttribute("x2", ((clockDiameter * 0.5) + clockDiameter / 2 + 20).toString());
        myLine.setAttribute("y2", (clockDiameter * 0.5).toString());
        svg.appendChild(myLine);
    };
    //----------------------------------------------------------------------------------------------------------------------
    clocksClass.prototype.drawActiveDotForHours = function () {
        // a method that draws
        // let clockDiameter = 180;
        var svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        var myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "aktywnyspot");
        myCircle.setAttribute("id", "activeDotForH");
        myCircle.setAttribute("cx", ((clockDiameter * 0.02) + (clockDiameter * 0.04)).toString());
        myCircle.setAttribute("cy", ((clockDiameter * 0.5).toString()));
        myCircle.setAttribute("r", ((clockDiameter * 0.04).toString()));
        svg.appendChild(myCircle);
    };
    //----------------------------------------------------------------------------------------------------------------------
    clocksClass.prototype.drawActiveDotForMinutes = function () {
        // a method that draws
        // let clockDiameter = 180;
        var svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        var myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "aktywnyspot");
        myCircle.setAttribute("id", "activeDotForM");
        myCircle.setAttribute("cx", (190 + 10).toString());
        myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("r", (clockDiameter * 0.02).toString());
        svg.appendChild(myCircle);
    };
    //----------------------------------------------------------------------------------------------------------------------
    clocksClass.prototype.drawDialForMinutes = function () {
        // a method that draws the dial for the minutes
        // let clockDiameter = 180;
        var svg = document.getElementById("panelForDials");
        // let svgNS = "http://www.w3.org/2000/svg";
        var myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "dialColor");
        myCircle.setAttribute("cx", ((clockDiameter * 0.5) + clockDiameter + 10).toString());
        myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("r", (clockDiameter * 0.5).toString());
        myCircle.onmousemove = function showCoordinates(event) {
            var x = event.clientX;
            var y = event.clientY;
            // let mouseCoordinates = "polozenie kursora na tarczy minut X: " + x + ", Y: " + y;
            // document.getElementById("czytajMinute").innerHTML = mouseCoordinates;
            var x2 = (x - document.getElementById("panelForDials").getBoundingClientRect().left) - clockDiameter - clockDiameter / 2 - 10;
            var y2 = -(((y) - document.getElementById("panelForDials").getBoundingClientRect().top) - 90);
            var minuta = Math.abs(Math.round((((Math.atan2(y2, x2)) / (Math.PI / 60)) / 2)));
            if (Math.atan2(y2, x2) < 0) {
                setMinute((minuta + 15).toString());
                pointerForM.setAttribute("transform", "rotate(" + ((minuta * (6) + 180) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")"));
                activeDotForM.setAttribute("transform", "rotate(" + ((minuta * (6) + 180) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")"));
            }
            else if (Math.atan2(y2, x2) > ((Math.PI / 60) * 31)) {
                setMinute((((180 - (minuta * 6)) / 6) + 45).toString());
                pointerForM.setAttribute("transform", "rotate(" + (180 - (minuta * (6)) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")"));
                activeDotForM.setAttribute("transform", "rotate(" + (180 - (minuta * (6)) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")"));
            }
            else {
                setMinute((Math.abs((minuta - 15))).toString());
                pointerForM.setAttribute("transform", "rotate(" + (((Math.abs((minuta - 15))) * (6) + 90) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")"));
                activeDotForM.setAttribute("transform", "rotate(" + (((Math.abs((minuta - 15))) * (6) + 90) + "," + ((clockDiameter * 0.5) + clockDiameter + 10) + "," + clockDiameter * 0.5 + ")"));
            }
        };
        svg.appendChild(myCircle);
    };
    //----------------------------------------------------------------------------------------------------------------------
    clocksClass.prototype.drawCenterOfDialForMinutes = function () {
        // a method that draws the center of the dial for the minutes
        // let clockDiameter = 180;
        var svg = document.getElementById("panelForDials");
        var myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "centerdot");
        myCircle.setAttribute("cx", ((clockDiameter * 0.5) + clockDiameter + 10).toString());
        myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
        myCircle.setAttribute("r", (clockDiameter * 0.01).toString());
        svg.appendChild(myCircle);
    };
    //----------------------------------------------------------------------------------------------------------------------
    clocksClass.prototype.drawDotsOfMinutes = function () {
        // a method that draws gray dots for minutes
        // let clockDiameter = 180;
        var svg = document.getElementById("panelForDials");
        for (var i = 0; i < 60; i++) {
            // let svgNS = "http://www.w3.org/2000/svg";
            var myCircle = document.createElementNS(svgNS, "circle");
            if (i % 5 == 0) {
                myCircle.setAttribute("class", "aktywnyspotszary");
                myCircle.setAttribute("r", (clockDiameter * 0.02).toString());
            }
            else {
                myCircle.setAttribute("class", "aktywnyspotszary");
                myCircle.setAttribute("r", ((clockDiameter * 0.02) / 2).toString());
            }
            myCircle.setAttribute("cx", (190 + 10).toString());
            myCircle.setAttribute("cy", (clockDiameter * 0.5).toString());
            myCircle.setAttribute("fill", "lightblue");
            myCircle.setAttribute("transform", "rotate( " + ((i * 6) + 90) + "," + (((clockDiameter * 0.5) + clockDiameter) + 10) + " ," + clockDiameter * 0.5 + ")");
            svg.appendChild(myCircle);
        }
    };
    return clocksClass;
}());
//----------------------------------------------------------------------------------------------------------------------
function setHour(x) {
    if (x < 10) {
        x = "0" + x;
    }
    console.log("to jest x: ---->  " + x);
    document.getElementById("setTime")["value"] = x + ":00";
    // document.getElementById("setTime").value = x + ":00";
    // (<HTMLInputElement>document.getElementById("setTime")).value = x + ":00";
}
//----------------------------------------------------------------------------------------------------------------------
function setMinute(y) {
    var a = document.getElementById("setTime").value;
    var h = a.substring(0, 3);
    // console.log("to jest a: ---->  " + a);
    // console.log("to jest h: ---->  " + h);
    if (y < 10) {
        y = "0" + y;
    }
    console.log("to jest y: ---->  " + y);
    document.getElementById("setTime").value = h + y;
}
