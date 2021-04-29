class Mirror {
  constructor(xElement, yElement, video) {
    this.x = xElement;
    this.y = yElement;
    this.video = video;

    this.scaleX = 1;
    this.scaleY = 1;

    this.x.addEventListener('click', () => {
      this.scaleX = -(this.scaleX);
      this.apply();
    });
    this.y.addEventListener('click', () => {
      this.scaleY = -(this.scaleY);
      this.apply();
    });
  }

  apply = () => {
    this.video.style.transform = `scaleX(${this.scaleX}) scaleY(${this.scaleY})`;
  }
}