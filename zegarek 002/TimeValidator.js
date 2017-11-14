var TimeValidator = (function () {
    function TimeValidator() {
    }
    // METODY
    TimeValidator.prototype.IsValid = function (any) {
        if (any === void 0) { any = time; }
        return true;
    };
    return TimeValidator;
}());
