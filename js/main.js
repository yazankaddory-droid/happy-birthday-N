document.addEventListener('DOMContentLoaded', () => {
  const minionWrap   = document.getElementById('minionWrap');
  const bubble        = document.getElementById('bubble');
  const bubbleClose   = document.getElementById('bubbleClose');
  const landing       = document.getElementById('landing');
  const selectScreen  = document.getElementById('selectScreen');
  const selectBox     = document.getElementById('selectBox');

  const modalOverlay  = document.getElementById('modalOverlay');
  const modalBox      = document.getElementById('modalBox');
  const modalClose    = document.getElementById('modalClose');
  const video          = document.getElementById('birthdayVideo');
  const playBtn        = document.getElementById('playBtn');
  const textPane        = document.getElementById('textPane');
  const textPaneInner   = document.getElementById('textPaneInner');

  // ---- pull content from config.js ----
  video.src = SITE_CONFIG.videoFile;
  selectBox.textContent = SITE_CONFIG.boxLabel;
  textPaneInner.textContent = SITE_CONFIG.message;

  // ---- landing intro: minion slides up, then bubble pops in ----
  requestAnimationFrame(() => {
    setTimeout(() => minionWrap.classList.add('in'), 150);
    setTimeout(() => bubble.classList.add('in'), 950);
  });

  // ---- closing the bubble sends the minion back down and reveals the picker ----
  bubbleClose.addEventListener('click', () => {
    bubble.classList.remove('in');
    minionWrap.classList.remove('in');

    setTimeout(() => {
      landing.classList.add('hidden');
      selectScreen.classList.remove('hidden');
      requestAnimationFrame(() => selectScreen.classList.add('in'));
    }, 850);
  });

  // ---- open the modal ----
  selectBox.addEventListener('click', () => {
    resetModal();
    modalOverlay.classList.add('show');
  });

  // ---- start playback: video slides left, box widens, text fades in ----
  playBtn.addEventListener('click', () => {
    video.play();
    playBtn.classList.add('hidden');
    modalBox.classList.add('expanded');
    setTimeout(() => textPane.classList.add('in'), 250);
  });

  // ---- close modal ----
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  function closeModal(){
    modalOverlay.classList.remove('show');
    video.pause();
  }

  function resetModal(){
    video.pause();
    video.currentTime = 0;
    modalBox.classList.remove('expanded');
    playBtn.classList.remove('hidden');
    textPane.classList.remove('in');
  }
});
