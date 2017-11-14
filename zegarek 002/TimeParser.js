var TimeParser = (function () {
    function TimeParser() {
    }
    // METODY
    TimeParser.prototype.Parse = function (string) {
        if (string === void 0) { string = timeStr; }
        return { h: 12, m: 22 };
    };
    return TimeParser;
}());
