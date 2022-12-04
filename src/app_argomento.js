import data from "./content.json" assert { type: "json"};
import { img_dir, img_ext, ifMine10 } from "./app_global.js";

const title = document.querySelector("title");
const text_title = document.querySelector("#cap");
const img_area = document.querySelector("img");
const text_area = document.querySelector("#text-area");
const back_button = document.querySelector("#back");
const next_button = document.querySelector("#next");
const back_button_text = document.querySelector("#back-text");
const next_button_text = document.querySelector("#next-text")

let capitolo = parseInt(localStorage.getItem("capitolo"));
let img_counter = parseInt(localStorage.getItem("argomento"));

function updatePage() {
    text_title.innerHTML = data.capitoli[capitolo].argomenti[img_counter].title;
    img_area.src = `${img_dir}cap${capitolo+1}_${ifMine10(img_counter+1)}${img_ext}`
    text_area.innerHTML = data.capitoli[capitolo].argomenti[img_counter].content;
    back_button_text.textContent = "argomento precedente";
    next_button_text.textContent = "argomento successivo";
    localStorage.setItem("argomento", img_counter);
}

title.textContent = `Capitolo ${capitolo+1}`;
updatePage();

if(img_counter == 0) {
    back_button_text.textContent = "torna indietro";
    next_button_text.textContent = "argomento successivo";
} else if(img_counter == data.capitoli[capitolo].argomenti.length-1) {
    next_button_text.textContent = "capitolo successivo";
    back_button_text.textContent = "argomento precedente";
} else {
    back_button_text.textContent = "argomento precedente";
    next_button_text.textContent = "argomento successivo";
}

next_button.addEventListener("click", () => {
    if(img_counter < data.capitoli[capitolo].argomenti.length-1) {
        img_counter++;
        updatePage();
    }
    if(img_counter == data.capitoli[capitolo].argomenti.length-1) {
        next_button.href = "capitolo.html";
        capitolo++;
        localStorage.setItem("capitolo", capitolo);
        next_button_text.textContent = "capitolo successivo";
    }
    console.log(img_counter)
});

back_button.addEventListener("click", () => {
    if(img_counter > 0) {
        img_counter--;
        updatePage();
    }
    if(img_counter == 0) {
        back_button.href = "capitolo.html";
        back_button_text.textContent = "torna indietro";
    }
});