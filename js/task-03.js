const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");
const itemEl = images
  .map(
    (image) =>
      `<li class="js-gallery__card"><img class="js-gallery__pic" src="${image.url} alt="${image.alt}"></li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", itemEl);

//спосіб №2 через деструктирізацію
// const list = document.querySelector(".gallery");

// const createGalleryCard = ({ url, alt } = {}) => {
//   return `<li class="js-gallery__card"><img class="js-gallery__pic" src="${url}" alt="${alt}"></li>`;
// };

// const galleryElements = images.map(createGalleryCard).join("");

// list.insertAdjacentHTML("beforeend", galleryElements);

// const imageEl = document.querySelector("img");
// imageEl.classList.add("gallery__pic");

// Питання - класи вписала при методі map. Спробувала додати через imageEl.classList.add - додає тільки до першого елемента, як можна через цей метод додати до всіх? Дякую!
