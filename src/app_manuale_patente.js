import data from "./content.json" assert { type: "json"};

const list = document.querySelector("#list");

let img_dir = "img/";
let img_ext = ".png";

let capitolo = 0;

for(let i = 0; i < data.capitoli.length; i++) {
    const a = document.createElement("a");
    const element = document.createElement("element");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    const p = document.createElement("p");
    
    list.appendChild(a);
    a.appendChild(element);
    a.href = "capitolo.html";
    a.id = i;
    element.appendChild(div);
    div.classList.add("cap-content");
    div.appendChild(h1);
    h1.textContent = `Capitolo ${i+1}`;
    div.appendChild(img);
    img.src = `${img_dir}cap${i+1}_00${img_ext}`;
    div.appendChild(p);
    p.textContent = data.capitoli[i].title;
}

let elements = document.querySelectorAll("a");
elements.forEach((element) => {
    element.addEventListener("click", () => {
        console.log(element.id);
        capitolo = parseInt(element.id);
        localStorage.setItem("capitolo", capitolo);
    });
});