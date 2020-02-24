// promise 三种状态
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

/**
 * 模拟Promise
 * @param {Function} fn Promise 接受的函数
 */
class MyPromise {
  constructor(fn) {
    const _this = this;
    _this.currentState = PENDING;
    _this.value = undefined;
    // 用于保存 then 中的回调
    _this.resolvedCallbacks = [];
    _this.rejectedCallbacks = [];
    // resolve 部分处理
    _this.resolve = function(value) {
      if (value instanceof MyPromise) {
        return value.then(_this.resolve, _this.reject);
      }
      setTimeout(() => {
        if (_this.currentState === PENDING) {
          _this.currentState = RESOLVED;
          _this.value = value;
          _this.resolvedCallbacks.forEach(cb => cb());
        }
      });
    };
    _this.reject = function(value) {
      setTimeout(() => {
        if (_this.currentState === PENDING) {
          _this.currentState = RESOLVED;
          _this.value = value;
          _this.rejectedCallbacks.forEach(cb => cb());
        }
      });
    };
    // new Promise(() => throw Error('error)) 情况处理
    try {
      fn(_this.resolve, _this.reject);
    } catch (e) {
      _this.reject(e);
    }
  }
  /**
   *
   * @param {Function|undefined} onResolved resolved的时候处理的函数
   * @param {Function|undefined} onRejected rejected的时候处理的函数
   */
  then(onResolved, onRejected) {
    const _this = this;
    // 规范 2.2.7，then 必须返回一个新的 promise
    let promise2 = null;
    // 规范 2.2.onResolved 和 onRejected 都为可选参数
    // 如果类型不是函数需要忽略，同时也实现了透传
    // Promise.resolve(4).then().then((value) => console.log(value))
    onResolved = typeof onResolved === 'function' ? onResolved : v => v;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : v => {
            throw v;
          };
    if (_this.currentState === RESOLVED) {
      promise2 = new MyPromise((resolve, reject) => {
        // 规范 2.2.4，保证 onFulfilled，onRjected 异步执行
        // 所以用了 setTimeout 包裹下
        setTimeout(() => {
          try {
            const x = onResolved(_this.value);
            resolutionProcedure(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });
      return promise2;
    }
    if (_this.currentState === REJECTED) {
      promise2 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            const x = onRejected(_this.value);
            resolutionProcedure(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });
      return promise2;
    }
    if (_this.currentState === PENDING) {
      promise2 = new MyPromise((resolve, reject) => {
        _this.resolvedCallbacks.push(() => {
          try {
            const x = onResolved(_this.value);
            resolutionProcedure(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
        _this.rejectedCallbacks.push(() => {
          try {
            const x = onRejected(_this.value);
            resolutionProcedure(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });
      return promise2;
    }
  }
}

/**
 *
 * @param {Promise} promise2
 * @param {Promise} x
 * @param {Function} resolve
 * @param {Function} reject
 */
function resolutionProcedure(promise2, x, resolve, reject) {
  // 规范 2.3.1，x 不能和 promise2 相同，避免循环引用
  if (promise2 === x) {
    return reject(new TypeError('Error'));
  }

  // 规范 2.3.2
  // 如果 x 为 Promise，状态为 pending 需要继续等待否则执行
  if (x instanceof MyPromise) {
    if (x.currentState === PENDING) {
      x.then(value => {
        resolutionProcedure(promise2, value, resolve, reject);
      }, reject);
    } else {
      x.then(resolve, reject);
    }
    return;
  }

  let called = false;
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(
          x,
          y => {
            if (called) return;
            called = true;
            resolutionProcedure(promise2, y, resolve, reject);
          },
          r => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}
