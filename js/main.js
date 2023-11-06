document.addEventListener("DOMContentLoaded", function () {
  const tabsButton = document.querySelectorAll(".search__tabs-item");

  tabsButton.forEach((tabsButtonActive) => {
    tabsButtonActive.addEventListener("click", function () {
      tabsButton.forEach((tabsButtonRemove) => {
        tabsButtonRemove.classList.remove("active");
      });

      tabsButtonActive.classList.add("active");
    });
  });

  const tabContent = document.querySelectorAll(".search__content-item");

  for (let item of tabsButton) {
    item.addEventListener("click", function () {
      for (let content of tabContent) {
        content.classList.add("hidden");
      }

      const content = document.querySelector("#" + item.dataset.tab);
      content.classList.remove("hidden");
    });
  }

  tabsButton[0].click();

  // PRODUCTS

  const favorite = document.querySelectorAll(".swiper__slide-favorite");

  favorite.forEach((element) => {
    element.addEventListener("click", function () {
      element.classList.toggle("active");
    });
  });
});

const productAllButton = document.querySelector(".products-all");
const openProductsBnt = document.querySelector(".products-all__open");
const closeProductsBnt = document.querySelector(".products-all__close");
const productsItems = document.querySelectorAll(".products__content");

productAllButton.addEventListener("click", function () {
  productsItems.forEach((item) => {
    item.classList.add("active");
  });

  openProductsBnt.style.display = "none";
  closeProductsBnt.style.display = "block";
});

closeProductsBnt.addEventListener("click", function () {
  productsItems.forEach((item) => {
    item.classList.remove("active");

    if (!item.classList.contains("active")) {
      openProductsBnt.style.display = "block";
      closeProductsBnt.style.display = "none";
    }
  });
});

// TABS-PRODUCTS

const productsLinks = document.querySelectorAll(".products-link");
const productsContents = document.querySelectorAll(".products-content");

productsLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Сначала скройте все элементы .products-content
    productsContents.forEach((content) => {
      content.classList.add("hidden");
    });

    const tabId = link.dataset.tab;
    const contentShow = document.querySelector("#" + tabId);

    contentShow.classList.remove("hidden");
  });
});

const popularLinks = document.querySelectorAll(".popular-link");
const popularContents = document.querySelectorAll(".popular-content");

popularLinks.forEach((linkPop) => {
  linkPop.addEventListener("click", function () {
    // Сначала скройте все элементы .popular-content
    popularContents.forEach((contentPop) => {
      contentPop.classList.add("hidden");
    });

    const tabIdPop = linkPop.dataset.popular;
    const contentPopShow = document.querySelector("#" + tabIdPop);

    // Затем покажите только выбранный контент
    contentPopShow.classList.remove("hidden");
  });
});

// PAGINATIONS
