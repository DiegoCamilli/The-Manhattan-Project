var fnameEl = document.getElementById("fname");
var formEl = document.querySelector("#userInfo");
var baseAstroUrl = 'https://sameer-kumar-aztro-v1.p.rapidapi.com/';
var astroFullUrl;
var heroName;

formEl.addEventListener("submit", function (event) {
	event.preventDefault();
	var bdateEl = document.getElementById("bdate").value;
	astroFullUrl = baseAstroUrl + '?sign=' + bdateEl + '&day=today';
	astroInfo();
	getMarvelResponse();
})
// Astrology API
function astroInfo() {
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
	
}

// Marvel API
var PRIVATE_KEY = "f91b3a58a26ec07306b4c3d0c67877355fd7e238";
var PUBLIC_KEY = "89a7be84f8d42e6fc04fc7e7053d8903";

function getMarvelResponse() {
	var ts = new Date().getTime();
	var hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
	var baseUrl = 'https://gateway.marvel.com/v1/public/characters';
	var heroName = randomName(heroNameArray);
	var fullUrl = baseUrl + '?name=' + heroName + '&ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' + hash;

	fetch(fullUrl).then(function (response) {
		return response.json();
	}).then(function (mdata) {
		console.log(mdata)
		printMarvelResult(mdata);
	});
};

function printMarvelResult(mresultObject) {
	var parent = document.querySelector('#mresults');
	parent.innerHTML = ""
	var nameEl = document.createElement('h3');
	if(mresultObject.data && mresultObject.data.results && mresultObject.data.results[0]) {
		var result = mresultObject.data.results[0];
		nameEl.textContent = result.name;
	
		var descEl = document.createElement('p');
		descEl.textContent = result.description;
	
		if(result.thumbnail) {
			var path = result.thumbnail.path;
			var ext = result.thumbnail.extension;
			var aspectRatio = "standard_fantastic"
			var imgSrc = path + '/' + aspectRatio + "." + ext;
			var imgEl = document.createElement('img');
			imgEl.src = imgSrc;
			parent.appendChild(imgEl);
		}
		// wrap in conditional
		var textContainer = document.createElement('div');
		textContainer.appendChild(nameEl); 
		textContainer.appendChild(descEl);
		parent.appendChild(textContainer);
	}
};

// Function to return random hero
function randomName(nameArray) {
	return nameArray[Math.floor(Math.random() * nameArray.length)];
}

var heroNameArray = ['wolverine', 'iron man', 'professor x', 'thor', 'captain america', 'black widow', 'phoenix', 'black panther', 'scarlet witch', 'falcon', 'doctor strange', 'hawkeye', 'hulk', 'daredevil', 'captain marvel'];