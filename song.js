
const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".play_area .image img"),
musicName = wrapper.querySelector(".songdisplay .songname"),
musicArtist = wrapper.querySelector(".songdisplay .songartist");
playPauseBtn = wrapper.querySelector(".play_pause"),
mainAudio = wrapper.querySelector("#main-audio"),
prevbtn = wrapper.querySelector("#prev"),
nextbtn = wrapper.querySelector("#next"),
progressArea = wrapper.querySelector(".pro");
progressBar = wrapper.querySelector(".progress_bar");
repeat = wrapper.querySelector(".lpback");
shuffle = wrapper.querySelector(".shufback");




let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;

repeat.addEventListener("click",()=>{

  repeat.classList.remove("normal");
  if(repeat.classList.contains("looped")){
    
    repeat.classList.add("notlooped");
    repeat.classList.remove("looped");
    

  }else{
    repeat.classList.add("looped");
    repeat.classList.remove("notlooped");
  }
  
 

});
shuffle.addEventListener("click",()=>{

  shuffle.classList.remove("normal");
  if(shuffle.classList.contains("shuffled")){
    
    shuffle.classList.add("notshuffled");
    shuffle.classList.remove("shuffled");

  }else{
    shuffle.classList.add("shuffled");
    shuffle.classList.remove("notshuffled");
  }
  
 

});
mainAudio.addEventListener("ended",()=>{

  if(repeat.classList.contains("normal") && shuffle.classList.contains("normal")){
    nextMusic();
    playingSong();
    
}

    if(repeat.classList.contains("looped")){
         mainAudio.currentTime = 0;
         loadMusic(musicIndex);
         playMusic();
         
         
    }
    if(repeat.classList.contains("notlooped")){
        nextMusic();
        
        playingSong();
         
    }
    if(shuffle.classList.contains("shuffled")){
      
      musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
      loadMusic(musicIndex);
      playMusic();
      playingSong();
    }
    if(shuffle.classList.contains("notshuffled")){
      
      nextMusic();
      playingSong();

    }
    
   
});

window.addEventListener("load", ()=>{

    loadMusic(musicIndex);
    playingSong();

    
});

function loadMusic(indexNumb) {
    
    musicName.innerText = allMusic[indexNumb-1].name +"      |";
    musicArtist.innerText = allMusic[indexNumb-1].artist;
    musicImg.src = `images/${allMusic[indexNumb-1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb-1].src}.mp3`;
}
function playMusic(){
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    mainAudio.play();
    playingSong();
  }
  //pause music function
  function pauseMusic(){
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
        
  }
  function nextMusic(){

    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
  }
  function prevMusic(){

    musicIndex--;
    musicIndex < 1  ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
  }


  playPauseBtn.addEventListener("click",()=>{

    const isMusicPlay = wrapper.classList.contains("paused");
    isMusicPlay ? pauseMusic() : playMusic();

  });
  prevbtn.addEventListener("click",()=>{
      
    prevMusic();
    playingSong();
  });
  nextbtn.addEventListener("click",()=>{


     nextMusic();
     playingSong();
  });
  
  mainAudio.addEventListener("timeupdate", (e)=>{

    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    


      let musicCurrentTime = wrapper.querySelector(".current"),
       musicDuration = wrapper.querySelector(".duration");

       mainAudio.addEventListener("loadeddata", ()=>{
       let audioDuration = mainAudio.duration;
       let totalMin = Math.floor(audioDuration / 60);
       let totalSec = Math.floor(audioDuration % 60);

       if(totalSec < 10){
         totalSec = `0${totalSec}`
       }
       musicDuration.innerText = `${totalMin}:${totalSec}`;


      });

       let currentMin = Math.floor(currentTime / 60);
       let currentSec = Math.floor(currentTime % 60);

       if(currentSec < 10){
        currentSec = `0${currentSec}`
       }
       musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
    

  });
  progressArea.addEventListener("click" ,(e) =>{


    let progressWidth = progressArea.clientWidth; //getting width of progress bar
    let clickedOffsetX = e.offsetX; //getting offset x value
    let songDuration = mainAudio.duration; //getting song total duration
    
    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic(); //calling playMusic function
    playingSong();
  
  
    });
    

   
    const ulTag = wrapper.querySelector(".mnbody ul ");
    for (let i = 0; i <= allMusic.length; i++) {
    let liTag  = `<li li-index="${i +1 }">
   <span>${allMusic[i].name}</span>
   <p>${allMusic[i].artist}</p>

   <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
   <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
   </li>`;

   
     ulTag.insertAdjacentHTML("beforeend", liTag);  
     
     let liAudioDuartionTag = ulTag.querySelector(`#${allMusic[i].src}`);
   let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);
   liAudioTag.addEventListener("loadeddata", ()=>{
    let duration = liAudioTag.duration;
    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);
    if(totalSec < 10){ //if sec is less than 10 then add 0 before it
      totalSec = `0${totalSec}`;
    };
    liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`; //passing total duation of song
    liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`); //adding t-duration attribute with total duration value
   });
   }
   
   function playingSong(){
    const allLiTag = ulTag.querySelectorAll("li");
    
    for (let j = 0; j < allLiTag.length; j++) {
      let audioTag = allLiTag[j].querySelector(".audio-duration");
      
      if(allLiTag[j].classList.contains("playing")){
       allLiTag[j].classList.remove("playing");
       let adDuration = audioTag.getAttribute("t-duration");
       audioTag.innerText = adDuration;
     }
      if(allLiTag[j].getAttribute("li-index") == musicIndex){
        allLiTag[j].classList.add("playing");
        audioTag.innerText = "Playing";
      }
      allLiTag[j].setAttribute("onclick", "clicked(this)");
    }
   };
     
  
   function clicked(element){
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex; //updating current song index with clicked li index
    loadMusic(musicIndex);
    playMusic();
    playingSong();
   
  }

