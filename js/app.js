class App {
  constructor() {
    // Get a file loader
    this.fileLoader = new FileLoader(
      document.getElementById('load-file'),
      document.querySelector('video')
    );
    this.loopControl = new LoopButton(
      document.getElementById('repeat'),
      document.querySelector('video')
    );
    this.mirror = new Mirror(
      document.getElementById('mirror-x'),
      document.getElementById('mirror-y'),
      document.querySelector('video')
    );
  }
}

var app = null;
document.addEventListener('DOMContentLoaded', () => {
  app = new App;
});