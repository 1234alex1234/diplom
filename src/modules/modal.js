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

  const closeHeaderModal = () => {

    headerModal.style.display = 'none';
    overlay.style.display = 'none';
  };

  button.addEventListener("click", openHeaderModal);
  headerModalClose.addEventListener("click", closeHeaderModal);

};

export default modalFunc;