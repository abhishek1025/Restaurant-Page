
const aboutUsWrapperDiv = document.createElement('div');

const aboutUsDiv = document.createElement('div')
aboutUsDiv.classList.add("contact-us")

const section1 = document.createElement("section")
const section2 = document.createElement("section")
const section3 = document.createElement("section")

const img1 = document.createElement('img');
img1.src = "/assets/images/phone-call.png";

const img2 = document.createElement('img');
img2.src = "/assets/images/map.png"

const iframe = document.createElement('iframe')
iframe.setAttribute('src', "https://maps.google.com/maps?q=Thulo%20kharibot&t=&z=19&ie=UTF8&iwloc=&output=embed")

section1.appendChild(img1)
section1.innerHTML += `+977 982345671289`

section2.appendChild(img2)
section2.innerHTML += `Thulokharibot, New Baneshwor`

section1.classList.add("contact")
section2.classList.add("contact")

section3.appendChild(iframe)

aboutUsDiv.appendChild(section1);
aboutUsDiv.appendChild(section2);
aboutUsDiv.appendChild(section3);

function renderAboutUsElements() {
    aboutUsWrapperDiv.appendChild(aboutUsDiv)
}




export { aboutUsWrapperDiv, renderAboutUsElements }