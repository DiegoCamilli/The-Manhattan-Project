var fnameEl = document.getElementById("fname")
var bdateEl = document.getElementById("bdate")
var formEl = document.querySelector("#userInfo");

formEl.addEventListener("submit", function(event) {
    // function to get the new page
    // function to get API info
    event.preventDefault();
})

// Astrology API
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'X-RapidAPI-Key': 'fdfa5a5e2cmsha542b05596135a2p167a5ejsn74b781c63e74',
// 		'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today', options)
// 	.then(response => {
//      return response.json()
//     })
// 	.then(data => {
//     console.log(data)  
//     })
// 	.catch(err => console.error(err));

// Marvel API
var PRIVATE_KEY = "f91b3a58a26ec07306b4c3d0c67877355fd7e238";
var PUBLIC_KEY = "89a7be84f8d42e6fc04fc7e7053d8903";

function getMarvelResponse() {
  // you need a new ts every request
  var ts = new Date().getTime();
  // NOTE: needs CryptoJS CDN script installed in the HTML
  var hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

  var baseUrl = 'http://gateway.marvel.com/v1/public';
  var characterId = '1009718'; // wolverine

  // example URL template
  // http://gateway.marvel.com/v1/public/characters/<CHARACTER_ID_HERE>?ts=<TIMESTAMP_STRING_HERE>&apikey=<PUBLIC_KEY_HERE>&hash=<MD5_HASH_HERE>
  var fullUrl = baseUrl + '/characters/' + characterId + '?ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' + hash;

  // USING FETCH
  fetch(fullUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log('fetch character data', data);
  })
};

getMarvelResponse();
