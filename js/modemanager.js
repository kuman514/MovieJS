class ModeManager {
  constructor(changeBtn, localPanel, localVideo, ytPanel, ytVideo) {
    // mode status
    this.mode = 'local';
    this.changeBtn = changeBtn;

    // local elements
    this.localPanel = localPanel;
    this.localVideo = localVideo;

    // youtube elements
    this.ytPanel = ytPanel;
    this.ytVideo = ytVideo;
    this.stopAndReload = () => {
      this.ytVideo.src = this.ytVideo.src.split('?')[0];
    };

    this.changeBtn.addEventListener('click', () => {
      switch (this.mode) {
        case 'local':
          // convert local -> youtube
          this.localVideo.pause();
          this.localPanel.classList.add('hidden');
          this.localVideo.classList.add('hidden');
          this.ytPanel.classList.remove('hidden');
          this.ytVideo.classList.remove('hidden');
          this.changeBtn.textContent = '';
          this.changeBtn.appendChild(document.createTextNode('로컬 모드로 전환'));
          this.mode = 'youtube';
          break;
        case 'youtube':
          // convert youtube -> local
          this.stopAndReload();
          this.ytPanel.classList.add('hidden');
          this.ytVideo.classList.add('hidden');
          this.localPanel.classList.remove('hidden');
          this.localVideo.classList.remove('hidden');
          this.changeBtn.textContent = '';
          this.changeBtn.appendChild(document.createTextNode('유튜브 모드로 전환'));
          this.mode = 'local';
          break;
      }
    });
  }
}