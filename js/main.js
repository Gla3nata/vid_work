const swiper = new Swiper('.swiper', {

    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }

  });


  let bullets = document.querySelectorAll('.swiper-pagination-bullet');
  let slideActive = document.querySelectorAll(".swiper-slide-active")

  bullets.forEach((element) => element.onclick= function() {
    console.log(slideActive);
  });
