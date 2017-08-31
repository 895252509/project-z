if (typeof zzz !== 'object') var zzz = {};


zzz.test = (function(a) {
    this.value1 = a;

    function A() {
        this.A = 0;
    }


});


zzz.test.prototype.init = function() {
    this.value1 = 121212;
    var a = this.A();
}