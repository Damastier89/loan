import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(container, next, prev) {
    super(container, next, prev);
  }

  bindTriggers() {
    this.next.addEventListener('click', () => {
      // перемещаем слайд в конец списка
      this.container.appendChild(this.slides[0]);
    });

    this.prev.addEventListener('click', () => {
      // последний слайд в списке
      let active = this.slides[this.slides.length - 1];
      // ставип последний слайд на первую позицию
      this.container.insertBefore(active, this.slides[0]);
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
  }
}