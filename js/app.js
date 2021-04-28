class App {
  constructor() {
    // Get a file loader
    this.fileLoader = new FileLoader(
      document.getElementById('load-file'),
      document.querySelector('video')
    );
  }
}

var app = null;
document.addEventListener('DOMContentLoaded', () => {
  app = new App;
});