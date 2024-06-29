let currentSong = new Audio();

async function getsongs() {
    try {
        let a = await fetch("http://127.0.0.1:3000/Web%20Development/Spotify%20Clone/Songs/");
        let respons = await a.text();
        let div = document.createElement("div");
        div.innerHTML = respons;
        let as = div.getElementsByTagName("a");
        let songs = [];

        for (let index = 0; index < as.length; index++) {
            const element = as[index];
            if (element.href.endsWith(".mp3")) {
                songs.push(element.href.split("/Songs/")[1]);
            }
        }
        return songs;
    } catch (error) {
        console.error("Error fetching songs:", error);
        return [];
    }
}

const playMusic = (track)=>{
    currentSong.src = "/Songs/" + track;
    currentSong.play();
}

async function main() {
    // Get all the Songs
    let songs = await getsongs();

    // Show all the songs in the playlist
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    
    for (const song of songs) {
        let decodedSongName = decodeURIComponent(song).replaceAll("%20", " ");
        songUL.innerHTML += `<li>
            <img class="invert" src="music.svg" alt="">
            <div class="info">
                <div>${decodedSongName}</div>
                <div>Mr Creator</div>
            </div>
            <div class="playnow">
                Play Now
                <img class="invert" src="play.svg" alt="">
            </div>
        </li>`;
    }

    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener('click', element=>{
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    });

    // var audio = new Audio(songs[0]);
    // audio.play();
}

main();
