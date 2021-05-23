class YTLoader {
  constructor(urlInput, loadButton, video) {
    this.urlInput = urlInput;
    this.loadButton = loadButton;
    this.video = video;

    this.loadURL = (id) => {
      this.video.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    this.parseURL = (getURL) => {
      // Get youtube ID directly
      if (getURL && getURL.length === 11) {
        this.loadURL(getURL);
      }

      // Or parse youtube link
      const regex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      const match = getURL.match(regex);
      if (match && match[7] && match[7].length === 11) {
        this.loadURL(match[7]);
      }
    }

    this.loadButton.addEventListener('click', () => {
      this.parseURL(this.urlInput.value);
    });
  }
}