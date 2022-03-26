const sendFormFunc = ({
  formClass,
  someElem = [],
}) => {
  const formHorizontals = document.querySelectorAll(formClass);
  const headerModal = document.querySelector('.header-modal');
  const callBackForm = headerModal.querySelector('form');
  const serviceModal = document.querySelector('.services-modal');
  const serviceModalForm = serviceModal.querySelector('form');
  const stutusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Данные успешно отправлены!';


  const validate = (lists) => {
    let isError = false;

    lists.forEach(list => {

      if (list.name === 'fio') {
        if (!/[^а-яА-Яa-zA-Z\/' ']/gi.test(list.value) && list.value !== '' && list.value.length > 5) {


        } else {
          isError = true;
        }
      }

      if (list.name === 'phone') {
        if (!/[^\d\/+]+/gi.test(list.value) && list.value !== '' && list.value.length > 3) {

        } else {
          isError = true;
        }
      }

    });

    return isError;
  };

  const clearStatus = () => {
    stutusBlock.textContent = '';
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

    stutusBlock.textContent = loadText;
    stutusBlock.style.color = 'black';
    this.append(stutusBlock);

    if (!validate(formElements)) {
      sendData(formBody).then(data => {
        formElements.forEach(input => {
          stutusBlock.textContent = successText;
          input.value = '';
          setTimeout(clearStatus, 2500);
        });
      }).catch(error => {
        stutusBlock.textContent = errorText;
        setTimeout(clearStatus, 2500);
      });
    } else {
      alert("Данные не валидны!");
    }
  }

  formHorizontals.forEach(formHorizontal => {
    formHorizontal.addEventListener("submit", submitForm);
  });

  callBackForm.addEventListener("submit", submitForm);
  serviceModalForm.addEventListener("submit", submitForm);
};

export default sendFormFunc;