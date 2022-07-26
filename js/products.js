const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 1) {
    header.style.backgroundColor = "#ffff";
  } else {
    header.style.backgroundColor = "#ffff";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

new Vue({
  el: "#app",
  data: {
    xChild: 0,
    yChild: 0,
    xParent: 0,
    yParent: 0,
    hover: false,
    hideCursor: true,
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`;
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${
        this.yChild - 3
      }px) translateZ(0) translate3d(0, 0, 0);`;
    },
  },
  methods: {
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 15;
        this.yParent = e.clientY - 15;
      }, 100);
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener("mouseleave", (e) => {
      this.hideCursor = true;
    });
    document.addEventListener("mouseenter", (e) => {
      this.hideCursor = false;
    });
  },
});

VanillaTilt.init(document.querySelectorAll(".product"), {
  max: 40,
  speed: 5000,
});

function showPreview_1() {
  (document.querySelector(".products_preview_1").style.width = "100%"),
    (document.querySelector(".products_preview_1").style.transition = "1s"),
    (document.querySelector(".products_preview_1").style.opacity = "1"),
    (document.querySelector(".nutrition_detail_1").style.opacity = "1"),
    (document.querySelector(".product_image_1").style.opacity = "1"),
    (document.querySelector(".products_preview_1").style.zIndex = "20"),
    (document.querySelector(".img_preview_1").style.opacity = "1"),
    (document.querySelector(".img_preview_1").style.width = "100%"),
    (document.querySelector(".nutrition__border_1").style.display = "block"),
    (document.querySelector(".btn-1").style.display = "flex"),
    (document.getElementById("body_product").style.overflowY = "hidden");
}
function hidePreview_1() {
  (document.getElementById("body_product").style.overflowY = "scroll"),
    (document.querySelector(".products_preview_1").style.width = "0%"),
    (document.querySelector(".products_preview_1").style.transition = "1s"),
    (document.querySelector(".nutrition_detail_1").style.opacity = "0"),
    (document.querySelector(".nutrition__border_1").style.display = "none"),
    (document.querySelector(".btn-1").style.display = "none"),
    (document.querySelector(".product_image_1").style.opacity = "0");
}

function showPreview_2() {
  (document.querySelector(".products_preview_2").style.width = "100%"),
    (document.querySelector(".products_preview_2").style.transition = "1s"),
    (document.querySelector(".products_preview_2").style.opacity = "1"),
    (document.querySelector(".nutrition_detail_2").style.opacity = "1"),
    (document.querySelector(".product_image_2").style.opacity = "1"),
    (document.querySelector(".products_preview_2").style.zIndex = "20"),
    (document.querySelector(".img_preview_2").style.opacity = "1"),
    (document.querySelector(".img_preview_2").style.width = "100%"),
    (document.querySelector(".nutrition__border_2").style.display = "block"),
    (document.querySelector(".btn-2").style.display = "flex"),
    (document.getElementById("body_product").style.overflowY = "hidden");
}
function hidePreview_2() {
  (document.getElementById("body_product").style.overflowY = "scroll"),
    (document.querySelector(".products_preview_2").style.width = "0%"),
    (document.querySelector(".products_preview_2").style.transition = "1s"),
    (document.querySelector(".nutrition_detail_2").style.opacity = "0"),
    (document.querySelector(".nutrition__border_2").style.display = "none"),
    (document.querySelector(".btn-2").style.display = "none"),
    (document.querySelector(".product_image_2").style.opacity = "0");
}

function showPreview_3() {
  (document.querySelector(".products_preview_3").style.width = "100%"),
    (document.querySelector(".products_preview_3").style.transition = "1s"),
    (document.querySelector(".products_preview_3").style.opacity = "1"),
    (document.querySelector(".nutrition_detail_3").style.opacity = "1"),
    (document.querySelector(".product_image_3").style.opacity = "1"),
    (document.querySelector(".products_preview_3").style.zIndex = "20"),
    (document.querySelector(".img_preview_3").style.opacity = "1"),
    (document.querySelector(".img_preview_3").style.width = "100%"),
    (document.querySelector(".nutrition__border_3").style.display = "block"),
    (document.querySelector(".btn-3").style.display = "flex"),
    (document.getElementById("body_product").style.overflowY = "hidden");
}
function hidePreview_3() {
  (document.getElementById("body_product").style.overflowY = "scroll"),
    (document.querySelector(".products_preview_3").style.width = "0%"),
    (document.querySelector(".products_preview_3").style.transition = "1s"),
    (document.querySelector(".nutrition_detail_3").style.opacity = "0"),
    (document.querySelector(".nutrition__border_3").style.display = "none"),
    (document.querySelector(".btn-3").style.display = "none"),
    (document.querySelector(".product_image_3").style.opacity = "0");
}

