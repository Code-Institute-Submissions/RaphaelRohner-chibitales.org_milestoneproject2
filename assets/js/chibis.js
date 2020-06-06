/*-------------------- Card Array for unavailable infos from APIs --------------------
let chibis = [
    [1, "Hercules", "Common"],
    [2, "Hood", "Legendary"],
    [3, "Gramps", "Common"],
    [4, "Shadow Fiend", "Mythic"],
    [5, "Dark Mummy", "Legendary"],
    [6, "Memes", "Common"],
    [7, "Shiney", "Rare"],
    [8, "Legion", "Mythic"],
    [9, "Knuckles", "Mythic"],
    [10, "Momoy", "Common"],
    [11, "Chaac", "Mythic"],
    [12, "Braggart", "Common"],
    [13, "Madam Mim", "Common"],
    [14, "Magnus", "Legendary"],
    [15, "Centurion", "Rare"],
    [16, "Merlin", "Common"],
    [17, "Abchanchu", "Legendary"],
    [18, "Brabucon", "Common"],
    [19, "Felix", "Mythic"],
    [20, "Blue", "Rare"],
    [21, "Daven", "Rare"],
    [22, "Monk", "Common"],
    [23, "Hermit", "Rare"],
    [24, "Aladdin", "Common"],
    [25, "Hermes", "Common"],
    [26, "Skully", "Legendary"],
    [27, "Templar", "Rare"],
    [28, "Bitey", "Legendary"],
    [29, "OpenSea", "Common"],
    [30, "White Death", "Mythic"],
    [31, "Crimson Ninja", "Rare"],
    [32, "Gameunculus", "Common"],
    [33, "Noobis", "Mythic"],
    [34, "Lizard People", "Legendary"],
    [35, "Lizard Pet", "Legendary"],
    [36, "Stomper", "Legendary"],
    [37, "Minotaur", "Legendary"],
    [38, "Squid Avatar", "Legendary"],
    [39, "Glen Weyl", "Legendary"],
    [40, "Brenna Sparks", "Legendary"],
    [41, "Pumpkin Head", "Legendary"],
    [42, "Frankie", "Legendary"],
    [43, "Cloth Socks", "Common"],
    [44, "Cloth Jacket", "Common"],
    [45, "Cloth Pants", "Common"],
    [46, "Cloth Hat", "Common"],
    [47, "Cloth Gloves", "Common"],
    [48, "Leather Boots", "Rare"],
    [49, "Leather Jacket", "Rare"],
    [50, "Leather Legs", "Rare"],
    [51, "Leather Helmet", "Rare"],
    [52, "Leather Gloves", "Rare"],
    [53, "Metal Boots", "Mythic"],
    [54, "Metal Armor", "Mythic"],
    [55, "Metal Legs", "Mythic"],
    [56, "Metal Helmet", "Mythic"],
    [57, "Metal Gloves", "Mythic"],
    [58, "Bandana", "Legendary"],
    [59, "Leather Bandana", "Legendary"],
    [60, "Mythereum", "Common"],
    [61, "Ring of Discord", "Common"],
    [62, "Wingnut", "Legendary"],
    [63, "Skulletor", "Legendary"],
    [64, "Death Neckless", "Legendary"],
    [65, "Ruby", "Legendary"],
    [66, "Thunder Storm", "Rare"],
    [67, "Tornado", "Rare"],
    [68, "Sword", "Common"],
    [69, "Sharp Sword", "Common"],
    [70, "Spear", "Common"],
    [71, "Stick", "Common"],
    [72, "Club", "Rare"],
    [73, "Pink Blade", "Rare"],
    [74, "Magic Wand", "Rare"],
    [75, "Tribal Spear", "Mythic"],
    [76, "Tri-Blade", "Common"],
    [77, "Magic Stick", "Mythic"],
    [78, "Aegis", "Mythic"],
    [79, "Golden Shaft", "Legendary"],
    [80, "Lightning Blade", "Legendary"],
    [81, "Ender", "Legendary"],
    [82, "Dreams Killer", "Legendary"],
    [83, "Enforced Jacket", "Rare"],
    [84, "Enforced Hat", "Rare"],
    [85, "Enforced Pants", "Rare"],
    [86, "Enforced Gloves", "Rare"],
    [87, "Enforced Boots", "Rare"],
    [88, "Slicer", "Rare"],
    [89, "Young Spartan", "Rare"],
    [90, "Assassin", "Mythic"],
    [91, "Wolf", "Legendary"],
    [92, "Waterboarding", "Rare"],
    [93, "A1 Fighters", "Legendary"],
    [94, "Beginner Socks", "Common"],
    [95, "Beginner Jacket", "Common"],
    [96, "Beginner Pants", "Common"],
    [97, "Beginner Hat", "Common"],
    [98, "Beginner Gloves", "Common"],
    [99, "Young Shiney", "Common"],
    [100, "Caveman", "Common"],
    [101, "Ban", "Legendary"],
    [102, "Leather Jacket+", "Mythic"],
    [103, "Leather Boots+", "Mythic"],
    [104, "Leather Gloves+", "Mythic"],
    [105, "Leather Pants+", "Mythic"],
    [106, "Leather Helmet+", "Mythic"],
    [107, "Metal Chest+", "Legendary"],
    [108, "Metal Boots+", "Legendary"],
    [109, "Metal Gloves+", "Legendary"],
    [110, "Metal Pants+", "Legendary"],
    [111, "Metal Helmet+", "Legendary"],
];
*/

