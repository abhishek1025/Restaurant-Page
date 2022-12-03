import './CSS/style.css';
import { div as homeDiv, appendChildElementsInHomePage, createParagraph } from './home.js';
import { main, displayMenuItems } from './menu';
import { aboutUsWrapperDiv, renderAboutUsElements } from './about-us';


const content = document.querySelector("#content")

//shop title
const h1 = document.createElement("h1");
h1.innerText = "The Bakery"

//shop nav
const nav = document.createElement("nav")


//nav menu
nav.innerHTML = `
    <button class="active-sec nav-btn"> Home </button>
    <button class ="nav-btn"> Menu </button>
    <button class = "nav-btn">About us</button>
`


// appending child to parent element
content.appendChild(h1);
content.appendChild(nav);
content.appendChild(homeDiv);
content.appendChild(main)
content.appendChild(aboutUsWrapperDiv)




const navTabs = document.querySelectorAll(".nav-btn")


navTabs[0].addEventListener("click", () => {

    main.innerHTML = ""
    main.classList.remove("menu-wrapper");

    aboutUsWrapperDiv.innerHTML = ""

    if (!homeDiv.innerHTML) {
        appendChildElementsInHomePage();
        homeDiv.classList.add("about-shop");

    }

    navTabs[1].classList.remove("active-sec")
    navTabs[2].classList.remove("active-sec")

    navTabs[0].classList.add("active-sec")
})

navTabs[1].addEventListener("click", () => {

    homeDiv.innerHTML = ""
    homeDiv.classList.remove("about-shop");

    aboutUsWrapperDiv.innerHTML = ""


    if (!main.innerHTML) {
        main.classList.add("menu-wrapper");
        displayMenuItems();
    }

    navTabs[0].classList.remove("active-sec")
    navTabs[2].classList.remove("active-sec")

    navTabs[1].classList.add("active-sec")
})

navTabs[2].addEventListener("click", () => {

    homeDiv.innerHTML = ""
    homeDiv.classList.remove("about-shop");

    main.innerHTML = ""
    main.classList.remove("menu-wrapper");


    if (!aboutUsWrapperDiv.innerHTML) {
        renderAboutUsElements();
    }

    navTabs[0].classList.remove("active-sec")
    navTabs[1].classList.remove("active-sec")

    navTabs[2].classList.add("active-sec")
})








