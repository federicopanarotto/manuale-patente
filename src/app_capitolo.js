import { img_dir, img_ext, ifMine10 } from "./app_global.js";

const title = document.querySelector("title");
const list = document.querySelector("#list");

let capitolo = parseInt(localStorage.getItem("capitolo"));
let img_counter = parseInt(localStorage.getItem("argomento"));

title.textContent = `Capitolo ${capitolo + 1}`;

fetch('./src/content.json')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.capitoli[capitolo].argomenti.length; i++) {
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
      img.src = `${img_dir}cap${capitolo + 1}_${ifMine10(i + 1)}${img_ext}`;
      element.appendChild(h1);
      h1.textContent = data.capitoli[capitolo].argomenti[i].title;
    }

    let elements = document.querySelectorAll("a");
    elements.forEach((element) => {
      element.addEventListener("click", () => {
        img_counter = parseInt(element.id);
        localStorage.setItem("argomento", img_counter);
      });
    });
  })
  .catch(error => console.error('Error loading JSON:', error));