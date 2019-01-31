// let isAlessandroDummy = false;

// let promise = new Promise(function(resolve, reject) {
//   if (isAlessandroDummy) {
//     let text = "certo che si!";
//     resolve(text);
//   } else {
//     let text2 = new Error("non mentire lo è");
//     reject(text2);
//   }
// });

// let askAlessandro = function() {
//   promise
//     .then(function(fulfilled) {
//       console.log(fulfilled);
//     })
//     .catch(function(error) {
//       console.log("no");
//       console.log(error.message);
//     });
// };
// console.log("Alessandro è stupido?");
// askAlessandro();

// // PROMISE CHAINING

// let promise1 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 1000, "first");
// });

// promise1
//   .then(x => {
//     console.log(x);
//     return promise2;
//   })
//   .then(x => {
//     console.log(x);
//     return promise3;
//   })
//   .then(x => {
//     console.log(x);
//   });

// let promise2 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 2000, "second");
// })
//   .then(x => {
//     console.log(x);
//     return x;
//   })
//   .then(x => {
//     console.log(x);
//     return 10;
//   });

// let promise3 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 3000, "third");
// });

//PROMISE RANDOM NUMBER
// const printNumber = function(i, time) {
//   return new Promise(function(r) {
//     setTimeout(function() {
//       console.log(i);
//       r(i);
//     }, time);
//   });
// };
// let queue = Promise.resolve();
// for (let i = 0; i <= 10; i++) {
//   queue = queue.then(function() {
//     return printNumber(i, Math.floor(Math.random() * 6000));
//   });
// }

// var keepsHisWord;
// keepsHisWord = true;
// promise1 = new Promise(function(resolve, reject) {
//   if (keepsHisWord) {
//     resolve("The man likes to keep his word");
//   } else {
//     reject("The man doesnt want to keep his word");
//   }
// });
// console.log(promise1);
// promise2 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve({
//       message: "The man likes to keep his word",
//       code: "aManKeepsHisWord"
//     });
//   }, 3 * 1000);
// });
// console.log(promise2);

// keepsHisWord = false;
// promise3 = new Promise(function(resolve, reject) {
//   if (keepsHisWord) {
//     resolve("The man likes to keep his word");
//   } else {
//     reject("The man doesn't want to keep his word");
//   }
// });
// console.log(promise3);

// var momsPromise = new Promise(function(resolve, reject) {
//   momsSavings = 20000;
//   priceOfPhone = 1000;
//   if (momsSavings > priceOfPhone) {
//     resolve({
//       brand: "iphone",
//       model: "6s"
//     });
//   } else {
//     reject("We donot have enough savings. Let us save some more money.");
//   }
// });
// momsPromise.then(function(value) {
//   console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
// });
// momsPromise.catch(function(reason) {
//   console.log("Mom coudn't buy me the phone because ", reason);
// });
// momsPromise.finally(function() {
//   console.log(
//     "Irrespective of whether my mom can buy me a phone or not, I still love her"
//   );
// });
