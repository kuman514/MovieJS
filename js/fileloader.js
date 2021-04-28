class FileLoader {
  constructor(element, video) {
    this.element = element;
    this.video = video;

    this.element.addEventListener('change', () => {
      const selected = URL.createObjectURL(this.element.files[0]);
      console.log(selected);
      this.video.src = selected;
    });
  }
}