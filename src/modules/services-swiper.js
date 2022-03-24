import Swiper, {
  Navigation
} from 'swiper';

Swiper.use([Navigation]);

const servicesSwiperFunc = () => {
  const services = document.querySelector('#services');
  const row = services.querySelector('.row');
  const rowItems = document.querySelectorAll('.col-md-12.col-lg-6');

  let div = document.createElement('div');
  div.className = 'swiper-wrapper';
  row.prepend(div);

  row.classList.add('swiper');
  row.classList.add('swiper2');

  rowItems.forEach(rowItem => {
    rowItem.classList.add('swiper-slide');
    div.append(rowItem);
  });

  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    loop: true,
    navigation: {
      nextEl: ".services__arrow--right",
      prevEl: ".services__arrow--left",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,

      },
    },
  });

};

export default servicesSwiperFunc;