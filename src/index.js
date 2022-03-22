import benefitsSwiperFunc from "./modules/benefits-swiper";
import smoothScrollFunc from "./modules/smoothScroll";
import modalFunc from "./modules/modal";
import regexFunc from "./modules/regex";
import serviceModalFunc from "./modules/service-modal";
import timerFunc from "./modules/timer";
import calcFunc from "./modules/calc";
import sendFormFunc from "./modules/sendForm";


modalFunc();
benefitsSwiperFunc();
serviceModalFunc();
timerFunc('25 march 2022');
regexFunc();
smoothScrollFunc();
calcFunc(200);
sendFormFunc({
  formClass: '.form-horizontal',
  someElem: [{
    type: 'input',
    id: 'calc-total',
  }]
});