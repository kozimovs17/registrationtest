let signUp = document.querySelector(".sign");
let formPage = document.querySelector(".formPage");
// let reg = document.querySelector(".reg");
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let data = JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : [];
let formitem = document.querySelector(".formitem");
data.forEach((item) => {
    tbody.innerHTML += `<tr>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.password}</td>
    </tr>`
})
signUp.addEventListener("click", () => {
    formPage.style.display = "block";
})
form.addEventListener("submit", () => {
    tbody.innerHTML = "";
    data.push({name: form["name"].value.trim(), email: form["email"].value.trim(), password: form["password"].value.trim()})
    
    localStorage.setItem("data", JSON.stringify(data));

    // let users = JSON.parse(localStorage.getItem("data"));
    data.forEach((item) => {
        tbody.innerHTML += `<tr>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
        </tr>`
    })
    formPage.style.display = "none";
    form["name"].value = "";
    form["email"].value = "";
    form["pasword"].value = "";
})

formitem.addEventListener("click", () =>{
    formPage.style.display = "none";
})
/////////////////////////////////////////////////////////////
let anm = document.querySelector(".anm");
let persons = document.querySelector(".persons");
let n = 0;

anm.addEventListener("click", () =>{
    n++;
    if(n % 2 !=0){
        persons.style.transform = `translate(0, 0)`;
    } else{
        persons.style.transform = `translate(500px, 0)`;
    }
});

let eyeclick = document.querySelector(".eyeclick");
let password = document.querySelector("#password");
let eye = document.querySelector(".passworditem");
let eye2 = document.querySelector(".passworditem2");
let z = 0;

eyeclick.addEventListener("click", () =>{
    z++;
    if(z % 2 !=0){
    password.type = "text";
    eye2.style.display = "none"
    eye.style.display = "block"
    }else{
        password.type = "password";
    eye.style.display = "none"
    eye2.style.display = "block"
    }
})

