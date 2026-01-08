const audio = document.getElementById("audio");
const video = document.getElementById("video");

audio.addEventListener("timeupdate", () => {
  audioTime.innerText = Math.floor(audio.currentTime);
});

video.addEventListener("timeupdate", () => {
  videoTime.innerText = Math.floor(video.currentTime);
});
