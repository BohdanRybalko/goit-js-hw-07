import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listRef = document.querySelector(".gallery");
const itemsList = galleryItems
  .map(
    (element) => `<li class="gallery__item">
        <a class="gallery__link" href="${element.original}">
          <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
          />
        </a>
      </li>`
  )
  .join("");
listRef.innerHTML = itemsList;

const instance = basicLightbox.create(
  `
		<img width="1400" height="900" src="">
	`,
  {
    onShow: () => {
      document.addEventListener("keydown", keyBordPress);
    },
    onClose: () => {
      document.removeEventListener("keydown", keyBordPress);
    },
  }
);
// instance.show();

listRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector("img").src = event.target.dataset.source;

  instance.show();
});
function keyBordPress(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}
