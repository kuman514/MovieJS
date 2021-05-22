class App {
  constructor() {
    this.localVideo = document.querySelector('video');
    this.ytVideo = document.querySelector('iframe');

    // Mode manager
    this.modeManager = new ModeManager(
      document.getElementById('change-mode'),
      document.querySelector('.local-video-mode'),
      this.localVideo,
      document.querySelector('.youtube-mode'),
      this.ytVideo
    );

    // Local file loader
    this.fileLoader = new FileLoader(
      document.getElementById('load-file'),
      document.querySelector('video')
    );
    // Local loop control
    this.loopControl = new LoopButton(
      document.getElementById('repeat'),
      document.querySelector('video')
    );

    // YouTube URL reader

    // Common mirror
    this.mirror = new Mirror(
      document.getElementById('mirror-x'),
      document.getElementById('mirror-y'),
      document.querySelector('.video-area')
    );
  }
}

var app = null;
document.addEventListener('DOMContentLoaded', () => {
  app = new App;
});