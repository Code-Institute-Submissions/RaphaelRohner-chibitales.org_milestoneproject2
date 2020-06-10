/*-------------------- FUNCTION FOR ADDITIONAL INFOS NOT AVAILABLE IN APIs --------------------*/
function cardInfos(chibiCardNumber) {
    let chibisArray = [
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
        [111, "Metal Helmet+", "Legendary"]
    ];
    
    let result = chibisArray[chibiCardNumber-1];
    
    return result;
}

/*-------------------- GENERATE CARD STATS -------------------- */

function cardInfosHTML(chibiCardNumber, cardTypes) {
    /*----------- Refresh HTML STATUS ----------*/
    $("#chibiCardStatus").html(`Look at this !!`);

    /*----------- GET CARD STATS FROM CHIBI API ----------*/
    var cardAmount = cardTypes[chibiCardNumber].amount;
    var cardRarity = cardTypes[chibiCardNumber].rarity;
    var cardBurnt = cardTypes[chibiCardNumber].burnt;

    /*----------- GET CARD STATS FROM CHIBI ARRAY ----------*/
    let arrayLine = cardInfos(chibiCardNumber);

    /*----------- RETURN CARD AND STATS TO HTML ----------*/
    return `
        <div class="col-3">
            <h3>${arrayLine[1]}</h3>      
            <img src="${"https://chibifighters.s3-us-west-2.amazonaws.com/api/cards/card_" + chibiCardNumber + ".png"}" />
            <p>ID ${chibiCardNumber} - Existing: ${cardAmount - cardBurnt}</p>
            <p>ID ${chibiCardNumber} - Created: ${cardAmount}</p>
            <p>ID ${chibiCardNumber} - Burnt: ${cardBurnt}</p> 
        </div>`       
};

function findCardByNumber(event) {
    /* ----------- CLEAR DIV ----------- */
    $("#chibiCardImage").html("");
    $("#chibiCardStats").html("");

    /* ----------- ASSIGN INPUT TO VARIABLE ---------->*/
    var chibiCardNumber = parseInt($("#cardNumber").val());    

    /* ----------- CHECK IF INPUT IS IN RANGE -----------> */
    if (chibiCardNumber > 111 || chibiCardNumber < 1) {
        $("#chibiCardStatus").html(`No such card !!`);
        $("#cardNumber").val("").attr("placeholer", "search by card number").focus();                           
        return;
    } else if (isNaN(chibiCardNumber)) {
        $("#chibiCardStatus").html(`Use a number !!`);
        $("#cardNumber").val("").attr("placeholer", "search by card number").focus();
        return;
    } else {
        $("#chibiCardStatus").html(`<img src="assets/css/loader.gif" alt="loading..." /> Searching !!`);
    }

        // Catch API unavailable --> https://www.denisbouquet.com/stop-ajax-request/                       
        
    $.when (        
    $.getJSON(`https://chibifighters.com/api/stats/`)
    ).then(
        function(chibiApiResponse ) {
            var cardTypes = chibiApiResponse.types;
            $("#chibiCardImage").html(cardInfosHTML(chibiCardNumber, cardTypes));            
        },        
        function(errorResponse) {
            if(errorResponse.status === 404) {
                $("#chibiData").html(
                    `<h2>Chibi Fighters down</h2>`);
            } else {
                $("#chibiData").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);            
            }       
        });    
}

$(document).ready();