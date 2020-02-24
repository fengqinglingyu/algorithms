var Dep = /** @class */ (function () {
    function Dep() {
        this.subs = new Set();
    }
    Dep.prototype.addSub = function (watcher) {
        this.subs.add(watcher);
    };
    Dep.prototype.notify = function () {
        this.subs.forEach(function (i) {
            i && i.update();
        });
    };
    Dep.target = null;
    return Dep;
}());
var Watcher = /** @class */ (function () {
    function Watcher(obj, prop, callback) {
        Dep.target = this;
        this.obj = obj;
        this.prop = prop;
        this.value = obj[prop];
        Dep.target = null;
        this.callback = callback;
    }
    Watcher.prototype.addDep = function (dep) {
        dep.addSub(this);
    };
    Watcher.prototype.update = function () {
        var value = this.obj[this.prop];
        this.callback(value);
    };
    return Watcher;
}());
function observe(obj) {
    Object.entries(obj).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        defineReactive(obj, key, value);
    });
}
function defineReactive(obj, key, value) {
    if (typeof value === 'object') {
        observe(value);
    }
    var dep = new Dep();
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            if (Dep.target) {
                dep.addSub(Dep.target);
            }
            return value;
        },
        set: function (v) {
            value = v;
            dep.notify();
        }
    });
}
var testObj = { prop: 1, pk: 2 };
observe(testObj);
new Watcher(testObj, 'prop', function (e) {
    console.log(e);
});
testObj.prop = 3;
testObj.pk = 2;
testObj.prop = 1000;
