import benefitsSwiperFunc from "./modules/benefits-swiper";
import smoothScrollFunc from "./modules/smoothScroll";
import modalFunc from "./modules/modal";
import regexFunc from "./modules/regex";
import serviceModalFunc from "./modules/service-modal";
import timerFunc from "./modules/timer";
import calcFunc from "./modules/calc";
import sendFormFunc from "./modules/sendForm";
import servicesSwiperFunc from "./modules/services-swiper";
import documentModalFunc from "./modules/documentModal";
import sendCommentsFunc from "./modules/sendComments";


modalFunc();
benefitsSwiperFunc();
serviceModalFunc();
timerFunc('26 march 2022');
regexFunc();
smoothScrollFunc();
calcFunc(200);
servicesSwiperFunc();
documentModalFunc();
sendCommentsFunc();
sendFormFunc({
  formClass: '.form-horizontal',
  someElem: [{
    type: 'input',
    id: 'calc-total',
  }]
});