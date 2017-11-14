function pokazegary() {
    console.log(" pokaz zegary ------------------");


    var x = document.getElementById("stronaDoUstawianiaGodzin");
    if (x) {
        console.log("  if (x)  ");
        x.remove();
        // todo tu usuwanie EventListener("keydown"  !!!!!
        //  removeEventListener("keydown");


        // addEventListener("keydown", function (event)
        window.removeEventListener('keydown', function (event) {
        });


    } else {
        console.log(" inicjacja superklasy ");
        let clocksclass = new clocksClass();
        clocksclass.makeSVG();
        console.log(" dodanie lisinera dla klawisza escape  ");



        addEventListener("keydown", function (event) {
            const key = event.key;
            console.log(" keycode " + event.keyCode);
            if (key == "Escape") {
                console.log(" guzik escape!");
                // todo spytac o ten argument
                removeEventListener("keydown", arguments.callee);

                console.log(" po removeEventListener ");
                var x = document.getElementById("stronaDoUstawianiaGodzin");
                x.remove();




            } else if (key == "ArrowUp") {
                console.log(" strzalka w góre");
            } else if (key == "ArrowDown") {






                console.log(" strzalka w dol");
            } else if (key == "ArrowLeft") {
                console.log(" strzalka w lewo");
            } else if (key == "ArrowRight") {
                console.log(" strzalka w prawo");
            } else {
                console.log(" inny guzik.................. ");
            }
        });
    }
}


