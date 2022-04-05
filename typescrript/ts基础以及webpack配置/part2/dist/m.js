System.register([], function (exports_1, context_1) {
    "use strict";
    var h1, b, c, box1;
    var __moduleName = context_1 && context_1.id;
    function fn(a, b) {
        return a + b;
    }
    function fn2() {
        alert(this);
    }
    return {
        setters: [],
        execute: function () {
            exports_1("h1", h1 = '你好');
            b = 20;
            c = 'hello';
            console.log(b, c);
            box1 = document.getElementById('box1');
            box1 === null || box1 === void 0 ? void 0 : box1.addEventListener('click', function () {
                alert('hello');
            });
        }
    };
});
