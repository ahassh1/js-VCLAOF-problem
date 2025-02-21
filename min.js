const value =[23,34,35.56,7676,78666,55655,4545];
function getMin(numbers){
    let min= numbers[0];
    for(const num of numbers){
      if(num < min){
        num=min;
      }
   }
   return min;
}

const minNumber = getMin(value);
console.log(minNumber)