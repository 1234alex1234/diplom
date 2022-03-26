import {
  animate
} from './helpers';

const serviceModalFunc = () => {
  const serviceButtons = document.querySelectorAll('.service-button');
  const overlay = document.querySelector('.overlay');
  const serviceModalClose = document.querySelector('.services-modal__close');
  const serviceModal = document.querySelector('.services-modal');

  function openServiceModal() {

    serviceModal.style.display = 'block';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';

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

  function closeServiceModal() {

    serviceModal.style.display = 'none';
    overlay.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
  };



  serviceButtons.forEach(serviceButton => {
    serviceButton.addEventListener("click", openServiceModal);
  });
  serviceModalClose.addEventListener("click", closeServiceModal);
  overlay.addEventListener("click", closeServiceModal);

};


export default serviceModalFunc;