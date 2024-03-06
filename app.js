// wrapper
const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".links li");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: "$119",
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: "$149",
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: "$109",
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: "$129",
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: "$99",
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".product-image img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColors = document.querySelectorAll(".product-colors span");
const currentProductSizes = document.querySelectorAll(".product-size span");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // change cerrent product
    choosenProduct = products[index];

    currentProductTitle.innerHTML = choosenProduct.title;
    currentProductPrice.innerHTML = choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // assign new color
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.classList.remove("active");
    });
    size.classList.toggle("active");
  });
});

const paymentForm = document.querySelector(".payment");
const buyBtn = document.querySelector(".buy-now");
const xMark = document.querySelector(".x-mark");
const overlay = document.querySelector(".overlay");

buyBtn.addEventListener("click", () => {
  paymentForm.style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling by hiding overflow
});

xMark.addEventListener("click", () => {
  paymentForm.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = ""; // Restore default overflow property
});
