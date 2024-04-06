let fun1 = (e) => {
    console.log(e.target.value);
    if(e.target.value.length < 5){
        e.target.style.border = "2px solid red";
    }
    else{
        e.target.style.border = "2px solid green";
    }
}

let submitForm = (e) => {
    e.preventDefault();
    let form = document.forms[0];
    let data = new FormData(form);
    let obj = {};
    for (let [key, value] of data.entries()) {
        obj[key] = value;
    }
    console.log(obj);
}

function submitForm(e){
    e.preventDefault("event");
    
}