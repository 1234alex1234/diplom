const calcFunc = (price = 200) => {
  if (document.querySelector('body').classList.contains('balkony')) {
    const calc = document.querySelector('#calc');
    const calcType = document.querySelector('#calc-type');
    const calcTypeMaterial = document.querySelector('#calc-type-material');
    const calcInput = document.querySelector('#calc-input');
    let calcTotal = document.querySelector('#calc-total');

    const countCalc = () => {
      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
      const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
      const calcInputValue = +calcInput.value;
      let totalValue = 0;

      if (calcTypeValue && calcInputValue && calcTypeMaterialValue) {
        totalValue = price * calcTypeValue * calcTypeMaterialValue * calcInputValue;
      } else if (calcType.value && calcInput.value) {
        totalValue = price * calcTypeValue * calcInputValue;
      } else {
        totalValue = 0;
      }

      calcTotal.value = totalValue;
    };

    calc.addEventListener("input", function (e) {

      if (e.target == calcType || e.target == calcTypeMaterial || e.target == calcInput) {
        countCalc();
      }
    });
  }
};

export default calcFunc;