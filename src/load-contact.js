export function loadContact() {

    const info = document.createElement("div");

    info.style.whiteSpace = 'pre-line';
    
    info.textContent = `Phone: +91 9876543210
    Address: Street No. 123, Delhi
    Mail: abc@xmail.com`;

    document.getElementById("content").appendChild(info);
}