/*-------------------- FUNCTION FOR ADDITIONAL INFOS NOT AVAILABLE IN APIs --------------------*/
function cardInfos(chibiCardNumber) {    
    
    let result = chibisArray[chibiCardNumber-1];
    
    return result.name;
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
            <h3>${arrayLine}</h3>      
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