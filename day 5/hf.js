// console.log("Start");

// const req = fetch("http://shopatease-2.onrender.com/api/v1/shops");
// console.log(req);
// req.then(()=>console.log("fetched"));
// console.log("End");
fetch("https://jsonplaceholder.typicode.com/users").then(
    res => res.json().then(
        (data)=>
        console.log(data)
    ))