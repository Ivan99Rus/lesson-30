const toglePopUp = () => {
  const popup = document.querySelector('.popup'),
    popupBtns = document.querySelectorAll('.popup-btn');

  const fadeIn = (el, time) => {
    el.style.opacity = 0;
    el.style.display = 'block';

    let last = +new Date();
    let tick = () => {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();

      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  };

  const fadeOut = (el, time) => {
    el.style.opacity = 1;
    
    let last = +new Date();
    let tick = () => {
      el.style.opacity = +el.style.opacity - (new Date() - last) / time;
      last = +new Date();
      
      if (+el.style.opacity > 0) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      } else {
        el.style.display = 'none';
      }
    };
    tick();
  };
  
  popupBtns.forEach((elem) => {
    elem.addEventListener('click', () => {
      fadeIn(popup, 350);
    });
  });
  
  popup.addEventListener('click', (event) => {
    let target = event.target;
    
    if (target.classList.contains('popup-close')) {
      fadeOut(popup, 350);
    } else {
      target = target.closest('.popup-content');
      
      if (!target) {
        fadeOut(popup, 350);
      }
    }
  });
};

export default toglePopUp;