Function.prototype.mybind = function(ctx) {
  if (typeof this !== 'function') {
    throw new TypeError('');
  }
  var _this = this;
  var args = [].slice.call(arguments, 1);
  var Chain = function() {};
  var binder = function() {
    var inArgs = [].slice.call(arguments);
    return _this.apply(
      this instanceof Chain ? this : ctx,
      [].concat(args, inArgs)
    );
  };
  if (_this.prototype) {
    Chain.prototype = _this.prototype;
    binder.prototype = new Chain();
  }
  return binder;
};

Function.prototype.mybind2 = function(ctx) {
  if (typeof this !== 'function') {
    throw new TypeError('');
  }
  var _this = this;
  var args = [].slice.call(arguments, 1);
  var binder = function() {
    var inArgs = [].slice.call(arguments);
    return _this.apply(
      this instanceof _this ? this : ctx,
      [].concat(args, inArgs)
    );
  };
  if (_this.prototype) {
    binder.prototype = Object.create(_this.prototype);
  }
  return binder;
};

// var add = (a, b, c, d, e) => a + b + c + d + e;
// var bindAdd4 = add.mybind(null, 1, 2, 3, 4);
// console.log(bindAdd4(5));
// console.log(bindAdd4(5));

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + ',' + this.y;
};

console.log(new Point(1, 3).toString());
var YAxisPoint = Point.mybind(null, 0 /*x*/);
var YAxis = Point.mybind2(null, 0);
var Y = Point.bind(null, 0);
console.log(new YAxisPoint(5).toString());
console.log(new YAxis(5).toString());
console.log(new Y(5).toString());

function test(x) {
  console.log(x);
}

const test1 = test.mybind2(null, 11);
test1();