/*-------------------- OpenSea API from chibifighters.com --------------------
const varOpenSea = "https://chibifighters.com/api/opensea/";
*/

/*-------------------- STEP 05 - Stats API from chibifighters.com jQuery -------------------- */

function cardImageHTML(user) {
    return `
        <h2>${user.name}
            <span class="small-name">
                (@<a href="${user.html_url}" target="_blank">${user.login}</a>)
            </span>            
        </h2>
        <div class="gh-content">
            <div class="gh-avatar">
                <a href="${user.html_url}" target="_blank">
                    <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}" />>
                </a>
            </div>
            <p>Followers: ${user.followers} - Following: ${user.following} - <br> Repos: ${user.public_repos}</p>
        </div>`;
}

function cardStatsHTML(repos) {
    if (repos.length == 0) {
        return `<div class="clearfix repo-list">No repos!</div>`
    }

    var listItemsHTML = repos.map(function(repo) {
        return `<li>
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </li>`;
    });
    
    return `<div class="clearfix repo-list">
                <p>
                    <strong>Repo List:</strong>
                </p>
                <ul>
                    ${listItemsHTML.join("\n")}
                </ul>
            </div>`;
}

function findCardByNumber(event) {
    /* ----------- EMPTY DIV ----------- */
    $("#chibiCardImage").html("");
    $("#chibiCardStats").html("");

    /* ----------- ASSIGN INPUT TO VARIABLE ---------->*/
    var chibiCardNumber = $("#cardNumber").val();
    console.log(typeof chibiCardNumber);
    chibiCardNumber = parseInt(chibiCardNumber);
    console.log(typeof chibiCardNumber);
    console.log(chibiCardNumber);

    /* ----------- CHECK IF INPUT IS IN RANGE -----------> */
    if (chibiCardNumber > 111 || chibiCardNumber < 1) {
        $("#chibiCardStatus").html(`No card like this!`);        
        return;
    } else if (isNaN(chibiCardNumber)) {
        $("#chibiCardStatus").html(`Use a number!`);
    } else {
        $("#chibiCardStatus").html(`Searching!`);
    }  

    $.when (        
        $.getJSON(`https://chibifighters.com/api/stats/`)
    ).then(
        function(chibiApiResponse ) {
            var cardAmount = chibiApiResponse.types[chibiCardNumber].amount;
            var cardRarity = chibiApiResponse.types[chibiCardNumber].rarity;
            var cardBurnt = chibiApiResponse.types[chibiCardNumber].burnt;
            var cardCollection = chibiApiResponse.types[chibiCardNumber].collection;
            console.log(cardAmount, cardRarity, cardBurnt, cardCollection);
            /*
            $("#gh-user-data").html(userInformationHTML(userData));
            $("#gh-repo-data").html(repoInformationHTML(repoData));
            */
        },        
        function(errorResponse) {
            if(errorResponse.status === 404) {
                $(`#chibiData`).html(
                    `<h2>Chibi Fighters seems to be down</h2>`);
            } else if (errorResponse.status === 403) {
                var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset') * 1000);
                $("#chibiData").html(`<h4>Too many requests, please wait until ${resetTime.toLocaleTimeString()}</h4>`);
            } else {
                console.log(errorResponse);
                $("#chibiData").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);            
            }       
        });    
}

$(document).ready();

/*-------------------- Stats API from chibifighters.com --------------------*/

/*-------------------- STEP 04 - Stats API from chibifighters.com NOT WORKING --------------------
const app = document.getElementById('chibiData')

var request = new XMLHttpRequest()
request.open('GET', 'https://chibifighters.com/api/stats/', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.amount

      const p = document.createElement('p')
      movie.description = movie.rarity.substring(0, 300)
      p.textContent = `${movie.rarity}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()
*/

/*-------------------- STEP 03 - Stats API from chibifighters.com --------------------
const baseURL = "https://chibifighters.com/api/stats/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function printToDiv(type) {
    getData(type, function(data){
        document.getElementById("chibiData").innerHTML = `<br><p>Cards: ${data.types['2'].amount}</p>`;
        console.dir(data.types);
        console.log(data.types);
        let test = baseURL + type + "/";
        console.log(baseURL);
    });        
}
*/

/*-------------------- STEP 02 - Stats API from chibifighters.com --------------------
function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://chibifighters.com/api/stats/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function printToDiv(chibiData) {
    document.getElementById("chibiData").innerHTML = chibiData;    
}

getData(printToDiv);


/*-------------------- STEP 01 - Display API in HTML element by DIV ID -------------------- 

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://chibifighters.com/api/stats/");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("chibiData").innerHTML = this.responseText;
    }
};
*/