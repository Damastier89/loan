export default class Slider {
  /**
   * Класс создающий слайдер
   * @param {string} page страница слайда
   * @param {string} btns кнопка переключения
   */
  constructor(page, btns){
      this.page = document.querySelector(page);
      this.slides = this.page.children;
      this.btns = document.querySelectorAll(btns);
      this.slideIndex = 1;
  }

  /**
   * @param {string} direction Направление слайдера
   */
  showSlides(n) {
    // Если direction бьльше колличества слайдов то, возвращаемся на первый this.slideIndex = 1;
    // Пограничные значения
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    // Пограничные значения
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    // 1 Скрываем остальные слайды
    this.slides.forEach(slide => {
      slide.style.display = 'none';
    });
    // 2 Показываем первый слайд
    this.slides[this.slideIndex - 1].style.display = 'block';
    this.slides[this.slideIndex - 1].classList.add('animated','fadeIn' );
  }

  /**
   * @param {string} direction переключае слайдер на следюющий элемент
   */
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  render() {
    this.btns.forEach(item => {
      item.addEventListener('click', () => {
        this.plusSlides(1);
      });

      // Возвращаем слайдер в исходное состояние при нажатии на логотип
      item.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    this.showSlides(this.slideIndex);
  }
}