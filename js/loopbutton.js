class LoopButton {
  constructor(element, video) {
    this.element = element;
    this.video = video;
    this.isLoop = false;

    this.element.addEventListener('click', () => {
      switch (this.isLoop) {
        case true:
          this.element.textContent = '';
          this.element.appendChild(document.createTextNode('반복 재생'));
          this.isLoop = false;
          break;
        case false:
          this.element.textContent = '';
          this.element.appendChild(document.createTextNode('반복 재생 중지'));
          this.isLoop = true;
          break;
      }
      this.video.loop = this.isLoop;
    });
  }
}