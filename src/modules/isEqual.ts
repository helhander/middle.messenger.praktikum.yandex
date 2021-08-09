function countProps(obj:object) {
  let count = 0;
  Object.keys(obj).forEach((prop) => {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(prop)) {
      count += 1;
    }
  });

  return count;
}

export default function isEqual(v1:object, v2:object) {
  if (typeof (v1) !== typeof (v2)) {
    return false;
  }

  if (typeof (v1) === 'function') {
    return v1.toString() === v2.toString();
  }

  if (v1 instanceof Object && v2 instanceof Object) {
    if (countProps(v1) !== countProps(v2)) {
      return false;
    }
    let r = true;
    Object.keys(v1).every((prop) => {
      r = isEqual(v1[prop], v2[prop]);
      if (!r) {
        return false;
      }

      return true;
    });

    return true;
  }
  return v1 === v2;
}
