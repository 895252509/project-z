if (typeof zzz !== 'object') var zzz = {};

zzz.uicom = (function() {

    function area(_obj) {
        this.parent = null;
        this.children = [];
        this.rect = new zzz.shape.rect(_obj);
    }

    function button(_obj) {
        area.apply(this, arguments);
    }
    button.prototype = new area();
    button.prototype.constructor = button;

    /**
     * 菜单对象
     * @param {*位置 继承自 zzz.shape.rect} _obj 
     */
    function menu(_obj) {
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

    menu.prototype.addCom = function(_com) {

        }
        /**
         * 添加菜单项
         */
    menu.prototype.addItem = function(_com) {

        }
        /**
         * 清除所有菜单项
         */
    menu.prototype.clearCom = function() {

        }
        /**
         * 移除菜单项
         */
    menu.prototype.removeCom = function(_com) {

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