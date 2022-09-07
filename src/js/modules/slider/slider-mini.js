import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(container, next, prev, activeClass, animation, autoplay) {
    super(container, next, prev, activeClass, animation, autoplay);
  }

  decorizeSlides() {
    this.slides.forEach(slide => {
      slide.classList.remove(this.activeClass);
      if (this.animation) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    });

    if (!this.slides[0].closest('button')) {
      this.slides[0].classList.add(this.activeClass);
    }

    if (this.animation) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  nextSlide() {
    if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
      this.container.appendChild(this.slides[0]); // Слайд
      this.container.appendChild(this.slides[1]); // btn
      this.container.appendChild(this.slides[2]); // btn
      this.decorizeSlides();
    } else if (this.slides[1].tagName == "BUTTON") {
      this.container.appendChild(this.slides[0]); // Слайд
      this.container.appendChild(this.slides[1]); // btn
      this.decorizeSlides();
    } else {
      // перемещаем слайд в конец списка
      this.container.appendChild(this.slides[0]);
      this.decorizeSlides();
    }
  }

  bindTriggers() {
    this.next.addEventListener('click', () => this.nextSlide());

    this.prev.addEventListener('click', () => {
      // передираем слайды с конца
      for (let i = this.slides.length - 1; i > 0; i--) {
        if (this.slides[i].tagName !== 'BUTTON') {
          // последний слайд в списке
          let active = this.slides[i];
          // ставип последний слайд на первую позицию
          this.container.insertBefore(active, this.slides[0]);
          this.decorizeSlides();
          break;
        }
      }
    });
  }

  init() {
    this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      aling-items: flex-start;
    `;

    this.bindTriggers();
    this.decorizeSlides();

    if (this.autoplay) {
      setInterval(() => this.nextSlide(), 5000);
    }
  }
}