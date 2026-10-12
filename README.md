# 🍽️ Odin Bar & Restaurant

A dynamic, single-page restaurant application built with Vanilla JavaScript, modular architecture, and modern build tools as part of The Odin Project curriculum.

---

## ✨ Key Features

* **Dynamic Content Generation:** The entire DOM is manipulated and rendered using JavaScript—no hardcoded HTML content except for the base template.
* **Interactive Navigation:** Seamlessly switch between Home, Menu, and Contact views without page reloads using event listeners and a clean state-clearing function.
* **Asset Management:** Automatically loads and optimizes images using module bundlers.

---

## 🧠 What I Learned & Technical Highlights

This project was a major milestone in moving away from simple script tags to a professional frontend development workflow:

* **ES6 Modules (`import` / `export`):** 
  * Mastered clean file management by breaking code into logical, single-responsibility modules (`load-home.js`, `load-menu.js`, `load-contact.js`).
  * Avoided global scope pollution by explicitly importing and exporting functions and assets.
* **Module Bundling with Webpack:**
  * Learned how to configure and use Webpack to bundle JavaScript files, manage dependencies, and streamline the development build process.
  * Utilized loaders (`style-loader`, `css-loader`, and image loaders) to handle CSS styles and media assets directly within JavaScript entry points.
* **NPM & Package Management:**
  * Gained confidence in managing project dependencies via `package.json`, installing developer tools, and setting up build scripts.

---

 ## 🛠️ Technologies Used

* **JavaScript (ES6+)** (DOM Manipulation, Modules)
* **HTML5 & CSS3** (Custom responsive layout)
* **Webpack** (Module bundler)
* **Node.js & npm** (Package management)