function showPreview_4() {
  (document.querySelector(".products_preview_4").style.width = "100%"),
    (document.querySelector(".products_preview_4").style.transition = "1s"),
    (document.querySelector(".products_preview_4").style.opacity = "1"),
    (document.querySelector(".nutrition_detail_4").style.opacity = "1"),
    (document.querySelector(".product_image_4").style.opacity = "1"),
    (document.querySelector(".products_preview_4").style.zIndex = "20"),
    (document.querySelector(".img_preview_4").style.opacity = "1"),
    (document.querySelector(".img_preview_4").style.width = "100%"),
    (document.querySelector(".nutrition__border_4").style.display = "block"),
    (document.querySelector(".btn-4").style.display = "flex"),
    (document.getElementById("body_product").style.overflowY = "hidden");
}
function hidePreview_4() {
  (document.getElementById("body_product").style.overflowY = "scroll"),
    (document.querySelector(".products_preview_4").style.width = "0%"),
    (document.querySelector(".products_preview_4").style.transition = "1s"),
    (document.querySelector(".nutrition_detail_4").style.opacity = "0"),
    (document.querySelector(".nutrition__border_4").style.display = "none"),
    (document.querySelector(".btn-4").style.display = "none"),
    (document.querySelector(".product_image_4").style.opacity = "0");
}

function showPreview_5() {
  (document.querySelector(".products_preview_5").style.width = "100%"),
    (document.querySelector(".products_preview_5").style.transition = "1s"),
    (document.querySelector(".products_preview_5").style.opacity = "1"),
    (document.querySelector(".nutrition_detail_5").style.opacity = "1"),
    (document.querySelector(".product_image_5").style.opacity = "1"),
    (document.querySelector(".products_preview_5").style.zIndex = "20"),
    (document.querySelector(".img_preview_5").style.opacity = "1"),
    (document.querySelector(".img_preview_5").style.width = "100%"),
    (document.querySelector(".nutrition__border_5").style.display = "block"),
    (document.querySelector(".btn-5").style.display = "flex"),
    (document.getElementById("body_product").style.overflowY = "hidden");
}
function hidePreview_5() {
  (document.getElementById("body_product").style.overflowY = "scroll"),
    (document.querySelector(".products_preview_5").style.width = "0%"),
    (document.querySelector(".products_preview_5").style.transition = "1s"),
    (document.querySelector(".nutrition_detail_5").style.opacity = "0"),
    (document.querySelector(".nutrition__border_5").style.display = "none"),
    (document.querySelector(".btn-5").style.display = "none"),
    (document.querySelector(".product_image_5").style.opacity = "0");
}

function showPreview_6() {
  (document.querySelector(".products_preview_6").style.width = "100%"),
    (document.querySelector(".products_preview_6").style.transition = "1s"),
    (document.querySelector(".products_preview_6").style.opacity = "1"),
    (document.querySelector(".nutrition_detail_6").style.opacity = "1"),
    (document.querySelector(".product_image_6").style.opacity = "1"),
    (document.querySelector(".products_preview_6").style.zIndex = "20"),
    (document.querySelector(".img_preview_6").style.opacity = "1"),
    (document.querySelector(".img_preview_6").style.width = "100%"),
    (document.querySelector(".nutrition__border_6").style.display = "block"),
    (document.querySelector(".btn-6").style.display = "flex"),
    (document.getElementById("body_product").style.overflowY = "hidden");
}
function hidePreview_6() {
  (document.getElementById("body_product").style.overflowY = "scroll"),
    (document.querySelector(".products_preview_6").style.width = "0%"),
    (document.querySelector(".products_preview_6").style.transition = "1s"),
    (document.querySelector(".nutrition_detail_6").style.opacity = "0"),
    (document.querySelector(".nutrition__border_6").style.display = "none"),
    (document.querySelector(".btn-6").style.display = "none"),
    (document.querySelector(".product_image_6").style.opacity = "0");
}

