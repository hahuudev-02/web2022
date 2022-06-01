import "../css/home.css";

const products = [
    {
        id: 1,
        img: "https://picsum.photos/500/250",
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        description: "snack",
    },
    {
        id: 2,
        img: "https://picsum.photos/500/250",
        title: "Fresh Lime Roasted Salmon",
        price: 30,
        description: "Fish",
    },
    {
        id: 3,
        img: "https://picsum.photos/500/250",
        title: "The Best Easy One Pot Chicken and Rice",
        price: 30,
        description: "snack",
    },
    {
        id: 4,
        img: "https://picsum.photos/500/250",
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        description: "snack",
    },
    {
        id: 5,
        img: "https://picsum.photos/500/250",
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        description: "snack",
    },
    {
        id: 6,
        img: "https://picsum.photos/500/250",
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 40,
        description: "snack",
    },
];

const htmls = products.map((product) =>
     `
     <div class="column" key=${product.id}>
        <img src="${product.img}" alt="" class="rounded-lg w-full">
        <p class="text-primary my-4">${product.title}</p>
        <div class="flex items-center space-x-4 text-gray-600">
            <span class="">${product.price} Minutes</span>
            <span class="">${product.description}</span>
        </div>
    </div>
    `
);

function render(elementId, htmls) {
    const element = document.getElementById(elementId)
    if(element) {
        element.innerHTML = htmls
    }
}

render('products', htmls.join(''))