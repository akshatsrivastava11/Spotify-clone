

console.log("welcome to spotify")
//initialising variables

let songindex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let audioElement = new Audio("songs/1.mp3");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('song-item'));
let masterSongName =Array.from(document.getElementById('masterSongName'));

let songs = [
  { songName: "Fir se", filepath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Ur Turn now", filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
  { songName: "Checkbox", filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
  { songName: "Kismat", filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
  { songName: "Charkha", filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  { songName: "Osmaan", filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
  { songName: "Duniya", filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
  { songName: "Elephant", filepath: "songs/8.mp3", coverPath: "covers/8.jpg" },
  { songName: "Rabba Meher Kari", filepath: "songs/9.mp3", coverPath: "covers/9.jpg" },
  { songName: "Haa", filepath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]
songItems.forEach((element,i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//handle play/pause click
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  }
  else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
})
//listen to event
audioElement.addEventListener("timeupdate", () => {

  //update seekbar

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myProgressBar.value = progress;
})
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{

    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  })
  
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    
   
    songindex=parseInt(e.target.id)
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle")
     
    audioElement.src=`songs/${songindex+1}.mp3`;
    masterSongName.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  })
})
document.getElementById('next').addEventListener("click",()=>{
  if(songindex>=9){
    songindex=0;
  }
  else{
    songindex+=1;
  }

  audioElement.src=`songs/${songindex+1}.mp3`;
  audioElement.currentTime=0;
  audioElement.play();
  masterSongName.innerText=songs[songindex].songName;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
})
document.getElementById('previous').addEventListener("click",()=>{
  if(songindex<=0){
    songindex=0;
  }
  else{
    songindex-=1;
  }
    masterSongName.innerText=songs[songindex].songName;
  audioElement.src=`songs/${songindex+1}.mp3`;
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
})
