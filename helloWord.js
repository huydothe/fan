var Fan = /** @class */ (function () {
    function Fan(speed, on, radius, color) {
        if (speed === void 0) { speed = 1; }
        if (on === void 0) { on = false; }
        if (radius === void 0) { radius = 5; }
        if (color === void 0) { color = 'blue'; }
        var _this = this;
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
        this.slow = 1;
        this.medium = 2;
        this.fast = 3;
        this.getSpeed = function () { return _this.speed; };
        this.getOn = function () { return _this.on; };
        this.getRadius = function () { return _this.radius; };
        this.getColor = function () { return _this.color; };
        this.setSpeed = function (speed) { return _this.speed = speed; };
        this.setOn = function (on) { return _this.on = on; };
        this.setRadius = function (radius) { return _this.radius = radius; };
        this.setColor = function (color) { return _this.color = color; };
        this.toString = function () {
            if (_this.getOn()) {
                return "Fan is off, t\u1ED1c \u0111\u1ED9 qu\u1EA1t l\u00E0 ".concat(_this.setSpeed(0), ", m\u00E0u qu\u1EA1t l\u00E0 ").concat(_this.getRadius(), ", b\u00E1n k\u00EDnh qu\u1EA1t l\u00E0 ").concat(_this.getRadius());
            }
            else {
                return "Fan is on, t\u1ED1c \u0111\u1ED9 qu\u1EA1t l\u00E0 ".concat(_this.getSpeed(), ", m\u00E0u qu\u1EA1t l\u00E0 ").concat(_this.getColor(), ", b\u00E1n k\u00EDnh qu\u1EA1t l\u00E0 ").concat(_this.getRadius());
            }
        };
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
    }
    return Fan;
}());
var fan = new Fan(0, false, 5, 'blue');
console.log(fan.toString());
