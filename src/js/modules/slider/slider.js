export default class Slider {
  /**
   * Класс создающий слайдер
   * @param {string} page страница слайда
   * @param {string} btns кнопка переключения
   */
  // Используем диструктуризацию в конструкторе
  constructor({page = '', btns = '', next = '', prev = ''} = {}){
      this.page = document.querySelector(page);
      this.slides = this.page.children;
      this.btns = document.querySelectorAll(btns);
      this.slideIndex = 1;
  }
}