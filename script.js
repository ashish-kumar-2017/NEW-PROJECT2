// how to see whether js is working or not? console?
console.log("welcome to spotify");

// why are we initialising variables?
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
// how to bring id for differnt things to work over that
let masterPlay=document.getElementById('masterPlay');
// what does it meann by master play ? is it a icon?
let myProgressbar=document.getElementById('myProgressbar');
// to add gif
let gif=document.getElementById('gif');
// what to do for song items?
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');
// step3 
// just make a list of songs
let songs=[
    // {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ishq Mubarak", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Chhod diya", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    // {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    // {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    // {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    // {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    // {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

// change in songitemlist
songItems.forEach((element,i)=> {
    // console.log(element,i);
    // element.getElementsByTagName("img")[0].src = songs[i].filePath;
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});
// how to add audio
// let audioElement=new Audio('1.mp3');
// audioElement.play();
// handle play and puase click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        // add gif also
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        // but it is taking too much time so make less time to diapper and apper?
    }

})
// Listen to Events
// myProgressbar.addEventListener('timeupdate',()=>{

//    console.log('timeupdate');
// })
// above wrong since we do not need to update time in myprogressbar
// since it is an even of audio
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update seekbar
    // what does it mean by seek bar?
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log('progress');
    // console.log(progress);
    // it should so on my progreebar?
    myProgressbar.value=progress;

 })

//  now i have to do is when progress bar change audio should also changes?humanly?
myProgressbar.addEventListener('change' ,()=>{
    // make below formula
    audioElement.currentTime=myProgressbar.value*audioElement.duration/100;
})


//now mine work is too add click listener to all songs shown on the desktop?now tell me how can you do that?
//step1-actually we want the button to work so first identify where code for that
//will be written?

//and then we need to give functionality to that button in js
//so need to give that a name so that can call?
const makeAllPlays=()=>{

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.classList.remove('fa-pause-circle');
     element.classList.add('fa-play-circle');
      })

}
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//   element.addEventListener('click',(e)=>{
//     console.log(e.target);
//     // all should be puased if one played
//     makeAllPlays();
//     e.target.classList.add('fa-pause-circle');
//    })
// })

// now after clicking song should be played?
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//       console.log(e.target);
//       // all should be puased if one played
//       makeAllPlays();
//       element.classList.remove('fa-play-circle');
//       e.target.classList.add('fa-pause-circle');
//       audioElement.src='songs/1.mp3';
//       audioElement.currentTime=0;
//       audioElement.play();
//       //make also for which song play?
//      })
//   })

  //make also for which song play?
  //first give id to all songs - to 4
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    //   console.log(e.target);
      // all should be puased if one played
      makeAllPlays();
    //   index = parseInt(e.target.id);
      songIndex = parseInt(e.target.id);
      element.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
    //   audioElement.src = `songs/${index + 1}.mp3`;
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText=songs[songIndex].songName;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity=1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      //make also for which song play?
     })
 })

 //now how to work for next and previous button with aboove things?

 document.getElementById('next').addEventListener('click',()=>{
     if(songIndex>=5){
     songIndex=0;
     }else{
       songIndex+=1;
     }
     audioElement.src = `songs/${songIndex + 1}.mp3`;
     masterSongName.innerText=songs[songIndex].songName;
     audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity=1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
 })

 //also add opacity
//  below should show current song names
 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
     songIndex=0;
    }else{
     songIndex-=1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })


