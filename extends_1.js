class A {
  constructor(ap) {
    this.ap = ap;
  }
  t = { test: 2 };
  met() {
    console.log('met');
  }
  static b = 1;
}

console.log(new A('test'));

class B extends A {
  constructor(ap, bp) {
    super(ap);
    this.bp = bp;
    this.cp = this.ap;
    this.dp = super.t;
    super.met();
  }

  activeMet() {
    super.met();
    console.log(super.t);
  }

  static test() {
    console.log(super.b);
  }
}

var YY = new B('ap', 'bp');

console.log(YY);

YY.activeMet();

B.test();
