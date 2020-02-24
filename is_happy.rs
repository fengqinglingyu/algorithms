impl Solution {
  pub fn is_happy(n: i32) -> bool {
    let mut curr = n;
    let mut sum = 0;
    let mut res = false;
    let mut arr: Vec<i32> = Vec::new();
    'outer: while true {
      'inter: while curr > 0 {
        sum += (curr % 10) * (curr % 10);
        curr = curr / 10
      }
      if sum == 1 {
        res = true;
        break 'outer;
      }
      if arr.contains(&sum) {
        res = false;
        break 'outer;
      }
      arr.push(sum);
      curr = sum;
      sum = 0;
    }
    res
  }
}