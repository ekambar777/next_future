//inital veriables
let songindex = 0
let audioElement= new Audio('songs/1.mp3')
let  masterplay = document.getElementById('masterplay')
let  myProrgressBar = document.getElementById('myProrgressBar')
let pause1 = document.getElementById('pause1')
let play1 = document.getElementById('play1')
let name_of_song =Array.from(document.getElementsByClassName('name_of_song'))
let songItem = Array.from(document.getElementsByClassName('songItem'))
let w = document.documentElement.clientWidth || window.innerWidth;

let songs = [
  {song_name:'song1', song_path:'songs/1.mp3'},
  {song_name:'song2', song_path:'songs/2.mp3'},
  {song_name:'song3', song_path:'songs/3.mp3'},
  {song_name:'song4', song_path:'songs/4.mp3'},
  {song_name:'song5', song_path:'songs/5.mp3'},
  {song_name:'song6', song_path:'songs/6.mp3'},
  {song_name:'song7', song_path:'songs/7.mp3'},
  {song_name:'song8', song_path:'songs/8.mp3'},
  {song_name:'song9', song_path:'songs/9.mp3'},
  {song_name:'song10', song_path:'songs/10.mp3'},
  {song_name:'song11', song_path:'songs/11.mp3'},
  {song_name:'song12', song_path:'songs/12.mp3'},
  {song_name:'song13', song_path:'songs/13.mp3'},
  {song_name:'song14', song_path:'songs/14.mp3'},
  {song_name:'song15', song_path:'songs/15.mp3'},
  {song_name:'song16', song_path:'songs/16.mp3'},
  {song_name:'song17', song_path:'songs/17.mp3'},
  {song_name:'song18', song_path:'songs/18.mp3'},
  {song_name:'song19', song_path:'songs/19.mp3'},
  {song_name:'song20', song_path:'songs/20.mp3'},
  {song_name:'song21', song_path:'songs/21.mp3'},
  {song_name:'song22', song_path:'songs/22.mp3'},
]

// play pause click
   masterplay.addEventListener("click",() => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play()
    if (w<=768){
      masterplay.classList.remove('fa-play')
      masterplay.classList.add('fa-pause')
    } else {
      masterplay.classList.remove('fa-play')
      masterplay.classList.add('fa-pause')
      play1.style.display = "block"
      pause1.style.display = "none"
    }

} else if (audioElement.play || audioElement.currentTime >= 0){
  audioElement.pause()
  if (w<=768){
    masterplay.classList.remove('fa-pause')
    masterplay.classList.add('fa-play')
  }else{
    masterplay.classList.remove('fa-pause')
    masterplay.classList.add('fa-play')
    pause1.style.display = 'block';
    play1.style.display = "none"
  }
  }

})
// events to listin
audioElement.addEventListener('timeupdate', ()=>{
  let timepassed = (audioElement.currentTime/audioElement.duration) * 100
  myProrgressBar.value = timepassed;
})

myProrgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProrgressBar.value *(audioElement.duration/100) 

})


// Iteetion of song
songItem.forEach((element,i)=> {
  element.getElementsByClassName('name_of_song')[0].innerText = songs[i].song_name
});

const sign=()=>{
name_of_song.forEach((ele)=>{
  // masterplay.classList.add('fa-pause')
  // masterplay.classList.remove('fa-play')
})
}

name_of_song.forEach(element => {
  element.addEventListener('click', (aa)=> {
    sign()
    songindex = parseInt(aa.target.id)
    console.log(aa);
    audioElement.src = `songs/${songindex+1}.mp3`
    audioElement.play()
    masterplay.classList.add('fa-pause')
    masterplay.classList.remove('fa-play')
  })
});

document.getElementById('next').addEventListener('click', ()=>{
  if (songindex>=15){
    songindex = 0;
  }else{
    songindex +=1
  }
  audioElement.src = `songs/${songindex+1}.mp3`
  audioElement.play()
  masterplay.classList.add('fa-pause')
  masterplay.classList.remove('fa-play')
})


document.getElementById('back').addEventListener('click', ()=>{
  if (songindex<=0){
    songindex = 16;
  }else{
    songindex -=1
  }
  audioElement.src = `songs/${songindex+1}.mp3`
  audioElement.play()
  masterplay.classList.add('fa-pause')
  masterplay.classList.remove('fa-play')
})

