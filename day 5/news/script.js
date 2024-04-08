console.log("...APP Started");

// function callAPI(){
//     fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=c4aaf6cba54a4d1f8323f135a900baa7")
//     .then((res)=>{
//         // console.log(res);
//             return res.json();
//         })
//     .then((data)=>{
//         return res.json();
//     })
//     })
// }
//callAPI();

function renderUI(){
    const root = document.getElementById("root");

    const div = document.createElement("div");
    div.innerText = 'Card';

    root.appendChild(div);
}
renderUI();