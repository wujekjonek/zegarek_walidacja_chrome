var TimeFormatter = (function () {
    function TimeFormatter() {
    }
    // METODY
    TimeFormatter.prototype.Format = function (any) {
        if (any === void 0) { any = time; }
        return time.h + ':' + time.m;
    };
    return TimeFormatter;
}());
