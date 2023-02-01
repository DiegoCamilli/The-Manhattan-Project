# The Manhattan Project-Marvel Hororscope
## Project one with Dannon Rogers, Jemmy Blyden, and Diego Camilli
    This application will tell you what you need to know to take on the day, or even reflect on past readings. By giving you what Marvel character represents you for the day, as well as your daily horoscope.You can take the advice, and make the most of your day as the Superhero you are!

![screenshot](./Assets/Images/App%20Screenshot%20(hororscope).png)
---
---

# User Story
**As a Use**
I want to generate a Marvel character avatar and my daily horoscope. 

**So that** 
I can imagine how my Marvel character would navigate the day ahead with the insights from my daily horoscope reading.

# Acceptance Criteria
**Given**: the user’s name, Astrological Sign, and current date

**When**: a user enters their name and date of birth

**Then**: a Marvel character, description (bio, abilities, series, etc.) and daily horoscope are generated.

---
---

# Challenges
In this project there were many hurdles and new issuse we had to power throgh and learn to navigate. 

The following block of code is a Dynamic API enpoint in which we had to generate an encrypted hash, and concatonate with a time stamp in addition the API Keys.

---

function getMarvelResponse() {
  
  var ts = new Date().getTime();
  
  var hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

  var baseUrl = 'https://gateway.marvel.com/v1/public/characters';
  var heroName = randomName(heroNameArray);
}

`fetch(fullUrl).then(function (response) {
    return response.json();
  }).then(function (mdata) {
	console.log(mdata)
	printMarvelResult(mdata);
  });`

---
# Links
[Deployed App](https://diegocamilli.github.io/The-Manhattan-Project/ "Deploy link")

[Git Repository](https://github.com/DiegoCamilli/The-Manhattan-Project "Git Repo")

