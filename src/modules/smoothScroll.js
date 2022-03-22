const smoothScrollFunc = () => {
  const smoothScroll = document.querySelector('.smooth-scroll');
  const documentBody = document.querySelector('body');

  smoothScroll.style.opacity = 0;

  function scrollTo(el) {
    window.scroll({
      left: 0,
      top: el.offsetTop,
      behavior: 'smooth'
    });
  }

  window.addEventListener("scroll", function (e) {
    let windowScroll = window.pageYOffset;
    let headerHeight = document.querySelector('#header').clientHeight;

    if (windowScroll < headerHeight) {
      smoothScroll.style.opacity = 0;
    } else {
      smoothScroll.style.opacity = 1;
    }
  });

  smoothScroll.addEventListener("click", () => {
    scrollTo(documentBody);
  });
};

export default smoothScrollFunc;