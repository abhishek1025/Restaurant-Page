
const ul = document.createElement('ul')

const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')

const div = document.createElement('div')
div.classList.add("about-shop")



li1.innerHTML = `
    Opening hours: <span>10 AM - 8 PM </span>
`
li2.innerHTML = `
    Free delivery: <span>Saturday</span>
`
li3.innerHTML = `
    20% OFF on <span>Friday, Saturday</span>
`
appendChildElementsInHomePage()

function appendChildElementsInHomePage() {
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)


    div.appendChild(createParagraph("We serve the best bakery items in kathmandu with home delivery service."))
    div.appendChild(ul)
    div.appendChild(createParagraph("we're currently located at <span>Thulokharibot, New Baneshwor</span>"))
    div.appendChild(createParagraph("Look at our <span> menu </span> for items that we provide"))
}

function createParagraph(text) {
    const p = document.createElement('p');
    p.innerHTML = text;

    return p;
}

export { div, appendChildElementsInHomePage, createParagraph };




