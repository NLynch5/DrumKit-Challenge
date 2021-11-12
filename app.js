//KEYS
const qKey = document.getElementById("qKey");
const wKey = document.getElementById("wKey");
const eKey = document.getElementById("eKey");
const rKey = document.getElementById("rKey");
const tKey = document.getElementById("tKey");
const yKey = document.getElementById("yKey");
const uKey = document.getElementById("uKey");
const ikey = document.getElementById("iKey");
const oKey = document.getElementById("oKey");

//SOUNDS
const tom = document.getElementById("tom");
const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const ride = document.getElementById("ride");

qKey.addEventListener("click", () => {
  tom.pause();
  tom.currentTime = 0;
  tom.play();
});

wKey.addEventListener("click", () => {
  boom.pause();
  boom.currentTime = 0;
  boom.play();
});

eKey.addEventListener("click", () => {
  clap.pause();
  clap.currentTime = 0;
  clap.play();
});

rKey.addEventListener("click", () => {
  hihat.pause();
  hihat.currentTime = 0;
  hihat.play();
});

tKey.addEventListener("click", () => {
  kick.pause();
  kick.currentTime = 0;
  kick.play();
});

yKey.addEventListener("click", () => {
  openhat.pause();
  openhat.currentTime = 0;
  openhat.play();
});

uKey.addEventListener("click", () => {
  snare.pause();
  snare.currentTime = 0;
  snare.play();
});

iKey.addEventListener("click", () => {
  tink.pause();
  tink.currentTime = 0;
  tink.play();
});

oKey.addEventListener("click", () => {
  ride.pause();
  ride.currentTime = 0;
  ride.play();
});

document.addEventListener("keypress", (event) => {
  if (event.key == "q") {
    tom.play();
  } else if (event.key == "w") {
    boom.play();
  } else if (event.key == "e") {
    clap.play();
  } else if (event.key == "r") {
    hihat.play();
  } else if (event.key == "t") {
    kick.play();
  } else if (event.key == "y") {
    openhat.play();
  } else if (event.key == "u") {
    snare.play();
  } else if (event.key == "i") {
    tink.play();
  } else if (event.key == "o") {
    ride.play();
  }
});
