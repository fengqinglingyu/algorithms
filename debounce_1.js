/**
 *
 * @param {() => any} fn
 * @param {number} delay
 */
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

/**
 *
 * @param {() => any} fn
 * @param {number} delay
 */
const tholette = (fn, delay) => {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, delay);
    }
  };
};
