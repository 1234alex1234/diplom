const timerFunc = (deadLine) => {

  const timerHours = document.querySelectorAll('.count_2');
  const timerMinutes = document.querySelectorAll('.count_3');
  const timerSeconds = document.querySelectorAll('.count_4');
  let timerDays = document.querySelectorAll('.count_1');

  const getTimeRemaining = () => {
    let dateStop = new Date(deadLine).getTime();
    let nowDate = new Date().getTime();
    let timeRemaining = (dateStop - nowDate) / 1000;

    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor(timeRemaining / 60 / 60) % 24;
    let minutes = Math.floor(timeRemaining / 60) % 60;
    let seconds = Math.floor(timeRemaining) % 60;

    return {
      timeRemaining: timeRemaining,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  const noneZero = (number) => {
    if (number < 10) {
      return '0' + number;
    } else {
      return number;
    }
  };

  const upDateClock = () => {
    let getTime = getTimeRemaining('25 march 2022');

    timerDays.forEach(timerDay => {
      timerDay.textContent = noneZero(getTime.days);
      timerDay.style.fontSize = '24px';
      timerDay.style.lineHeight = '60px';
    });

    timerHours.forEach(timerHour => {
      timerHour.textContent = noneZero(getTime.hours);
      timerHour.style.fontSize = '24px';
      timerHour.style.lineHeight = '60px';
    });

    timerMinutes.forEach(timerMinute => {
      timerMinute.textContent = noneZero(getTime.minutes);
      timerMinute.style.fontSize = '24px';
      timerMinute.style.lineHeight = '60px';
    });

    timerSeconds.forEach(timerSecond => {
      timerSecond.textContent = noneZero(getTime.seconds);
      timerSecond.style.fontSize = '24px';
      timerSecond.style.lineHeight = '60px';
    });
  };

  let getTime = getTimeRemaining();
  if (getTime.timeRemaining > 0) {
    setInterval(upDateClock, 1000);
  } else {
    timerDays.textContent = '00';
    timerHours.textContent = '00';
    timerMinutes.textContent = '00';
    timerSeconds.textContent = '00';
  }
};

export default timerFunc;