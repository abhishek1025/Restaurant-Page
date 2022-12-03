import { createParagraph } from './home.js';

const menuItems = [
    {
        img: "assets/images/item-1.jpeg",
        title: "Meow Cat",
        price: "Rs. 1230",
        rating: "Rating: 4.2/5"
    },
    {
        img: "/assets/images/item-2.jpeg",
        title: "Mini Meow",
        price: "Rs. 1450",
        rating: "Rating: 4/5"
    },
    {
        img: "/assets/images/item-3.jpeg",
        title: "Butterscotch",
        price: "Rs. 1100",
        rating: "Rating: 4.8/5"
    },
    {
        img: "/assets/images/item-4.jpeg",
        title: "Red Velvet",
        price: "Rs. 1800",
        rating: "Rating: 4/5"
    },
    {
        img: "/assets/images/item-5.jpeg",
        title: "Black Forest",
        price: "Rs. 700",
        rating: "Rating: 4.9/5"
    },
    {
        img: "/assets/images/pastries.jpg",
        title: "Pastries",
        price: "Rs.999",
        rating: "Rating: 4/5"
    },
    {
        img: "/assets/images/kaju-badam.jpg",
        title: "Kaju Badam",
        price: "Rs.2400/kg",
        rating: "Rating: 5/5"
    },
    {
        img: "/assets/images/raspberry-cake-roll.jpg",
        title: "Raspberry Cake Roll",
        price: "Rs. 1700",
        rating: "Rating: 4.5/5"
    },
    {
        img: "/assets/images/dessert-fruitcake.jpg",
        title: "Dessert Fruitcake",
        price: "Rs. 1890",
        rating: "Rating: 5/5"
    },
    {
        img: "/assets/images/strawberries-baiser-cake.jpg",
        title: "Strawberries Baiser Cake",
        price: "Rs. 2450 ",
        rating: "Rating: 4.8/5"
    },
    {
        img: "/assets/images/cupcakes.jpg",
        title: "cupcakes",
        price: "Rs. 500/set",
        rating: "Rating: 4/5"
    },
    {
        img: "/assets/images/croissants-wooden-cutting-board.jpg",
        title: "Croissants",
        price: "Rs.90/piece",
        rating: "Rating: 3/5"
    },
    {
        img: "/assets/images/barfi.jpg",
        title: "Barfi",
        price: "Rs.2000/kg",
        rating: "Rating: 5/5"
    },
    {
        img: "/assets/images/chocolate-cake-with-chocolate-sprinkles.jpg",
        title: "Cake With Chocolate Sprinkles",
        price: "Rs. 2600",
        rating: "Rating: 5/5"
    }, {
        img: "/assets/images/chocolate-ice-cream-dessert.jpg",
        title: "Chocolate Ice-cream Dssert",
        price: "Rs.220",
        rating: "Rating: 4.5/5"
    },
    {
        img: "/assets/images/cone-ice-cream.jpg",
        title: "Cone Icream",
        price: "Rs. 120 per scoop",
        rating: "Rating: 3/5"
    }
]

const main = document.createElement("main")

function displayMenuItems() {

    menuItems.forEach((element) => {
        const div = document.createElement("div");
        div.classList.add("menu");

        const img = document.createElement("img");
        img.setAttribute("src", element.img);
        img.setAttribute("alt", "Menu Item");


        const p1 = createParagraph(element.price)
        p1.classList.add("price");

        div.appendChild(img)
        div.appendChild(createParagraph(element.title));
        div.appendChild(p1)
        div.appendChild(createParagraph(element.rating))

        main.appendChild(div)
    })
}

export { main, displayMenuItems }