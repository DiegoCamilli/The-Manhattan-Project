var fnameEl = document.getElementById("fname");
var formEl = document.querySelector("#userInfo");
var baseAstroUrl = 'https://sameer-kumar-aztro-v1.p.rapidapi.com/';
var astroFullUrl;
var heroName;

formEl.addEventListener("submit", function(event) {
	event.preventDefault();
	var bdateEl = document.getElementById("bdate").value;
	astroFullUrl = baseAstroUrl + '?sign=' + bdateEl + '&day=today';
	astroInfo();
	getMarvelResponse();
	// printMarvelResult();
})
// Astrology API
function astroInfo(){
	const options = {
		method: 'POST',
		headers: {
			'X-RapidAPI-Key': 'fdfa5a5e2cmsha542b05596135a2p167a5ejsn74b781c63e74',
			'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
		}
	};

	fetch(astroFullUrl, options)
		.then(response => {
		return response.json()
		})
		.then(adata => {
		console.log(adata)  
		})
		.catch(err => console.error(err));
		// printAstroResult(adata);
}

// Marvel API
var PRIVATE_KEY = "f91b3a58a26ec07306b4c3d0c67877355fd7e238";
var PUBLIC_KEY = "89a7be84f8d42e6fc04fc7e7053d8903";

function getMarvelResponse() {
  // you need a new ts every request
  var ts = new Date().getTime();
  // NOTE: needs CryptoJS CDN script installed in the HTML
  var hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

  var baseUrl = 'https://gateway.marvel.com/v1/public/characters';
  var heroName = randomName(heroNameArray);

  // example URL template
  http://gateway.marvel.com/v1/public/characters/<CHARACTER_ID_HERE>?ts=<TIMESTAMP_STRING_HERE>&apikey=<PUBLIC_KEY_HERE>&hash=<MD5_HASH_HERE>
  var fullUrl = baseUrl + '?name=' + heroName + '&ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' + hash;

  // USING FETCH
  fetch(fullUrl).then(function (response) {
    return response.json();
  }).then(function (mdata) {
	console.log(mdata)
	printMarvelResult(mdata);
  });
};

function printMarvelResult(mresultObject) {
	var nameEl = document.createElement('h3');
	nameEl.textContent = mresultObject.data.results[0].name;

	var descEl = document.createElement('p');
	descEl.textContent = mresultObject.data.results[0].description;

	var imgEl = document.createElement('img');
	imgEl.src = mresultObject.data.results[0].thumbnail;
	
	var parent = document.querySelector('#mresults');
	parent.appendChild(nameEl);
	parent.appendChild(descEl);
	parent.appendChild(imgEl);
};

// Function to return random hero
function randomName(nameArray){
	return nameArray[Math.floor(Math.random()*nameArray.length)];
}


// Hero array
var heroNameArray = ['wolverine', 'iron man', 'professor x', 'thor', 'captain america', 'black widow', 'phoenix', 'black panther', 'scarlet witch', 'falcon', 'doctor strange', 'hawkeye', 'hulk', 'daredevil', 'captain marvel'];

// var dataObj = {mdata,adata}
// var dataObj_serialized = JSON.stringify(dataObj)
// localStorage.setItem('dataObj', dataObj_serialized)
// var dataObj_deserialized = JSON.parse(localStorage.getitem(dataObj))
// console.log(dataObj_deserialized)
