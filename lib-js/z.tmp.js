var a = "";
var b = Number(a);
zz.lib.isNaN(b);

function _createDivInsertBody() {
    var _dom = document.createElement("div");
    var _styleStr = "background-color: #ffddff;width:400px;height:100px;border:1px solid black;border-radius:3px;margin: 10px;";
    _dom.setAttribute("style", _styleStr);
    _dom.setAttribute("id", "zz");
    document.body.insertBefore(_dom, document.body.firstChild);
    return _dom;
}

function getEnvironment(_id) {
    var _result = {
        dom: null,
        window: window,
        document: document
    }

    if (!zz.lib.isExist(_id)) {
        _result.dom = _createDivInsertBody();
    } else {
        if (!zz.lib.isObject(_id)) throw zz.error.ParameterTypeError();

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
    if (!_dom instanceof HTMLElement) throw zz.error.ParameterTypeError();

    zz.lib.getAllPrototypeNames(_dom).forEach(function(element) {
        if (element.substring(0, 2) === "on")
            _dom[element] = adapterEvent;
    }, this);

}

function adapterEvent(e) {
    debugger;
    var _type = e.type;

    console.log(_type);
}


window.onload = function() {
    debugger;
    var ev = getEnvironment();
    getDOMEvent(ev.dom);
}