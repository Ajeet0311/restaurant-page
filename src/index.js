import "./style.css";
import { loadHome } from "./load-home.js";
import { loadMenu } from "./load-menu.js";
import { loadContact } from "./load-contact.js";


function clearContent() {
    document.getElementById("content").textContent = "";
}

loadHome(); // Default

document.getElementById("h").addEventListener('click', () => {
    clearContent();
    loadHome();
});

document.getElementById("m").addEventListener('click', () => {
    clearContent();
    loadMenu();
});

document.getElementById("c").addEventListener('click', () => {
    clearContent();
    loadContact();
})