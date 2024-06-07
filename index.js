// asynchronus code sequence  (means asynchronus line by line chalny wala code h)
// console.log("hello")
// let j=0;
// for(let i = 0; i<10; i++){
//     j= j+i;
// }
// console.log("i am here")
// console.log("i am a student")
//settimeout function
// console.log("I")
// setTimeout(()=>{
//          console.log("eat")
//          setTimeout(()=>{
//             console.log("ice cream")//callback hell
//             setTimeout(()=>{
//                 console.log("thank you")//ca;ll back hell
//             },1000)
//          },2000)
//     },3000) // 1 sec = 1000milisecond
//callbacks  (callback hell)
// function orderPizza(preparecb ){
//     console.log("placing order....")
//     setTimeout(()=>{
//         console.log("order pizza")
//         preparecb();
//     },3000)
//     console.log("ending order pizza....")
// }
// function preparePizza(){
//     console.log("preparing pizza")
//     setTimeout(()=>{
//         console.log(" pizza is being prepared")
//     },3000)
// }
// orderPizza(preparePizza)
// //some example with delivery callback
// function orderPizza(preparecb ,delieveryCb ){
//     console.log("placing order....")
//     setTimeout(()=>{
//         console.log("order pizza")
//         preparecb();
//     }
//     ,3000)}
// function preparePizza (delieveryCb){
//     console.log("Preparing pizza...")
//     setTimeout(()=>{
//         console.log("your pizza is being prepared!")
//         delieveryCb()
//     },1000)
// }
// function delievery (){
//     setTimeout(()=>{
//         console.log("lou khao...")
//     },5000)
// }
// orderPizza(preparePizza,delievery)          //function inside function
// //promises
// function orderPizzaPromise(){
//     return new Promise((resolve,reject)=>{
//         console.log("hello")
//         resolve("")
//     })
// }
// orderPizzaPromise()
// .then(()=>{
//     console.log("promise complete")
//     return new Promise((resolve,reject)=>{
//         console.log("hello")
//         reject("")
//     })
// })
// .then(()=>{
//     console.log("promise dosri bar complete hua")
// })
// .catch(()=>{
//     console.log("promise is not complete")
// })
function orderPizzaPromise() {
    console.log("placing order...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order Placed");
            resolve("");
        }, 3000);
    });
}
function preparePizza() {
    return new Promise((resolve, reject) => {
        console.log("Preparing Pizza....");
        setTimeout(() => {
            console.log("Pizza is being prepared");
            reject("");
        }, 3000);
    });
}
function delivery() {
    setTimeout(() => {
        console.log("lou khao...");
    }, 5000);
}
//await //asynchronus
async function pizza() {
    try {
        await orderPizzaPromise();
        await preparePizza();
        await delivery();
    }
    catch (error) {
        console.log("pizza nhi bana");
    }
}
pizza();
console.log("hello");
export {};
// orderPizzaPromise()
// .then(preparePizza)
// .then(delivery)
// .catch((error)=>{
//     console.log(error)
//     console.log("pizza nhi mila")
// })
