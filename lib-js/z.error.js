if (!zzz.lib.isObject(zzz)) var zzz = {};

zzz.error = (function() {
    /**
     * 参数类型错误
     */
    function ParameterTypeError() {
        return new Error("函数参数类型不正确");
    }

    /**
     * 空指针或者类型不正确
     */
    function NullPointOrTypeError() {
        return new Error("空指针或者类型不正确");
    }

    return {
        ParameterTypeError: ParameterTypeError,
        NullPointOrTypeError: NullPointOrTypeError
    }

})();