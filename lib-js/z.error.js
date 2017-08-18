if (!zz.lib.isObject(zz)) var zz = {};

zz.error = (function() {
    /**
     * 参数类型错误
     */
    function ParameterTypeError() {
        return new Error("函数参数类型不正确");
    }

    return {
        ParameterTypeError: ParameterTypeError
    }

})();