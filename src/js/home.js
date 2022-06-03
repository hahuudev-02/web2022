import "../css/home.css";
import Render from "./render";
import imgProductHome from './img'


const products = [
    {
        id: 1,
        img: imgProductHome[0],
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        description: "snack",
    },
    {
        id: 2,
        img: imgProductHome[1],
        title: "Fresh Lime Roasted Salmon",
        price: 30,
        description: "Fish",
    },
    {
        id: 3,
        img: imgProductHome[2],
        title: "The Best Easy One Pot Chicken and Rice",
        price: 30,
        description: "snack",
    },
    {
        id: 4,
        img: imgProductHome[3],
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        description: "snack",
    },
    {
        id: 5,
        img: imgProductHome[4],
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        description: "snack",
    },
    {
        id: 6,
        img: imgProductHome[5],
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 40,
        description: "snack",
    },
];

const categories = [
    {
        img: './src/img/Group 890.png',
        name: "Breakfast"
    },
    {
        img: './src/img/image 20.png',
        name: "Breakfast"
    },
    {
        img: './src/img/image 21.png',
        name: "Breakfast"
    },
    {
        img: './src/img/image 22.png',
        name: "Breakfast"
    },
    {
        img: './src/img/image 23.png',
        name: "Breakfast"
    },
    {
        img: './src/img/image 24 (1).png',
        name: "Breakfast"
    },
]

const htmlsProducts = products.map(
    (product) =>
        `
     <div class="column" key=${product.id}>
        <a href="./deital.html?id=${product.id}" className="">
            <img src="${product.img}" alt="" class="rounded-lg w-full">
        </a>
        <a href="./deital.html?id=${product.id}" className="">
            <p class="text-primary my-4">${product.title}</p>
        </a>
        <div class="flex items-center space-x-4 text-gray-600">
            <span class="">${product.price} Minutes</span>
            <span class="">${product.description}</span>
        </div>
    </div>
    `
);

const htmlCategories = categories.map(category => `
    <div class="column flex flex-col items-center">
        <img src="${category.img}" alt="" class=" w-full">
        <span class="mt-8">${category.name}</span>
    </div>
`)

Render("products", htmlsProducts.join(""));
Render("categories", htmlCategories.join(""));
