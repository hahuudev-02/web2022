import "../css/deiltal.css";
import Render from "./render.js";

const idURl = new URLSearchParams(window.location.search).get("id");

const products = [
    {
        id: 1,
        img: "https://picsum.photos/500/250",
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    },
    {
        id: 2,
        img: "https://picsum.photos/500/250",
        title: "Fresh Lime Roasted Salmon",
        price: 30,
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    },
    {
        id: 3,
        img: "https://picsum.photos/500/250",
        title: "The Best Easy One Pot Chicken and Rice",
        price: 30,
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    },
    {
        id: 4,
        img: "https://picsum.photos/500/250",
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    },
    {
        id: 5,
        img: "https://picsum.photos/500/250",
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    },
    {
        id: 6,
        img: "https://picsum.photos/500/250",
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 40,
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    },
];

const productDetails = products.find((product) => product.id == idURl);

const htmls = `
    <div className="">
        <h1 class="text-[40px] font-bold">${productDetails.title}</h1>
                            
        <span class="block mt-5 text-4xl text-red-600">$ ${productDetails.price}</span>

        <p class="ext-sm my-8 leading-7">${productDetails.description}</p>
        <div class="search h-16 flex ">
            <input type="text" class="flex-1 mr-2 px-2 border" placeholder="Quantity">
            <button class="w-40 bg-black rounded-r-lg text-white">Add To Cart</button>
        </div>
    </div>

    <div class="">
        <img src="${productDetails.img}" alt="" class="w-[616px] h-[616px] rounded-lg">
    </div>
`

Render("productDetails", htmls)
