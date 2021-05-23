class YTLoader {
  constructor(urlInput, loadButton, video) {
    this.urlInput = urlInput;
    this.loadButton = loadButton;
    this.video = video;

    this.loadURL = () => {
      // Get youtube ID directly
      if (this.urlInput.value && this.urlInput.value.length === 11) {
        const id = this.urlInput.value;
        this.video.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
      }

      // Or parse youtube link
      const regex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      const match = this.urlInput.value.match(regex);
      console.log(match[7]);
      if (match && match[7].length === 11) {
        const id = match[7];
        this.video.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
      }
    }

    this.loadButton.addEventListener('click', this.loadURL);
  }
}