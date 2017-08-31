if (typeof zzz !== 'object') var zzz = {};

zzz.uicom = (function() {

    function area() {
        this.parent = null;
        this.children = [];
        this.rect = new zzz.shape.rect();
    }

    function button() {

    }
    button.prototype = new area();


    return {
        area: area,
        button: button

    }
})();