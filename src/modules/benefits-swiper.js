import Swiper, {
  Navigation
} from 'swiper';

Swiper.use([Navigation]);

const benefitsSwiperFunc = () => {
  const benefitsInner = document.querySelector('.benefits-inner');
  const benefitsWrap = document.querySelector('.benefits-wrap');
  const benefitsItems = document.querySelectorAll('.benefits__item');

  benefitsInner.classList.add('swiper');
  benefitsWrap.classList.add('swiper-wrapper');
  benefitsWrap.style.margin = '0px';
  benefitsItems.forEach(item => {
    item.classList.add('swiper-slide');
    item.style.maxWidth = 'none';
  });

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".benefits__arrow--right",
      prevEl: ".benefits__arrow--left",
    },
    breakpoints: {
      576: {
        slidesPerView: 3,

      },
    },
  });

};

export default benefitsSwiperFunc;