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

    this.slides[0].classList.add(this.activeClass);
    if (this.animation) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  bindTriggers() {
    this.next.addEventListener('click', () => {
      // перемещаем слайд в конец списка
      this.container.appendChild(this.slides[0]);
      this.decorizeSlides();
    });

    this.prev.addEventListener('click', () => {
      // последний слайд в списке
      let active = this.slides[this.slides.length - 1];
      // ставип последний слайд на первую позицию
      this.container.insertBefore(active, this.slides[0]);
      this.decorizeSlides();
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
  }
}