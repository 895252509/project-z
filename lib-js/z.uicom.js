if (typeof zzz !== 'object') var zzz = {};

zzz.uicom = (function() {
    /**
     * 面积对象
     * @param {*Ctx canvas 绘图上下文}
     * @param {*位置 继承自 zzz.shape.rect} _obj 
     */
    function area(_ctx, _obj) {
        this.parent = null;
        this.children = [];
        if (!_ctx instanceof CanvasRenderingContext2D) throw zzz.error.ParameterTypeError();
        else this.ctx = _ctx;
        this.rect = new zzz.shape.rect(_obj);

        this.border = "";
    }
    area.prototype.draw = function() {
        var ctx = this.ctx;
        var rect = this.rect;
        if (!ctx instanceof CanvasRenderingContext2D) throw zzz.error.NullPointOrTypeError();
        else ctx.save();
        ctx.fillRect(
            rect.x,
            rect.y,
            rect.w,
            rect.h);
        ctx.restore();
    }

    /**
     * 按钮对象
     * @param {*Ctx canvas 绘图上下文}
     * @param {*位置 继承自 zzz.shape.rect} _obj 
     */
    function button(_ctx, _obj) {
        area.apply(this, arguments);
    }
    button.prototype = new area();
    button.prototype.constructor = button;
    button.prototype.draw = function() {
        Object.getPrototypeOf(Object.getPrototypeOf(this)).draw.call(this);
    }

    /**
     * 菜单对象
     * @param {*Ctx canvas 绘图上下文}
     * @param {*位置 继承自 zzz.shape.rect} _obj 
     */
    function menu(_ctx, _obj) {
        this.DIRECTION_VERTICAL = "vertical";
        this.DIRECTION_HORIZONTAL = "horizontal";
        area.apply(this, arguments);
        /**
         * 菜单的方向
         * 1. 可以是横向的类似菜单栏
         * 2. 可以是纵向，用于右键菜单或者菜单栏弹出菜单
         */
        this.direcition = this.DIRECTION_VERTICAL;

    }
    menu.prototype = new area();
    menu.prototype.constructor = menu;
    menu.prototype.draw = function() {
        var ctx = this.ctx;
        var rect = this.rect;
        var coms = this.children;
        ctx.save();
        ctx.translate(rect.x, rect.y);
        for (var i = 0; i < coms.length; i++) {
            var ele = coms[i];
            ele.draw();
            ctx.save();
            ctx.translate(0, ele.rect.h);
            //ctx.restore();
        }
        for (var index = 0; index < coms.length; index++) {
            ctx.restore();
        }
        ctx.restore();
    }
    menu.prototype.addCom = function(_com) {
        if (!_com instanceof area) throw zzz.error.ParameterTypeError();
        this.children.push(_com);
    }

    /**
     * 添加菜单项
     */
    menu.prototype.addItem = function(_com) {
        this.addCom(_com);
    }

    /**
     * 清除所有菜单项
     */
    menu.prototype.clearCom = function() {
        this.children.length = 0;
        this.children = [];
    }

    /**
     * 返回_com的索引
     */
    menu.prototype.indexOfCom = function(_com) {
        if (!_com instanceof area) throw zzz.error.ParameterTypeError();
        for (var index = 0; index < this.children.length; index++) {
            var element = array[index];
            if (element === _com) return index;
        }
        return -1;
    }

    /**
     * 移除菜单项
     */
    menu.prototype.removeCom = function(_com) {
        if (!_com instanceof area) throw zzz.error.ParameterTypeError();
        this.children.splice(this.indexOfCom(_com), 1);
    }

    /**
     * 设置菜单位置
     */
    menu.prototype.setPosition = function(_rect) {
        if (!_rect instanceof zzz.shape.rect) throw zzz.error.ParameterTypeError();
        this.rect = _rect;
    }

    return {
        area: area,
        button: button,
        menu: menu
    }
})();