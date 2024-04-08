document.querySelector('h1').innerHTML(" gandu")
console.log('GEC Start');

function printPreety(){
   console.log('preetyStart');
   let ans=2+3;
   console.log(ans);
   console.log('preetyEnd');
}

setTimeout(printPreety,10000);
console.log('GEC end');