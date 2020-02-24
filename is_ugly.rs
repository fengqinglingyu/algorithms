impl Solution {
  pub fn is_ugly(num: i32) -> bool {
    if num < 1 {
      return false;
    }
    let mut num = num;
    while num % 5 == 0 {
      num = num / 5;
    }
    while num % 3 == 0 {
      num = num / 3;
    }
    while num % 2 == 0 {
      num = num >> 1;
    }
    num == 1
  }
}