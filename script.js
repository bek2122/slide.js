const container = document.querySelector('.container'),
      sideBar =document.querySelector('.sidebar'),
      mainSlide = document.querySelector('.main-slide'),
      downBtn = document.querySelector('.down-button'),
      upBtn = document.querySelector('.up-button');
      slides = mainSlide.querySelectorAll('div');



      let activeSlide = 0;

      sideBar.style.top = `-${(slides.length - 1) * 100}vh`

      upBtn.addEventListener('click', () => {
        slideChange('up')
      })

      downBtn.addEventListener('click', () => {
        slideChange('down')
      })


      function slideChange(value) {
          if(value === 'up') {
              activeSlide++
              if(activeSlide == slides.length) {
                  activeSlide = 0
              }
          }else if(value === 'down') {
            activeSlide--
              if(activeSlide < 0) {
                  activeSlide = slides.length - 1;
              }
          }

        //   clientHeight - вычисляет видимую высоту у элемента

          let parentHeight = container.clientHeight;

          sideBar.style.transform = `translateY(${activeSlide * parentHeight}px)`;

          mainSlide.style.transform = `translateY(-${activeSlide * parentHeight}px)`;
      }



      