// console.log("start");

// setTimeout(() => {
//   console.log("timeout......");
// }, 0);

// console.log("end");

// setTimeout(() => {
//   console.log("timeout....1..");
// }, 2000);
// console.log("start");

// setTimeout(() => {
//   console.log("timeout....2..");
// }, 0);

// console.log("intermidiate");

// console.log("end");

// creating promices

// function createOrder(x, fn) {
//   console.log(x);
//   //   fn("hbhhhb");
//   setTimeout(() => {
//     fn("kamal123");
//   }, 2000);
// }

// function makePayment(orderID) {
//   console.log(orderID);
// }

// createOrder("soap", makePayment); // makePayment giving control to create order, to avoid this we need promises

//*******************JS Promises**********
// const pr = new Promise((resolve, reject) => {
//   // in IF we write logic
//   //   if (id == "userID123")
//   if (true) {
//     setTimeout(() => {
//       resolve();
//     }, 5000);
//   } else {
//     reject();
//   }
// });

// console.log(pr);

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("gfjhmhchaaartcg mnvhgd");
//     }, 10000);
//   });
//   pr.then((res) => {
//     console.log(res);
//   });


  setTimeout(function abc(){
    console.log("I am one");

  },0);

  const ans = arr.filter((a)=>{
    const ns= a.toLowerCase();
    if(ns.includes('india'))
    {
      return true;
    }
    else 
    {
      return false;
    }
  })
