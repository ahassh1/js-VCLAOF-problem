const mobiles = [
    {name:'xhomy', price:22000, camera:'12mp', color:'black'},
    {name:'oppo', price:120000, camera:'12mp', color:'black'},
    {name:'samsumg', price:30000, camera:'12mp', color:'black'},
    {name:'Iphone', price:19000, camera:'12mp', color:'black'},
    {name:'walton', price:21000, camera:'12mp', color:'black'},
];
function phone(mobiles){
    let min = mobiles[0];
  for(const mobile of mobiles){
    if(mobile.price<min.price){
        min=mobile;
    }
  }
  return min;
}
const mobilePrice = phone(mobiles);
console.log(mobilePrice);