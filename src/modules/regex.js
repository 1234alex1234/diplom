const regexFunc = () => {

  const formsHorizontal = document.querySelectorAll('.form-horizontal');
  const formsControl = document.querySelectorAll('.form-control');

  formsHorizontal.forEach(formHorizontal => {
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
};

export default regexFunc;