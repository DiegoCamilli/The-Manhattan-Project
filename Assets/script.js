var fnameEl = document.getElementById("fname")
var bdateEl = document.getElementById("bdate")
var formEl = document.querySelector("#userInfo");

formEl.addEventListener("submit", function(event) {
    // function to get the new page
    // function to get API info
    event.preventDefault();
})
const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': 'fdfa5a5e2cmsha542b05596135a2p167a5ejsn74b781c63e74',
		'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
	}
};

fetch('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today', options)
	.then(response => {
     return response.json()
    })
	.then(data => {
    console.log(data)  
    })
	.catch(err => console.error(err));
