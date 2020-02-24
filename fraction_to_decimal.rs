impl Solution {
  pub fn fraction_to_decimal(numerator: i32, denominator: i32) -> String {
    if numerator % denominator == 0 {
      (numerator / denominator).to_string()
    }
    let mut res = String::new();
    let mut div = numerator;
    let integer = div / denominator;
    let mut remainder = div % denominator;
    let mut arr: Vec<i32> = Vec::new();
    let mut loop_index = -1;
    while remainder > 0 {
      remainder = remainder * 10;
      let currDiv = remainder / denominator;
      
      arr.push(remainder / denominator);
    }
  }
}