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

    function rect(obj) {
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;

        if (typeof obj === 'undefined') obj = {};

        //继承自四元数
        if (typeof obj !== 'object') {
            throw new Error('Rect:目前参数必须为对象.');
        }
        /*
        参数的赋值： 接受的参数包括：x,y,width,height,left,right,top,bottom
        
        */

        this.left = obj.x || obj.left || 0;
        this.top = obj.y || obj.top || 0;

        this.right = obj.right || obj.width + this.left || obj.w + this.left || 0;
        this.bottom = obj.bottom || obj.height + this.top || obj.h + this.top || 0;

        /*
        如果初始化的值，left比right大，那么做交换。
        */
        var tmp = this.left;
        this.left = this.left <= this.right ? this.left : this.right;
        this.right = tmp === this.left ? this.right : tmp;
        tmp = this.top;
        this.top = this.top <= this.bottom ? this.top : this.bottom;
        this.bottom = tmp === this.top ? this.bottom : tmp;

        /*
        转换成x,y,w,h 形式
        */
        this.x = this.left;
        this.y = this.top;
        this.w = this.right - this.left;
        this.h = this.bottom - this.top;
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