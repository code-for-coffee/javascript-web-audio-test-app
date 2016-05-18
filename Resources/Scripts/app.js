
// webAudio module
var webAudio = webAudio || {};
webAudio.context;
webAudio.initialize = function webAudioInitialize() {
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    webAudio.context = new AudioContext();
  } catch (ex) {
    webAudio.renderSupportFragment(false);
  } finally {
    webAudio.renderSupportFragment(true);
  }
};
webAudio.renderSupportFragment = function webAudioRenderSupportFragment(statusBool) {
  var fragment = document.createElement('article'),
    body = document.querySelector('body'),
    messageView;
  if (statusBool != false) {
    messageView = document.createElement('h3');
    messageView.innerText = 'Web Audio API is supported on this device.';
  } else {
    messageView = document.createElement('h3');
    messageView.innerText = 'Web Audio API is NOT supported on this device. :(';
  }
  fragment.appendChild(messageView);
  body.appendChild(fragment);
}
window.addEventListener('load', webAudio.initialize, false);
//end webAudio module
