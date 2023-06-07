const img = document.getElementById("nav_burger");
const sound = document.getElementById("sound");

img.addEventListener( "mouseenter", () => {
    sound.currentTime = 0;
    sound.play();
})

const imagen = document.getElementById("unhealthy");
const sound2= document.getElementById("sound2");

imagen.addEventListener( "mouseenter", () => {
    sound2.currentTime = 0;
    sound2.play();
})