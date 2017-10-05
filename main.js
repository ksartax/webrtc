// function hasUserMedia()
// {
//   return navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
// }
//
// if (hasUserMedia())
// {
//   navigator.getUserMedia = hasUserMedia();
//   navigator.getUserMedia({ video: true, audio: true }, function (stream) {
//     var video = document.querySelector('video');
//     video.src = window.URL.createObjectURL(stream);
//   }, function (err) {
//     console.log(err);
//   })
// } else {
//   alert('Not Suport');
// }
