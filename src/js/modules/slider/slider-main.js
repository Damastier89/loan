import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(page, btns) {
    super(page, btns);
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

    try {
      this.hanson.style.opacity = '0';

      if (n === 3) {
        this.hanson.classList.add('animated');
        setTimeout(() => {
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('slideInUp');
        }, 3000);
      } else {
        this.hanson.classList.remove('slideInUp')
      }
    } catch(error) { console.log(`${error}`) }
    
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
    try {
      this.hanson = document.querySelector('.hanson');
    } catch(error) { console.log(`${error}`) }
    
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