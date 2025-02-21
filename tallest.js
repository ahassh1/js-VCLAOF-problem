const heights = [23, 34, 56, 67, 45,34, 35,67];
function allHeights(numbers){
 let max = numbers[0];
  for(const num of numbers){
    if(num>max){
        max=num;
    }

  }
  return max;
}
const max =allHeights(heights);
console.log(max);