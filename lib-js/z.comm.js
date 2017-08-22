if (typeof zzz === 'undefined') var zzz = {};

zzz.comm = (function() {
    function debug() {
        if (!zzz.lib.isExist(this.DEBUGGER));
        else if (this.DEBUGGER)
            debugger;
    }

    return {
        debug: debug,
        DEBUGGER: false
    }

})();