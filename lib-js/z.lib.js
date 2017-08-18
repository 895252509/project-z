/**
 *  通用JS库
 * 
 * 
 */

if (typeof z === 'undefined') var zz = {};

zz.lib = (function() {
    /**
     * 判断参数是不是一个对象
     */
    function isObject(value) {
        return (value !== null &&
            (typeof value === 'object' || typeof value === 'function'));
    }
    /**
     * 判断参数是不是一个对象，通过Object包装对象实现
     * @param {*} value 
     */
    function isObjectOfObj(value) {
        return value === Object(value);
    }
    /**
     * 判断参数是否是NaN
     * @param {*} value 
     */
    function isNaN(value) {
        return value !== value;
    }

    /**
     * 判断参数值是否存在
     * @param {*参数对象} value 
     */
    function isExist(value) {
        return typeof value !== 'undefined';
    }


    /**
     * 获取对象的自有属性，以数组返回
     */
    function getOwnPrototypeToArray(obj) {
        var arr = [];
        if (!isObject(obj)) return arr;

        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                arr.push(key);
            };
        }

        return arr;
    }

    /*把这个对象的属性从orig复制到copy*/
    function copyOwnPropertiesFrom(target, source) {
        Object.getOwnPropertyNames(source)
            .forEach(function(propKey) {
                var desc = Object.getOwnPropertyDescriptor(source, propKey);
                Object.defineProperty(target, propKey, desc);
            });
        return target;
    }

    /*复制对象*/
    function copyObject(orig) {
        if (!isObject(orig)) throw new Error('函数的参数必须是一个对象!');
        var copy = Object.create(Object.getPrototypeOf(orig));
        copyOwnPropertiesFrom(copy, orig);
        return copy;
    }

    /*
    列出对象所有属性，包括不可枚举的
    */
    function getAllPrototypeNames(obj) {
        if (!isObject(obj)) throw new Error("函数的参数必须是一个对象!");

        var arr = [];
        while (obj) {
            Array.prototype.push.apply(arr, Object.getOwnPropertyNames(obj));
            obj = Object.getPrototypeOf(obj);
        }

        return arr;
    }

    /**
     * 获取一个从lower到upper的随机整数
     * @param {*最小值} lower 
     * @param {*最大值} upper 
     */
    function getRandomInt(lower, upper) {
        if (arguments.length === 1) {
            upper = lower;
            lower = 0;
        }

        return Math.floor(Math.random() * (upper - lower)) + lower;
    }

    return {
        isExist: isExist,
        isObject: isObject,
        isObjectOfObj: isObjectOfObj,
        isNaN: isNaN,
        copyObject: copyObject,
        getRandomInt: getRandomInt,
        getOwnPrototypeToArray: getOwnPrototypeToArray,
        getAllPrototypeNames: getAllPrototypeNames
    }
})();