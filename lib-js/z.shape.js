if (typeof zzz !== 'object') var zzz = {};

zzz.shape = (function() {
    //点
    function point() {
        this.x = 0;
        this.y = 0;
    }
    point.prototype.equals = function(_p) {
        return this.x === _p.x && this.y === _p.y;
    }

    function rect() {
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
    }

    function circle() {
        this.central = new point();
        this.radius = 0;
    }

    return {
        point: point,
        rect: rect,
        circle: circle
    }
})();