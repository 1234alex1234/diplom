import Swiper, {
  Navigation
} from 'swiper';

Swiper.use([Navigation]);

const benefitsSwiperFunc = () => {
  const benefitsInner = document.querySelector('.benefits-inner');
  const benefitsWrap = document.querySelector('.benefits-wrap');
  const benefitsItems = document.querySelectorAll('.benefits__item');

  benefitsInner.classList.add('swiper');
  benefitsInner.classList.add('swiper1');
  benefitsWrap.classList.add('swiper-wrapper');
  benefitsWrap.style.margin = '0px';
  benefitsItems.forEach(item => {
    item.classList.add('swiper-slide');
    item.style.maxWidth = 'none';
  });

  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    loop: true,
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