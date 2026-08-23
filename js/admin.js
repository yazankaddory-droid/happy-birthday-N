document.addEventListener('DOMContentLoaded', () => {
  const PASSWORD = "Ak@11ory";

  const gate      = document.getElementById('gate');
  const panel     = document.getElementById('panel');
  const pwInput   = document.getElementById('pwInput');
  const pwSubmit  = document.getElementById('pwSubmit');
  const pwError   = document.getElementById('pwError');

  const videoFolder = document.getElementById('videoFolder');
  const videoName    = document.getElementById('videoName');
  const boxLabel      = document.getElementById('boxLabel');
  const scriptText    = document.getElementById('scriptText');

  const generateBtn = document.getElementById('generateBtn');
  const outputWrap    = document.getElementById('outputWrap');
  const output          = document.getElementById('output');
  const copyBtn          = document.getElementById('copyBtn');
  const copyNote          = document.getElementById('copyNote');

  // prefill the form with whatever config.js currently has
  if (typeof SITE_CONFIG !== 'undefined') {
    const parts = SITE_CONFIG.videoFile.split('/');
    videoName.value = parts.pop();
    videoFolder.value = parts.length ? parts.join('/') + '/' : '';
    boxLabel.value = SITE_CONFIG.boxLabel;
    scriptText.value = SITE_CONFIG.message;
  }

  function unlock(){
    if (pwInput.value === PASSWORD) {
      gate.classList.add('hidden');
      panel.classList.remove('hidden');
    } else {
      pwError.classList.remove('hidden');
    }
  }

  pwSubmit.addEventListener('click', unlock);
  pwInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') unlock(); });

  // escape characters that would break a JS template literal
  function escapeForTemplate(str){
    return str
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$\{/g, '\\${');
  }
  function escapeForString(str){
    return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  }

  generateBtn.addEventListener('click', () => {
    const folder = videoFolder.value.trim().replace(/\/?$/, '/');
    const name = videoName.value.trim();
    const videoPath = (folder === '/' ? '' : folder) + name;

    const code =
`const SITE_CONFIG = {
  videoFile: "${escapeForString(videoPath)}",
  boxLabel: "${escapeForString(boxLabel.value.trim())}",
  message: \`${escapeForTemplate(scriptText.value)}\`
};`;

    output.textContent = code;
    outputWrap.classList.remove('hidden');
    copyNote.textContent = '';
  });

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(output.textContent);
      copyNote.textContent = 'Copied! Paste it into js/config.js.';
    } catch (err) {
      copyNote.textContent = 'Could not copy automatically — select the text above and copy it manually.';
    }
  });
});
