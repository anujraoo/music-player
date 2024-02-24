const music = document.querySelector("audio");
const play = document.querySelector("#play");
const img = document.querySelector("img");
const artist = document.querySelector("#artist");
const title = document.querySelector("#title");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let progress = document.querySelector("#progress");


const songs = [
    {
    musicName : "music 1.mp3",
    title : "Despacito",
    artist :"Luis Fonsi",
    image : "img 1.png",
    },
    {
    musicName : "music 2.mp3",
    title : "Shape of you",
    artist :"Ed Sheeran",
    image : "img 2.png",
    },
    {
    musicName : "music 3.mp3",
    title : "Elevated",
    artist :"shubh",
    image : "img 3.jpg",
    },
    {
    musicName : "music 4.mp3",
    title : "faded",
    artist :"Alan Walker",
    image : "img 4.png",
    },
]

let isPlaying = false;

// for play function

const playMusic = ()=>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
};

// for pause function

const pauseMusic= ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click",()=>{
    isPlaying ? pauseMusic() : playMusic();
});

//chnage music data

const loadSong = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `music/${songs.musicName}`;
    img.src=`images/${songs.image}`;

};

songIndex = 0;

const nextSong = ()=>{
    songIndex = (songIndex+1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = ()=>{
    songIndex = (songIndex-1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

loadSong(songs[0]);

// progress bar control

music.onloadedmetadata = function(){
    progress.max = music.duration;
    progress.value = music.currentTime;
}

setInterval(() => {
    progress.value = music.currentTime;
}, 500);

progress.onchange = function(){
    music.currentTime = progress.value;
}

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);


