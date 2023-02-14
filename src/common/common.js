//函数拷贝
const copyObj = (obj = {}) => {
  //变量先置空
  let newobj = null;

  //判断是否需要继续进行递归
  if (typeof obj == "object" && obj !== null) {
    newobj = obj instanceof Array ? [] : {};
    //进行下一层递归克隆
    for (var i in obj) {
      newobj[i] = copyObj(obj[i]);
    }
    //如果不是对象直接赋值
  } else newobj = obj;

  return newobj;
};

const isFalsy = (value) => (value === 0 ? false : !value);

// 在一个函数里，改变传入的对象本身是不好的
const cleanObject = (object) => {
  // Object.assign({}, object)
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // 0
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export { copyObj, isFalsy, cleanObject };
