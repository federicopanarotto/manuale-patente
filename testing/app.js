import data from "./content.json" assert { type: "json"};

let img_dir = "img/";

function ifMine10(num) {
    let string = "";
    if(num < 10) {
        string = "0" + num;
        return string
    }
    string = "" + num;
    return string;
}

let capitolo = 0;
let img_counter = 0;
let back;
let next;

const title = document.querySelector("title");
const text_title = document.querySelector("#cap");
const img_area = document.querySelector("img");
const text_area = document.querySelector("#text-area");

const back_button = document.querySelector("#back");
const next_button = document.querySelector("#next");

title.textContent = "Capitolo " + capitolo;
text_title.innerHTML = data.capitoli[capitolo].argomenti[img_counter].title;
img_area.src = `${img_dir}${ifMine10(img_counter)}`
text_area.innerHTML = data.capitoli[capitolo].argomenti[img_counter].content;
back_button.textContent = "STOCAZZO";
next_button.textContent = "STOCAZZO";

// addEventListener("click", () => {
//     img++;
//     title.textContent = "Capitolo " + capitolo;
//     text_title.innerHTML = data.capitoli[capitolo].argomenti[img_counter].title;
//     // img_area.src = "../img/cap1_01.png";
//     text_area.innerHTML = data.capitoli[capitolo].argomenti[img_counter].content;
//     back_button.textContent = "STOCAZZO";
//     next_button.textContent = "STOCAZZO" + img;
//     console.log(img);
// });
