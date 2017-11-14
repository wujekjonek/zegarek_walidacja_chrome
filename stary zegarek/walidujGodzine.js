function waliduj() {
    let pobierz = document.getElementById("wybierzGodzine");
    let n = pobierz.value.length;
//----------------------------------------------------------------------------------------------------------------------
    if (n == 1) {
        console.log("n ->: " + n);
        let res = pobierz.value.substring(0, 1);
        let re = new RegExp(/[0-2]/);
        if (res.match(re)) {
        }
        else {
            let res = pobierz.value.substring(0, 0);
            pobierz.value = res;
        }
    }
//----------------------------------------------------------------------------------------------------------------------
    else if (n == 2) {
        console.log("n ->: " + n);
        let pierwszaCyfra = pobierz.value.substring(0, 1);
        if (pierwszaCyfra < 2) {
            let res = pobierz.value.substring(1, 2);
            let re = new RegExp(/[0-9]/);
            if (res.match(re)) {
                console.log("dla    H < 2   znaki od 0 do 3");
                // pobierz.value = pobierz.value + ":";
                pobierz.value = pobierz.value;
            }
            else {
                console.log("inny znak, pierwszaCyfra < 2");
                pobierz.value = pierwszaCyfra;
            }
        }
        else if (pierwszaCyfra == 2) {
            let res = pobierz.value.substring(1, 2);
            let re = new RegExp(/[0-3]/);
            if (res.match(re)) {
                console.log("dla    H = 2   znaki od 0 do 3");
                // pobierz.value = pobierz.value + ":";
                pobierz.value = pobierz.value;
            }
            else {
                console.log("inny znak, pierwszaCyfra == 2");
                pobierz.value = pierwszaCyfra;
            }
        }
        pobierz.value = pobierz.value + ":";
    }
//----------------------------------------------------------------------------------------------------------------------
    else if (n == 3) {
        console.log("n ->: " + n);
        let res = pobierz.value.substring(2, 3);
        let re = new RegExp(/[0-9]/);
        if (res.match(re)) {
            pobierz.value = "@" + res;
        }
        else {
            let res = pobierz.value.substring(0, 2);
            console.log("wpisano zły znak ");
            pobierz.value = res;
        }
        // let textarea = document.querySelector("#wybierzGodzine");
        // textarea.addEventListener("keydown", function (e) {
        //     console.log("event.which: " + event.which);
        //     console.log("pobierz.value.length  --> " + pobierz.value.length);
        //     console.log("pobierz.value         --> " + pobierz.value);
        //
        //     if (8 == e.keyCode && pobierz.value.length == 3) {
        //         // todo tu te zjadanie dwukropka
        //         // todo jak juz raz sie lisiner uruchomi to widzi go wszędzie
        //         console.log("pobierz.value.length  -->> " + pobierz.value.length);
        //         console.log("pobierz.value         -->> " + pobierz.value);
        //         let res = pobierz.value.substring(0, 1);
        //         console.log("res --> " + res);
        //         pobierz.value = res;
        //     } else {
        //         console.log("EventListener(keydown) - wcisnieto inny klawisz niz backspace.");
        //     }
        // });
    }
//----------------------------------------------------------------------------------------------------------------------
    else if (n == 4) {
        console.log("n ->: " + n);
        let res = pobierz.value.substring(3, 4);
        let re = new RegExp(/[0-5]/);
        if (res.match(re)) {
        }
        else {
            let res = pobierz.value.substring(0, 3);
            pobierz.value = res;
        }
    }
//----------------------------------------------------------------------------------------------------------------------
    else if (n == 5) {
        console.log("n ->: " + n);
        let res = pobierz.value.substring(4, 5);
        let re = new RegExp(/[0-9]/);
        if (res.match(re)) {
        }
        else {
            let res = pobierz.value.substring(0, 4);
            pobierz.value = res;
        }
    }
//----------------------------------------------------------------------------------------------------------------------
    else if (n > 5) {
        console.log("próba wprowadzenia wiecej niz 5 znaków  #####");
        let res = pobierz.value.substring(0, 5);
        pobierz.value = res;
    }
}