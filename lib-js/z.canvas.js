if (typeof zzz === 'undefined') var zzz = {};

zzz.canvas = (function(obj) {
    /**
     * 公有变量
     */
    this.iCanvas = null;
    this.iCanvasCtx = null;

    this.fontStyle = function(obj) {
        if (typeof obj === "undefined") obj = {};
        this.font_size = obj.size || 12;
        this.font_color = obj.color || "black";
    }

    if (!obj instanceof HTMLCanvasElement)
        throw zzz.error.ParameterTypeError();
    this.iCanvas = obj;
    this.iCanvasCtx = obj.getContext('2d');

});

zzz.canvas.prototype.strokeRect = function(rect) {
    if (!rect instanceof zzz.shape.rect)
        throw zzz.error.ParameterTypeError();
    iCanvasCtx.strokeRect(
        rect.x + 0.5,
        rect.y + 0.5,
        rect.w - 1,
        rect.h - 1
    )
}

/**
 * 在此canvas输出文本，以右上角为基点
 * 
 * @param {*输出的文本} _text 
 * @param {*位置 是一个zzz.shape.point 类型} _pos 
 * @param {*文本样式} _style 
 */
zzz.canvas.prototype.strokeRect = function(_text, _pos, _style) {
    var style = _style || new this.fontStyle();
    var pos = _pos || new zzz.shape.point();
    if (typeof _text !== "string" || !pos instanceof zzz.shape.point || !style instanceof fontStyle)
        throw zzz.eror.ParameterTypeError();
    iCanvasCtx.save();
    iCanvasCtx.textBaseline = "hanging";
    var reg = / ?[0-9]{0,2}px /;
    iCanvasCtx.font = iCanvasCtx.font.replace(reg, " " + style.font_size.toString() + "px ");
    iCanvasCtx.fillStyle = style.font_color;
    iCanvasCtx.fillText(_text, pos.x, pos.y + 1);

    iCanvasCtx.stroke();
}