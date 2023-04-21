$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 500,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/next-arrow.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      },
    ]
  });
});

function tabs() {
  const triggers = document.querySelectorAll('.catalog__tab'),
        content = document.querySelectorAll('.catalog__content')

  triggers.forEach((btn, i) => btn.addEventListener('click', () => {

    triggers.forEach(item => item.classList.remove('catalog__tab_active'))
    btn.classList.add('catalog__tab_active')

    content.forEach(item => item.classList.remove('catalog__content_active'))
    content[i].classList.add('catalog__content_active')
  }))

  content.forEach(item => item.addEventListener('click', e => {
    const target = e.target
    if (target.classList.contains('catalog-item__link')) {
      target.parentElement.classList.remove('catalog-item__content_active')
      target.parentElement.nextElementSibling.classList.add('catalog-item__list_active')
    }
    if (target.classList.contains('catalog-item__back')) {
      target.parentElement.classList.remove('catalog-item__list_active')
      target.parentElement.previousElementSibling.classList.add('catalog-item__content_active')
    }
  }))
}

tabs()