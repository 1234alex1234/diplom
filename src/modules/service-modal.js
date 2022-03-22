import {
  animate
} from './helpers';

const serviceModalFunc = () => {
  const serviceButtons = document.querySelectorAll('.service-button');
  const overlay = document.querySelector('.overlay');
  const serviceModalClose = document.querySelector('.services-modal__close');
  const serviceModal = document.querySelector('.services-modal');

  const openServiceModal = () => {

    serviceModal.style.display = 'block';
    overlay.style.display = 'block';

    const documentWidth = document.documentElement.clientWidth;
    const popupContentWidth = serviceModal.clientWidth;

    animate({
      duration: 400,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        serviceModal.style.left = (documentWidth / 2) * progress + 'px';
      }
    });

  };

  const closeServiceModal = () => {

    serviceModal.style.display = 'none';
    overlay.style.display = 'none';
  };



  serviceButtons.forEach(serviceButton => {
    serviceButton.addEventListener("click", openServiceModal);
  });
  serviceModalClose.addEventListener("click", closeServiceModal);

};


export default serviceModalFunc;