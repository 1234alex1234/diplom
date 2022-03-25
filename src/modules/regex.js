const regexFunc = () => {

  const formsHorizontal = document.querySelectorAll('.form-horizontal');
  const headerModal = document.querySelector('.header-modal');
  const callBackForm = headerModal.querySelector('form');
  const formsControl = document.querySelectorAll('.form-control');

  formsHorizontal.forEach(formHorizontal => {

    const inputs = formHorizontal.querySelectorAll('input');

    inputs.forEach(input => {

      if (input.name == 'phone') {
        input.setAttribute('maxlength', 16);
      }

    });

    formHorizontal.addEventListener("input", function (e) {

      formsControl.forEach(formControl => {

        if (e.target.name == 'phone') {
          e.target.value = e.target.value.replace(/[^\d\/+]+/gi, "");
        }

        if (e.target.name == 'fio') {
          e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z\/' ']/gi, "");
        }

      });
    });
  });

  callBackForm.addEventListener("input", function (e) {

    const inputs = callBackForm.querySelectorAll('input');

    inputs.forEach(input => {

      if (input.name == 'phone') {
        input.setAttribute('maxlength', 16);
      }

    });

    if (e.target.name == 'phone') {
      e.target.value = e.target.value.replace(/[^\d\/+]+/gi, "");
    }

    if (e.target.name == 'fio') {
      e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z\/' ']/gi, "");
    }

  });
};

export default regexFunc;