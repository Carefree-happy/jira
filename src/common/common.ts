import { useEffect, useState } from "react";

const useArray = <T>(persons: T[]) => {
  const [value, setValue] = useState(persons);

  const clear = () => setValue([]);

  const removeIndex = (index: number) => {
    const copy = [...value];
    copy.splice(index, 1);
    setValue(copy);
  };

  const add = (item: T) => setValue([item, ...value]);

  return {
    value,
    clear,
    removeIndex,
    add,
  };
};

const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(function() {
//       func(...param);
//     }, delay);
//   }
// }
// const log = debounce(() => console.log('call'), 5000)
// log()
// log()
// log()
//   ...5s
// 执行！

// debounce 原理讲解：
// 0s ---------> 1s ---------> 2s --------> ...
//     一定要理解：这三个函数都是同步操作，所以它们都是在 0~1s 这个时间段内瞬间完成的；
//     log()#1 // timeout#1
//     log()#2 // 发现 timeout#1！取消之，然后设置timeout#2
//     log()#3 // 发现 timeout#2! 取消之，然后设置timeout#3
//             // 所以，log()#3 结束后，就只剩timeout#3在独自等待了

const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

//函数拷贝
// const copyObj = (obj = {}) => {
//   //变量先置空
//   let newobj = null;

//   //判断是否需要继续进行递归
//   if (typeof obj == "object" && obj !== null) {
//     newobj = obj instanceof Array ? [] : {};
//     //进行下一层递归克隆
//     for (var i in obj) {
//       newobj[i] = copyObj(obj[i]);
//     }
//     //如果不是对象直接赋值
//   } else newobj = obj;

//   return newobj;
// };

const isFalsy = (value: unknown) => (value === 0 ? false : !value);

// 在一个函数里，改变传入的对象本身是不好的
const cleanObject = (object: object) => {
  // Object.assign({}, object)
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // 0
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export { isFalsy, cleanObject, useDebounce, useMount, useArray };
