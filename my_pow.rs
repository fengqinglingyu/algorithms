impl Solution {
  pub fn my_pow(x: f64, n: i32) -> f64 {
    if n == 0 {
      return 1.0;
    }
    let flag = n < 0;
    let mut x: f64 = x;
    let mut n: i32 = n;
    let mut res: f64 = 1.0;
    while(n != 0) {
      if n % 2 == 1 {
        res = res * x;
      }
      x = x * x;
      n = n / 2;
    }
    if flag {
      return 1.0 / res;
    }
    res
  }
}