// sum of the all price items 
const products = [
    {name:'shampoo', price: 200 , quantity:3},
    {name:'shart', price : 500, quantity:2},
    {name : 'panjabi', price : 600, quantity:1},
    {name: 'pant', price: 750, quantity:2},
]
function shoppingCard(products){
    let total = 0;
       for(const product of products){
        totalPrice = product.price  * product.quantity;
              total = total + totalPrice;
       }
       return total;
}
const shop = shoppingCard(products);
console.log("my total shpping cost :",shop);
