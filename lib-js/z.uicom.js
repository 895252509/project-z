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

    function menu(_obj) {

    }
    menu.prototype = new area();


    return {
        area: area,
        button: button,
        menu: menu
    }
})();