const sendFormFunc = ({
  formClass,
  someElem = [],
}) => {
  const formHorizontals = document.querySelectorAll(formClass);

  const validate = (lists) => {
    let isError = false;

    lists.forEach(list => {

      if (list.name === 'fio') {
        if (!/[^а-яА-Яa-zA-Z\/' ']/gi.test(list.value) && list.value !== '') {

        } else {
          isError = true;
        }
      }

      if (list.name === 'phone') {
        if (!/[^\d\/+]+/gi.test(list.value) && list.value !== '') {

        } else {
          isError = true;
        }
      }

    });

    return isError;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
  };

  function submitForm(e) {

    e.preventDefault();

    const formElements = this.querySelectorAll('input');
    const formData = new FormData(this);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (document.querySelector('body').classList.contains('balkony')) {
      someElem.forEach(elem => {
        let element = document.getElementById(elem.id);

        if (elem.type === 'input') {
          formBody[elem.id] = element.value;
        }
      });
    }

    if (!validate(formElements)) {
      sendData(formBody).then(data => {
        formElements.forEach(input => {
          input.value = '';
        });
      }).catch(error => {
        console.log(errorMessage);
      });
    } else {
      alert("Данные не валидны!");
    }
  }

  formHorizontals.forEach(formHorizontal => {
    formHorizontal.addEventListener("submit", submitForm);
  });
};

export default sendFormFunc;