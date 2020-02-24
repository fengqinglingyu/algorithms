class A {
  constructor(txt) {
    this.txt = txt
  }
  print() {
    console.log(this.txt)
  }
}

class B extends A {
  constructor(bbmp, ini) {
    const a = super(bbmp)
    a.print()
    this.ini = a.txt
    // this.ini = ini
  }
  printIni() {
    console.log(this.ini)
  }
}


const b = new B('this is txt', 'I am ini')


b.printIni()
// b.print()
new A('this').print()