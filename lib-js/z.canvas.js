if (typeof zzz === 'undefined') var zzz = {};

zzz.canvas = (function() {
    var iCanvas = null;
    var iCanvasCtx = null;

    function fontStyle(obj) {
        this.font_size = obj.size || 12;
        this.font_posX = obj.posX || 0;
        this.font_posY = obj.posY || 0;
        this.font_color = obj.color || "black";
    }

    function getCanvas() {
        return iCanvas == null ? null : iCanvas;
    }

    function getContext() {
        return iCanvasCtx == null ? null : iCanvasCtx;
    }

    function init(obj) {
        if (!obj instanceof HTMLCanvasElement)
            throw zzz.error.ParameterTypeError();
        iCanvas = obj;
        iCanvasCtx = obj.getContext('2d');
        //iCanvasCtx.translate(0.5, 0.5);
    }

    function strokeRect(rect) {
        if (!rect instanceof zzz.shape.rect)
            throw zzz.error.ParameterTypeError();
        iCanvasCtx.strokeRect(
            rect.x + 0.5,
            rect.y + 0.5,
            rect.w - 1,
            rect.h - 1
        )
    }

    function showText(_text, _style) {
        if (typeof _text !== "string" || !_style instanceof fontStyle)
            throw zzz.eror.ParameterTypeError();

    }

    return {
        getCanvas: getCanvas,
        getContext: getContext,
        init: init,
        strokeRect: strokeRect,
        fontStyle: fontStyle
    }

})();