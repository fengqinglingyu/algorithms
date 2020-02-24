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
    // 触发一次读取器
    this.value = obj[prop];
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
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return value;
    },
    set(v: any) {
      value = v;
      dep.notify();
    }
  });
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
