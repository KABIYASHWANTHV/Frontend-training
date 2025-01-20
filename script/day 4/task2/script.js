function OddEven(nums) {
    return nums.reduce((result, num) => {
      if (num % 2 === 0) {
        result.even.push(num);
      } else {
        result.odd.push(num); 
      }
      return result;
    } , { odd: [], even: [] });
  }
  
  const nums = [1, 2, 3, 4, 5, 6];
  console.log(OddEven(nums));