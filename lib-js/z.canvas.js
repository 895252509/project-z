if (typeof zzz === 'undefined') var zzz = {};

zzz.canvas = (function() {
    var iCanvas = null;
    var iCanvasCtx = null;

    function fontStyle(obj) {
        if (typeof obj === "undefined") obj = {};
        this.font_size = obj.size || 12;
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

    function showText(_text, _pos, _style) {
        var style = _style || new fontStyle();
        var pos = _pos || new zzz.shape.point();
        if (typeof _text !== "string" || !pos instanceof zzz.shape.point || !style instanceof fontStyle)
            throw zzz.eror.ParameterTypeError();
        iCanvasCtx.save();
        iCanvasCtx.textBaseline = "alphabetic";
        var reg = / ?[0-9]{0,2}px /;
        iCanvasCtx.font = iCanvasCtx.font.replace(reg, " " + style.font_size.toString() + "px ");
        iCanvasCtx.fillStyle = style.font_color;
        iCanvasCtx.fillText(_text, pos.x, pos.y);

        iCanvasCtx.stroke();
    }
    /**
     * 私有函数
     */
    function getFontSizeFromfont() {

    }
    return {
        getCanvas: getCanvas,
        getContext: getContext,
        init: init,
        strokeRect: strokeRect,
        fontStyle: fontStyle,
        showText: showText
    }

})();