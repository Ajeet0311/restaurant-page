import rest_img from "../restaurant.jpg";

export function loadHome() {
    
    const name = document.createElement("h1");
    name.textContent = "Odin Bar & Restaurant";

    const image = document.createElement("img");
    image.src = rest_img;

    const description = document.createElement("h2");
    description.textContent = "We serve amazing food and beverages!";

    const targetDiv = document.getElementById("content");
    targetDiv.appendChild(name);
    targetDiv.appendChild(image);
    targetDiv.appendChild(description);
}