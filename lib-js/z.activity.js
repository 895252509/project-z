if (typeof zzz === 'undefined') var zzz = {};


/**
 *     一个activity对应一个CanvasDom 接收所有Dom事件
 * 管理注册在其中的自定义组件。
 */

zzz.activity = (function() {

    function activity_base() {
        //公有属性
        this.dom = null;
        this.ctx = null;
        this.canvas = null;
        this.width = 0;
        this.height = 0;

        this.coms = [];
    }

    activity_base.prototype.init = function(_o) {
        var theCanvas = new zzz.canvas.init(_o);

    }




    return {




    }


})();