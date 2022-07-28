export default class Slider {
  constructor(page, btns) {
    this.page = document.querySelector(page);
    this.btns = document.querySelectorAll(btns);
    this.slides = this.page.children;
  }
}