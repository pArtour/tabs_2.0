window.addEventListener('DOMContentLoaded', function  () {
  'use strict'

  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');


  const hideTabContent = a => {
    for (let i = a ; i < tabContent.length ; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  const showTabContent = b => {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', event => {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  //Timer
  let deadline = '2020-06-22';

  const getRemainingTime = endtime => {

    let timeDiff = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((timeDiff / 1000) % 60),
        minutes = Math.floor((timeDiff / 1000 / 60) % 60),
        hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
        days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)));

    return {
      'total' : timeDiff,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
      'days': days
    }
  }
  const setTimer = (id, endtime) => {

    let timer = document.getElementById(id),
        timerHours = timer.querySelector('.hours'),
        timerMinutes = timer.querySelector('.minutes'),
        timerSeconds = timer.querySelector('.seconds'),
        timerDays = timer.querySelector('.days'),
        timeInterval = setInterval(updateClock, 1000);
    
    const addZero = num => {
      if (num < 10) {
        num = '0' + num;
      }
      return num;
    }

    function updateClock() {
      let t = getRemainingTime(endtime);
      timerHours.textContent = addZero(t.hours);
      timerMinutes.textContent = addZero(t.minutes);
      timerSeconds.textContent = addZero(t.seconds);
      timerDays.textContent = addZero(t.days);
      

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setTimer('timer', deadline);


});