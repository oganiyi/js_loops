let result = document.querySelectorAll(".result")[0];

// let ade = [1, 4, 5];
// console.log(Array.isArray(ade));
// console.log(result.length);

//for, while, do..while, for of, for in, for each, map(method)

//for - start

// for(initialization; condition; increment){
//     code
// }

// for (let i = 0; i <= 100; i++) {
//   //   result.innerHTML += i + "<br>";
//   result.innerHTML += `${i}<br>`;
// }

// for (let i = 100; i >= 0; i--) {
//   result.innerHTML += `${i}<br>`;
// }

let musicians = [
  {
    artist: "Kizz Daniel",
    album: ["Buga"],
    duration: "2mins 30secs",
    length: 14,
  },
  {
    artist: "Davido",
    album: "",
    duration: "",
    length: 0,
  },
  {
    artist: "Asake",
    album: ["Palazzo", "Jigi", "Gboja", "Kole easy"],
    duration: "2mins 30secs",
    length: 11,
  },
  {
    artist: "Olamide",
    album: ["Rock", ["Pawon", "Wobe"]],
    duration: "2mins 30secs",
    length: 14,
  },
  {
    artist: "Wizkid",
    album: "",
    duration: "",
    length: 0,
  },
];

// for (let i = 0; i < musicians.length; i++) {
//   if (musicians[i].artist === "Asake") {
//     console.log(musicians[i].album.length);
//   }
// }

const albums = [];

let albums2 = [];

// for (let i = 0; i < musicians.length; i++) {
//   let eachAlbum = musicians[i].album;
//   if (eachAlbum == "") {
//     continue;
//   }
//   for (let j = 0; j < eachAlbum.length; j++) {
//     let innerAlbum = eachAlbum[j];
//     if (Array.isArray(innerAlbum)) {
//       for (let k = 0; k < innerAlbum.length; k++) {
//         albums.push(innerAlbum[k]);
//       }
//     } else {
//       albums.push(innerAlbum);
//     }
//   }
// }

// let c = 0;
// while (c < musicians.length) {
//   let eachAlbum = musicians[c].album;
//   if (eachAlbum == "") {
//     continue;
//   }
//   let d = 0;
//   while (d < eachAlbum.length) {
//     let innerAlbum = eachAlbum[d];
//     if (Array.isArray(innerAlbum)) {
//       let f = 0;
//       while (f < innerAlbum.length) {
//         albums2.push(innerAlbum[f]);
//         f++;
//       }
//     } else {
//       albums2.push(innerAlbum);
//     }
//     d++;
//   }
//   c++;
// }

// console.log(albums);
// console.log(albums2);
// result.innerHTML = albums.sort();

// let emptyAlbum = musicians
//   .filter((value) => !value.album)
//   .reduce((acc, val) => acc + val.artist + "\n", "");

// console.log(emptyAlbum);
// result.innerHTML = emptyAlbum;

//for - end

let asake = {
  artist: "Asake",
  album: ["Palazzo", "Jigi", "Gboja", "Kole easy"],
  duration: "2mins 30secs",
  length: 11,
};

//while loop

let myarray = [1, 5, 3, 1, 5, 6, 9];

let total = 0;

// 1. initialization
// 2. while(condition){
//     code
//     increment
// }

// let a = 0;
// while (a < myarray.length) {
//   total += myarray[a];
//   result.innerHTML += total + "<br>";
//   a++;
// }

// result.innerHTML = total;

// do-while

// initialization
// do{

//     increment
// }
// while(condition);

// let a = 0;
// do {
//   result.innerHTML += `${a}<br>`;
//   a++;
// } while (a < 100);

let playlist = {
  title: "pantagonia bus",
  author: "colt steele",
  songs: [
    { title: "song1", artist: ["blue"], duration: 2.5 },
    { title: "song2", artist: ["kitty", "djcat"], duration: 5.25 },
    { title: "meowmeow", artist: ["garfield"], duration: 2.0 },
  ],
};

let totalDuration = 0;
for (let eachPlaylist in playlist) {
  if (eachPlaylist === "songs") {
    for (let g = 0; g < playlist[eachPlaylist].length; g++) {
      totalDuration += playlist[eachPlaylist][g].duration;
      //   totalDuration += eachPlaylist[b].duration;
    }
  }
}
console.log(totalDuration);
