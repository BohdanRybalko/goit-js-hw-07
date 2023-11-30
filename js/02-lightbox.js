import { galleryItems } from "./gallery-items.js";

const listRef = document.querySelector(".gallery");
const itemsList = galleryItems
  .map(
    (element) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${element.original}">
          <img
            class="gallery__image"
            src="${element.preview}"
            alt="${element.description}"
          />
          <div class="gallery__caption">${element.description}</div>
        </a>
      </li>`
  )
  .join("");
listRef.innerHTML = itemsList;

const scriptRef = document.createElement("script");
scriptRef.src =
  "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.7.0/simple-lightbox.min.js";
document.head.appendChild(scriptRef);

const linkRef = document.createElement("link");
linkRef.rel = "stylesheet";
linkRef.href =
  "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.7.0/simple-lightbox.min.css";
document.head.appendChild(linkRef);

scriptRef.onload = () => {
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
  });
};
