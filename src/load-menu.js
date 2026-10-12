export function loadMenu() {

    const menu = document.createElement("div");

    menu.style.whiteSpace = 'pre-line';
    
    menu.textContent = `Pizza: $20
    Pasta: $30
    Burger: $10
    Mojito: $12`;

    document.getElementById("content").appendChild(menu);
}