var swiper = new Swiper(".featured__slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".swiper__button--next",
      prevEl: ".swiper__button--prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      450: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 3,
      },
      1024: {
          slidesPerView: 5,
      },
  },
});

function add() {
  alert("Added to cart successfully!");
}

function validateForm() {
  var email = document.getElementById("footer__email").value;

  if (email == null || email == "") {
      alert("Please enter your email");
  } else {
      alert("Thank you for subscribing!");
  }
}
