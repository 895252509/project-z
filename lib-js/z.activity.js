if (typeof zzz === 'undefined') var zzz = {};


/**
 *     一个activity对应一个CanvasDom 接收所有Dom事件
 * 管理注册在其中的自定义组件。
 */

zzz.activity = (function() {

    function adapterEvent(e) {
        switch (e.type) {
            case "mousemove":

                break;

            default:
                if (typeof this.activity["on" + e.type] !== "undefined" && this.activity["on" + e.type] != null)
                    this.activity["on" + e.type]();
                break;
        }
    }

    function activity_base(_o) {
        //公有属性
        this.dom = null;
        this.ctx = null;
        this.canvas = null;
        this.width = 0;
        this.height = 0;

        this.coms = [];

        var theCanvas = new zzz.canvas(_o);
        if (!theCanvas instanceof zzz.canvas) return null;
        this.dom = _o;
        this.dom.activity = this;
        this.ctx = theCanvas.iCanvasCtx;
        this.canvas = theCanvas;
        this.width = this.dom.clientWidth;
        this.height = this.dom.clientHeight;
    }

    activity_base.prototype.init = function() {
        var allProp = zzz.lib.getAllPrototypeNames(this.dom);
        for (var i = 0; i < allProp.length; i++) {
            if (allProp[i].substring(0, 2) === "on") {
                this.dom[allProp[i]] = adapterEvent;
                this.dom.activity[allProp[i]] = null;
            }

        }

    }




    return {

        activity_base: activity_base


    }


})();