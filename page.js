function Page() {}

Page.prototype = {
  constructor: Page,

  postA: function(a) {
    console.log('a:' + a);
  },
  postB: function(b) {
    console.log('b:' + b);
  },
  postC: function(c) {
    console.log('c:' + c);
  },
  check: function() {
    return Math.random() > 0.5;
  }
};

function checkfy(obj) {
  for (let key in obj) {
    if (key.indexOf('post') === 0 && typeof obj[key] === 'function') {
      // (function(key) {
      const fn = obj[key];
      obj[key] = function() {
        if (obj.check()) {
          fn.apply(obj, arguments);
        }
      };
      //   };
      // })(key);
    }
  }
} // end checkfy()

checkfy(Page.prototype);

var obj = new Page();

obj.postA('checkfy');
obj.postB('checkfy');
obj.postC('checkfy');
