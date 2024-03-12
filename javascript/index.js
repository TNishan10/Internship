var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay: {
      delay: 9500,
      disableOnInteracton: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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

  function add(){
    alert("Added to cart Successfullyyy!")
  }

  function validateform() {
    var email = document.getElementById("email").value;

   
    if (email == null || email == "") {
        alert("Please enter you email");
    }
    else {
        alert("Thank you for subscription..!")
    }
}