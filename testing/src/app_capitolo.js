import data from "./content.json" assert { type: "json"};

const list = document.querySelector("#list");
const title = document.querySelector("title");

let img_dir = "img/";
let img_ext = ".png";

let capitolo = parseInt(localStorage.getItem("capitolo"));
let img_counter = parseInt(localStorage.getItem("argomento"));

function ifMine10(num) {
    let string = "";
    if(num < 10) {
        string = "0" + num;
        return string
    }
    string = "" + num;
    return string;
}

title.textContent = `Capitolo ${capitolo+1}`;

for(let i = 0; i < data.capitoli[capitolo].argomenti.length; i++) {
    const a = document.createElement("a");
    const element = document.createElement("element");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");

    list.appendChild(a);
    a.appendChild(element);
    a.href = "argomento.html";
    a.id = i;
    element.appendChild(div);
    div.classList.add("container-img");
    div.appendChild(img);
    img.src = `${img_dir}cap${capitolo+1}_${ifMine10(i+1)}${img_ext}`;
    element.appendChild(h1);
    h1.textContent = data.capitoli[capitolo].argomenti[i].title
}

let elements = document.querySelectorAll("a");
elements.forEach((element) => {
    element.addEventListener("click", () => {
        console.log(element.id);
        img_counter = parseInt(element.id);
        localStorage.setItem("argomento", img_counter);
    });
});

(function (global) {
    if (typeof global === "undefined") {
        throw new Error("window is undefined");
    }
    var _hash = "!";
    var noBackPlease = function () {
        global.location.href += "#";
        global.setTimeout(function () {
            global.location.href += "!";
        }, 50);
    };
    global.onhashchange = function () {
        if (global.location.hash !== _hash) {
            global.location.hash = _hash;
        }
    };
    global.onload = function () {
        noBackPlease();
        document.body.onkeydown = function (e) {
            var elm = e.target.nodeName.toLowerCase();
            if (e.which === 8 && elm !== "input" && elm !== "textarea") {
                e.preventDefault();
            }
            e.stopPropagation();
        };
    };
})(window); 