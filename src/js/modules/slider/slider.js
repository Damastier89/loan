export default class Slider {
  /**
   * Класс создающий слайдер
   * @param {string} container страница слайда
   * @param {string} btns кнопка переключения
   */
  // Используем диструктуризацию в конструкторе
  constructor({
    container = null, 
    btns = null, 
    next = null, 
    prev = null,
    activeClass = '',
    animation,
    autoplay,
  } = {}
  ){
    this.container = document.querySelector(container);
    this.slides = this.container.children;
    this.btns = document.querySelectorAll(btns);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animation = animation;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}