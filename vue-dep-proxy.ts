export default {};
class Dep {
  public static target: Watcher | null = null;
  public subs: Set<Watcher>;
  constructor() {
    this.subs = new Set<Watcher>();
  }
  addSub(watcher: Watcher) {
    this.subs.add(watcher);
  }
  notify() {
    this.subs.forEach(i => {
      i && i.update();
    });
  }
}

class Watcher {
  public obj: { [prop: string]: any };
  public prop: string;
  public value: any;
  public callback: Function;
  constructor(obj: { [prop: string]: any }, prop: string, callback: Function) {
    Dep.target = this;
    this.obj = obj;
    this.prop = prop;
    // 这一步主要是为了触发 读取器，然后把依赖添加进去
    this.value = obj[prop];
    // 添加了依赖之后要把目标清空
    Dep.target = null;
    this.callback = callback;
  }
  addDep(dep: Dep) {
    dep.addSub(this);
  }
  update() {
    const value = this.obj[this.prop];
    this.callback(value);
  }
}

function observe(obj: object) {
  Object.entries(obj).forEach(([key, value]) => {
    defineReactive(obj, key, value);
  });
}

function defineReactive(obj: object, key: string, value: any) {
  if (typeof value === 'object') {
    observe(value);
  }
  const dep = new Dep();
  const proxy = new Proxy(obj, {
    get(target, prop, receiver) {
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      dep.notify();
      return Reflect.set(target, prop, value, receiver);
    }
  });
  // Object.defineProperty(obj, key, {
  //   enumerable: true,
  //   configurable: true,
  //   get() {
  //     if (Dep.target) {
  //       dep.addSub(Dep.target);
  //     }
  //     return value;
  //   },
  //   set(v: any) {
  //     if (value !== v) {
  //       value = v;
  //       dep.notify();
  //     }
  //   }
  // });
}

const testObj = { prop: 1, pk: 3 };
observe(testObj);
new Watcher(testObj, 'prop', (e: any) => {
  console.log(e);
});
new Watcher(testObj, 'pk', (e: any) => {
  console.log(`pk changed, is ${e}`);
});
testObj.prop = 3;
testObj.pk = 2;
testObj.prop = 1000;
