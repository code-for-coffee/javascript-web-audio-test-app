# Javascript Web Audio API Test App

## https://web-audio-test.herokuapp.com/

Does your phone, tablet, or other handheld device support Javascript Web Audio? This site tells you!

#### Example

```js
try {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var context = new AudioContext();
} catch (ex) {
  // no support! oh no!
} finally {
  // awww yissss
  // http://imgur.com/gallery/zaCeu08
}
```


#### Run it yourself

* Node is required to run this server
* Clone this repository
* `npm install`
* `npm start`
* browse to `localhost:5000`
