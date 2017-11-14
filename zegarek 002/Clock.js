var TimeValidator = (function () {
    function TimeValidator(inputControlId) {
        this.inputControlId = inputControlId;
        emptyTimeStr = '--:--';
    }
    TimeValidator.prototype.initialize = function () {
        this.inputCtrl = document.getElementById(this.inputControlId);
        this.timeValidator = new TimeValidator();
        this.timeParser = new TimeParser();
        this.timeFormatter = new TimeFormatter();
        this.inputCtrl.addEventListener("keydown", this.onKeyDown);
    };
    TimeValidator.prototype.destroy = function () {
        removeEventListener("keydown", this.onKeyDown);
    };
    TimeValidator.prototype.onKeyDown = function (event) {
        var key = event.key;
        console.log(" keycode " + event.keyCode);
        if (key == "Escape") {
            console.log(" guzik escape!");
            // todo spytac o ten argument
            // removeEventListener("keydown", arguments.callee);
            console.log(" po removeEventListener ");
            var x = document.getElementById("stronaDoUstawianiaGodzin");
            x.remove();
        }
        else if (key == "ArrowUp") {
            console.log(" strzalka w góre");
        }
        else if (key == "ArrowDown") {
            console.log(" strzalka w dol");
        }
        else if (key == "ArrowLeft") {
            console.log(" strzalka w lewo");
        }
        else if (key == "ArrowRight") {
            console.log(" strzalka w prawo");
        }
        else {
            var timeStr = inputCtrl.innerHtml;
            var time = this.timeParser.Parse(timeStr);
            if (time == null) {
            }
        }
    };
    TimeValidator.prototype.setTime = function (time) {
        if (this.timeValidator.IsValid() == false) {
            return false;
        }
        var timeStr = this.timeFormatter.Format(time); //11:22
        this.inputCtrl.innerHtml(timeStr);
    };
    TimeValidator.prototype.getTime = function () {
        var timeStr = inputCtrl.innerHtml;
        var time = this.timeParser.Parse(timeStr);
        return time;
    };
    return TimeValidator;
}());
