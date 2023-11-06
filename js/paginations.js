const paginationBtns = document.querySelectorAll(".paginations-list__link");

paginationBtns.forEach((pagination) => {
  pagination.addEventListener("click", function () {
    // Удалите класс "active" у всех элементов
    paginationBtns.forEach((item) => {
      item.classList.remove("active");
    });

    // Добавьте класс "active" только к текущему элементу
    pagination.classList.add("active");
  });
});

const heartBlue = document.querySelectorAll(
  ".catalog-list__item-price-favorite"
);

heartBlue.forEach((heart) => {
  heart.addEventListener("click", function () {
    heart.classList.toggle("active");
  });
});

// CATALOG

const itemButton = document.querySelectorAll(".catalog__items-button");

itemButton.forEach((buttonActive) => {
  buttonActive.addEventListener("click", function () {
    itemButton.forEach((buttonRemove) => {
      buttonRemove.classList.remove("active");
    });

    buttonActive.classList.toggle("active");
  });
});

const catalogAsideButton = document.querySelectorAll(
  ".catalog-aside__btns-button"
);

catalogAsideButton.forEach((buttonActiveAside) => {
  buttonActiveAside.addEventListener("click", function () {
    catalogAsideButton.forEach((buttonRemoveAside) => {
      buttonRemoveAside.classList.remove("active");
    });

    buttonActiveAside.classList.add("active");
  });
});

// CHEKBOX

const asideTitleBtn = document.querySelectorAll(".catalog-aside__item-title");
const asideContent = document.querySelectorAll(".catalog-aside__item-box");

asideTitleBtn.forEach((title) => {
  title.addEventListener("click", function () {
    const contentOpen = title.nextElementSibling;
    contentOpen.classList.toggle("active");

    asideContent.forEach((content) => {});

    title.classList.toggle("active");
  });
});

const modelLinkButton = document.querySelectorAll(".watercraft__model-link");

modelLinkButton.forEach((modelButtonActive) => {
  modelButtonActive.classList.toggle("active");
});

// ЗВЁЗДНЫЙ РЕЙТИНГ

const stars = document.querySelectorAll(".product-page__static-star");

stars.forEach((star) => {
  star.addEventListener("click", (event) => {
    const clickedStar = event.target;
    const rating = parseInt(clickedStar.getAttribute("data-rating"));

    stars.forEach((s, index) => {
      if (index < rating) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
  });
});

// STATIC-BUTTON

const staticTabsButton = document.querySelectorAll(".product-page__tabs-title");

staticTabsButton.forEach((tab) => {
  tab.addEventListener("click", function () {
    staticTabsButton.forEach((otherTab) => {
      otherTab.classList.remove("active");
    });

    tab.classList.add("active");
  });
});

// MENU-MOBILE

const menuOpen = document.querySelector(".header__top-menu");
const menuClose = document.querySelector(".menu-mobile__close");
const menuContainer = document.querySelector(".menu-mobile");

menuOpen.addEventListener("click", function () {
  menuContainer.classList.add("active");
});

menuClose.addEventListener("click", function () {
  menuContainer.classList.remove("active");
});
