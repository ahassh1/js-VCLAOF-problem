function getMax (num1, num2){
   if(num1>num2){
    return num1;
   }
   else{
    return num2;
   }
}
const max = getMax(34,54);
console.log(max)

//.............................................
const polash =89;
const habib =86;
const ahasan =92;
    if(polash>habib && polash>ahasan){
        console.log("palash is the ultimate boss");
    }
    else if(habib>polash && ahasan < habib){
        console.log('habib is the ultimate big');
    }
    else{
        console.log('ahasan is the big fish')
    }





//.................................
function bigNumber(polash, habib, ahasan) {
    if (polash > habib && polash > ahasan) {
        console.log("Palash is the ultimate boss");
    }
    else if (habib > polash && habib > ahasan) {
        console.log("Habib is the ultimate big");
    }
    else {
        console.log("Ahasan is the big fish");
    }
}
bigNumber(89, 56, 78);

//..................................
const maxNumberIs =Math.max(12,32445,634,234423,435,4,785,5);
console.log("the biggest number is :", maxNumberIs)