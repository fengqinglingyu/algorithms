function convert(obj, out = {}, prop = '') {
  Object.entries(obj).forEach(([k, v]) => {
    if (typeof v === 'object') {
      convert(v, out, prop ? `${prop}.${k}` : k);
    } else {
      if (prop) {
        out[`${prop}.${k}`] = v;
      } else {
        out[prop] = v;
      }
    }
  });
  return out;
}

function reConvert(obj) {
  const res = {};
  Object.entries(obj).forEach(([k, v]) => {
    if (k.includes('.')) {
      const tmp = {};
      let point = tmp;
      const props = k.split('.');
      const len = props.length;
      props.forEach((i, idx) => {
        if (idx !== len - 1) {
          point[i] = {};
          point = point[i];
        } else {
          point[i] = v;
        }
      });
      Object.assign(res, tmp);
    } else {
      res[k] = v;
    }
  });
  return res;
}
