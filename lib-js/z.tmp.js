var a = "";
var b = Number(a);
zzz.lib.isNaN(b);

function _createDivInsertBody() {
    var _dom = document.createElement("canvas");
    var _styleStr = "background-color: #ffddff;border:1px solid black;border-radius:3px;margin: 10px;";
    _dom.setAttribute("style", _styleStr);
    _dom.width = 600;
    _dom.height = 480;
    _dom.setAttribute("id", "iCanvas");
    document.body.insertBefore(_dom, document.body.firstChild);
    return _dom;
}

function getEnvironment(_id) {
    var _result = {
        dom: null,
        window: window,
        document: document
    }

    if (!zzz.lib.isExist(_id)) {
        _result.dom = _createDivInsertBody();
    } else {
        if (!zzz.lib.isObject(_id)) throw zzz.error.ParameterTypeError();

        if (typeof _id === 'string') {
            var _dom = document.getElementById(_id);
            if (_dom === null)
                _dom = _createDivInsertBody();
            _result.dom = _dom;
        } else if (_id instanceof HTMLElement) {
            _result.dom = _id;
        }
    }
    return _result;
}

/**
 * 接管DOM事件
 */
function getDOMEvent(_dom) {
    if (!_dom instanceof HTMLElement) throw zzz.error.ParameterTypeError();

    zzz.lib.getAllPrototypeNames(_dom).forEach(function(element) {
        if (element.substring(0, 2) === "on")
            _dom[element] = adapterEvent;
    }, this);

}

function adapterEvent(e) {

    var _type = e.type;

    //console.log(_type);
}


window.onload = function() {

    zzz.comm.DEBUGGER = false;
    zzz.comm.debug();

    var ev = getEnvironment();
    zzz.canvas.init(ev.dom);
    getDOMEvent(ev.dom);

    var btn = new zzz.uicom.button();

    zzz.canvas.strokeRect(new zzz.shape.rect({
        left: 20,
        top: 20,
        right: 100,
        bottom: 60
    }));

    zzz.canvas.getContext().font = "26px ";
    zzz.canvas.getContext().fillText("Hello world", 50, 50);

}