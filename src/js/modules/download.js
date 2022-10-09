export default class Download {
  constructor(treeggers) {
    this.btns = document.querySelectorAll(treeggers);
    this.path = 'assets/img/mainbg.jpg';
  }

  downloadItem(path) {
    const element = document.createElement('a');
    element.setAttribute('href', path);
    element.setAttribute('download', 'item');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  init() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.downloadItem(this.path);
      });
    });
  }

}