function showPreview_7() {
  (document.querySelector(".products_preview_7").style.width = "100%"),
    (document.querySelector(".products_preview_7").style.transition = "1s"),
    (document.querySelector(".products_preview_7").style.opacity = "1"),
    (document.querySelector(".nutrition_detail_7").style.opacity = "1"),
    (document.querySelector(".product_image_7").style.opacity = "1"),
    (document.querySelector(".products_preview_7").style.zIndex = "20"),
    (document.querySelector(".img_preview_7").style.opacity = "1"),
    (document.querySelector(".img_preview_7").style.width = "100%"),
    (document.querySelector(".nutrition__border_7").style.display = "block"),
    (document.querySelector(".btn-7").style.display = "flex"),
    (document.getElementById("body_product").style.overflowY = "hidden");
}
function hidePreview_7() {
  (document.getElementById("body_product").style.overflowY = "scroll"),
    (document.querySelector(".products_preview_7").style.width = "0%"),
    (document.querySelector(".products_preview_7").style.transition = "1s"),
    (document.querySelector(".nutrition_detail_7").style.opacity = "0"),
    (document.querySelector(".nutrition__border_7").style.display = "none"),
    (document.querySelector(".btn-7").style.display = "none"),
    (document.querySelector(".product_image_7").style.opacity = "0");
}

function showPreview_8() {
  (document.querySelector(".products_preview_8").style.width = "100%"),
    (document.querySelector(".products_preview_8").style.transition = "1s"),
    (document.querySelector(".products_preview_8").style.opacity = "1"),
    (document.querySelector(".nutrition_detail_8").style.opacity = "1"),
    (document.querySelector(".product_image_8").style.opacity = "1"),
    (document.querySelector(".products_preview_8").style.zIndex = "20"),
    (document.querySelector(".img_preview_8").style.opacity = "1"),
    (document.querySelector(".img_preview_8").style.width = "100%"),
    (document.querySelector(".nutrition__border_8").style.display = "block"),
    (document.querySelector(".btn-8").style.display = "flex"),
    (document.getElementById("body_product").style.overflowY = "hidden");
}
function hidePreview_8() {
  (document.getElementById("body_product").style.overflowY = "scroll"),
    (document.querySelector(".products_preview_8").style.width = "0%"),
    (document.querySelector(".products_preview_8").style.transition = "1s"),
    (document.querySelector(".nutrition_detail_8").style.opacity = "0"),
    (document.querySelector(".nutrition__border_8").style.display = "none"),
    (document.querySelector(".btn-8").style.display = "none"),
    (document.querySelector(".product_image_8").style.opacity = "0");
}

function showPreview_9() {
  (document.querySelector(".products_preview_9").style.width = "100%"),
    (document.querySelector(".products_preview_9").style.transition = "1s"),
    (document.querySelector(".products_preview_9").style.opacity = "1"),
    (document.querySelector(".nutrition_detail_9").style.opacity = "1"),
    (document.querySelector(".product_image_9").style.opacity = "1"),
    (document.querySelector(".products_preview_9").style.zIndex = "20"),
    (document.querySelector(".img_preview_9").style.opacity = "1"),
    (document.querySelector(".img_preview_9").style.width = "100%"),
    (document.querySelector(".nutrition__border_9").style.display = "block"),
    (document.querySelector(".btn-9").style.display = "flex"),
    (document.getElementById("body_product").style.overflowY = "hidden");
}
function hidePreview_9() {
  (document.getElementById("body_product").style.overflowY = "scroll"),
    (document.querySelector(".products_preview_9").style.width = "0%"),
    (document.querySelector(".products_preview_9").style.transition = "1s"),
    (document.querySelector(".nutrition_detail_9").style.opacity = "0"),
    (document.querySelector(".nutrition__border_9").style.display = "none"),
    (document.querySelector(".btn-9").style.display = "none"),
    (document.querySelector(".product_image_9").style.opacity = "0");
}

function showPreview_10() {
  (document.querySelector(".products_preview_10").style.width = "100%"),
    (document.querySelector(".products_preview_10").style.transition = "1s"),
    (document.querySelector(".products_preview_10").style.opacity = "1"),
    (document.querySelector(".nutrition_detail_10").style.opacity = "1"),
    (document.querySelector(".product_image_10").style.opacity = "1"),
    (document.querySelector(".products_preview_10").style.zIndex = "20"),
    (document.querySelector(".img_preview_10").style.opacity = "1"),
    (document.querySelector(".img_preview_10").style.width = "100%"),
    (document.querySelector(".nutrition__border_10").style.display = "block"),
    (document.querySelector(".btn-10").style.display = "flex"),
    (document.getElementById("body_product").style.overflowY = "hidden");
}
function hidePreview_10() {
  (document.getElementById("body_product").style.overflowY = "scroll"),
    (document.querySelector(".products_preview_10").style.width = "0%"),
    (document.querySelector(".products_preview_10").style.transition = "1s"),
    (document.querySelector(".nutrition_detail_10").style.opacity = "0"),
    (document.querySelector(".product_image_10").style.opacity = "0");
}

