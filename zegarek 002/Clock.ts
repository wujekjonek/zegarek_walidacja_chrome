class TimeValidator {

    inputControlId: string;
    inputCtrl: Any;
    timeValidator: TimeValidator;
    timeParser: TimeParser;
    timeFormatter: TimeFormatter;
    emptyTimeStr: string;

    constructor(inputControlId) {
        this.inputControlId = inputControlId;
        emptyTimeStr = '--:--';
    }

    initialize() {
        this.inputCtrl = document.getElementById(this.inputControlId);
        this.timeValidator = new TimeValidator();
        this.timeParser = new TimeParser();
        this.timeFormatter = new TimeFormatter();
        this.inputCtrl. addEventListener("keydown", this.onKeyDown);
    }

    destroy(){
        removeEventListener("keydown", this.onKeyDown);
    }


    onKeyDown(event) {
        const key = event.key;
        console.log(" keycode " + event.keyCode);
        if (key == "Escape") {
            console.log(" guzik escape!");


            // todo spytac o ten argument
            // removeEventListener("keydown", arguments.callee);


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
            var timeStr = inputCtrl.innerHtml;
            var time = this.timeParser.Parse(timeStr);
            if(time == null){
            }
        }
    }



    setTime(time) {
        if(this.timeValidator.IsValid() == false){
            return false;
        }
        var timeStr = this.timeFormatter.Format(time);//11:22
        this.inputCtrl.innerHtml(timeStr);
    }


    getTime() {
        var timeStr = inputCtrl.innerHtml;
        var time = this.timeParser.Parse(timeStr);
        return time;
    }


}