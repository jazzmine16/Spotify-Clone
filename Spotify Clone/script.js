

console.log("Welcome to spotify");

//Initializing the variables

let songIndex = 0;
let audioElement = new Audio("mp1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songs =[
    {songName:"Levitating", filePath:"songs/1.mp3", coverPath:"covers/1.jpeg"},
    {songName:"Alag Asaman", filePath:"songs/2.mp3", coverPath:"covers/2.jpeg"},
    {songName:"Bad Blood", filePath:"songs/3.mp3", coverPath:"covers/3.jpeg"},
    {songName:"Shape of you", filePath:"songs/4.mp3", coverPath:"covers/4.jpeg"},
    {songName:"Permika se", filePath:"songs/5.mp3", coverPath:"covers/5.jpeg"},
    {songName:"Perfect", filePath:"songs/6.mp3", coverPath:"covers/6.jpeg"},
    {songName:"kashmir", filePath:"songs/7.mp3", coverPath:"covers/7.jpeg"},
    {songName:"Hua Main", filePath:"songs/8.mp3", coverPath:"covers/8.jpeg"},
    {songName:"Pehle bhi main ", filePath:"songs/9.mp3", coverPath:"covers/9.jpeg"},
    {songName:"O Mahi O Mahi", filePath:"songs/10.mp3", coverPath:"covers/10.jpeg"},

]



// audioElement.play();

//handle Play/Pause

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;

    }

})


//Listen to events

audioElement.addEventListener("timeupdate" , () =>{

    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)

    myProgressbar.value = progress;

})

myProgressbar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration /100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");


    })
    
})

document.getElementsById('next').addEventListener('click' , () =>{
    if(songIndex>=9){
        songIndex = 0 
    }
    else{
    songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})

// for Pervious

document.getElementsById('previous').addEventListener('click' , () =>{
    if(songIndex<=0){
        songIndex = 0 
    }
    else{
    songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})