function showPreview_11() {
  (document.querySelector(".products_preview_11").style.width = "100%"),
    (document.querySelector(".products_preview_11").style.transition = "1s"),
    (document.querySelector(".products_preview_11").style.opacity = "1"),
    (document.querySelector(".nutrition_detail_11").style.opacity = "1"),
    (document.querySelector(".product_image_11").style.opacity = "1"),
    (document.querySelector(".products_preview_11").style.zIndex = "20"),
    (document.querySelector(".img_preview_11").style.opacity = "1"),
    (document.querySelector(".img_preview_11").style.width = "100%"),
    (document.querySelector(".nutrition__border_11").style.display = "block"),
    (document.querySelector(".btn-11").style.display = "flex"),
    (document.getElementById("body_product").style.overflowY = "hidden");
}
function hidePreview_11() {
  (document.getElementById("body_product").style.overflowY = "scroll"),
    (document.querySelector(".products_preview_11").style.width = "0%"),
    (document.querySelector(".products_preview_11").style.transition = "1s"),
    (document.querySelector(".nutrition_detail_11").style.opacity = "0"),
    (document.querySelector(".nutrition__border_11").style.display = "none"),
    (document.querySelector(".btn-11").style.display = "none"),
    (document.querySelector(".product_image_11").style.opacity = "0");
}

function showPreview_12() {
  (document.querySelector(".products_preview_12").style.width = "100%"),
    (document.querySelector(".products_preview_12").style.transition = "1s"),
    (document.querySelector(".products_preview_12").style.opacity = "1"),
    (document.querySelector(".nutrition_detail_12").style.opacity = "1"),
    (document.querySelector(".product_image_12").style.opacity = "1"),
    (document.querySelector(".products_preview_12").style.zIndex = "20"),
    (document.querySelector(".img_preview_12").style.opacity = "1"),
    (document.querySelector(".img_preview_12").style.width = "100%"),
    (document.querySelector(".nutrition__border_12").style.display = "block"),
    (document.querySelector(".btn-12").style.display = "flex"),
    (document.getElementById("body_product").style.overflowY = "hidden");
}
function hidePreview_12() {
  (document.getElementById("body_product").style.overflowY = "scroll"),
    (document.querySelector(".products_preview_12").style.width = "0%"),
    (document.querySelector(".products_preview_12").style.transition = "1s"),
    (document.querySelector(".nutrition_detail_12").style.opacity = "0"),
    (document.querySelector(".nutrition__border_12").style.display = "none"),
    (document.querySelector(".btn-12").style.display = "none"),
    (document.querySelector(".product_image_12").style.opacity = "0");
}

function showPreview_13() {
  (document.querySelector(".products_preview_13").style.width = "100%"),
    (document.querySelector(".products_preview_13").style.transition = "1s"),
    (document.querySelector(".products_preview_13").style.opacity = "1"),
    (document.querySelector(".nutrition_detail_13").style.opacity = "1"),
    (document.querySelector(".product_image_13").style.opacity = "1"),
    (document.querySelector(".products_preview_13").style.zIndex = "20"),
    (document.querySelector(".img_preview_13").style.opacity = "1"),
    (document.querySelector(".img_preview_13").style.width = "100%"),
    (document.querySelector(".nutrition__border_13").style.display = "block"),
    (document.querySelector(".btn-13").style.display = "flex"),
    (document.getElementById("body_product").style.overflowY = "hidden");
}
function hidePreview_13() {
  (document.getElementById("body_product").style.overflowY = "scroll"),
    (document.querySelector(".products_preview_13").style.width = "0%"),
    (document.querySelector(".products_preview_13").style.transition = "1s"),
    (document.querySelector(".nutrition_detail_13").style.opacity = "0"),
    (document.querySelector(".nutrition__border_13").style.display = "none"),
    (document.querySelector(".btn-13").style.display = "none"),
    (document.querySelector(".product_image_13").style.opacity = "0");
}

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
  if (event.keyCode == 123) {
    event.preventDefault();
  }
});
document.addEventListener("contextmenu", (event) => event.preventDefault());
