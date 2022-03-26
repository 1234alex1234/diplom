import {
  animate
} from './helpers';

const modalFunc = () => {

  const headerModal = document.querySelector('.header-modal');
  const callbackBtn = document.getElementById('callback');
  const button = document.querySelector('.button');
  const overlay = document.querySelector('.overlay');
  const headerModalClose = document.querySelector('.header-modal__close');

  const openHeaderModal = () => {

    headerModal.style.display = 'block';
    overlay.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';

    const documentWidth = document.documentElement.clientWidth;
    const popupContentWidth = headerModal.clientWidth;

    animate({
      duration: 400,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        headerModal.style.left = (documentWidth / 2) * progress + 'px';
      }
    });

  };

  const closeHeaderModal = (e) => {

    headerModal.style.display = 'none';
    overlay.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
  };

  button.addEventListener("click", openHeaderModal);
  headerModalClose.addEventListener("click", closeHeaderModal);
  overlay.addEventListener("click", closeHeaderModal);

};

export default modalFunc;