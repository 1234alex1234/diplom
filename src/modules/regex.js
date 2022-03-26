const regexFunc = () => {

  const formsHorizontal = document.querySelectorAll('.form-horizontal');
  const headerModal = document.querySelector('.header-modal');
  const callBackForm = headerModal.querySelector('form');
  const formsControl = document.querySelectorAll('.form-control');
  const serviceModal = document.querySelector('.services-modal');
  const serviceModalForm = serviceModal.querySelector('form');

  formsHorizontal.forEach(formHorizontal => {

    formHorizontal.addEventListener("input", function (e) {

      formsControl.forEach(formControl => {

        if (e.target.name == 'phone') {
          e.target.value = e.target.value.replace(/[^\d\/+]+/gi, "");
          e.target.setAttribute('maxlength', 16);
        }

        if (e.target.name == 'fio') {
          e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z\/' ']/gi, "");
        }

      });
    });
  });

  callBackForm.addEventListener("input", function (e) {

    if (e.target.name == 'phone') {
      e.target.value = e.target.value.replace(/[^\d\/+]+/gi, "");
      e.target.setAttribute('maxlength', 16);
    }

    if (e.target.name == 'fio') {
      e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z\/' ']/gi, "");
    }

  });

  serviceModalForm.addEventListener("input", function (e) {

    if (e.target.name == 'phone') {
      e.target.value = e.target.value.replace(/[^\d\/+]+/gi, "");
      e.target.setAttribute('maxlength', 16);
    }

    if (e.target.name == 'fio') {
      e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z\/' ']/gi, "");
    }

  });

};

export default regexFunc;