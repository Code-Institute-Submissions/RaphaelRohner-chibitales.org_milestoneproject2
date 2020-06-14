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
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 chibi-stats">
            <h4 class="uppercase">${arrayLine} - ID ${chibiCardNumber}</h4>
            <p>Existing: ${cardAmount - cardBurnt} | Created: ${cardAmount} | Burnt: ${cardBurnt}</p>      
            <img class="img-fluid" src="${"https://chibifighters.s3-us-west-2.amazonaws.com/api/cards/card_" + chibiCardNumber + ".png"}" />            
            <p></p>
            <p></p> 
        </div>`       
};

/*-------------------- LOAD CHIBI API -------------------- */

function findCardByNumber(event) {

    /* ----------- ASSIGN INPUT TO VARIABLE ---------->*/
    var chibiCardNumber = parseInt($("#cardNumber").val());

    /* ----------- CHECK IF INPUT IS IN RANGE -----------> */
    if (chibiCardNumber > 111 || chibiCardNumber < 1) {
        $("#chibiCardImage").html(`
            <div class="row">
                <div class="col-2">
                    <i class="chibi-infos-icon fa fa-question" aria-hidden="true"></i>
                </div>
                <div class="col-10">
                    <h4 class="chibi-infos-heading uppercase">How to search</h4>
                    <p>Use the fields on the left to either:</p>
                    <ul>                        
                        <li>search by card number</li>
                        <li>search by card name</li>
                        <li>or narrow down with the 4 fields</li>
                    </ul>
                </div>
            </div>`)
        $("#chibiCardStatus").html(`No such card !!`);
        $("#cardNumber").val("").attr("placeholer", "search by card number").focus();                           
        return;
    } else if (isNaN(chibiCardNumber)) {
        $("#chibiCardImage").html(`
            <div class="row">
                <div class="col-2">
                    <i class="chibi-infos-icon fa fa-question" aria-hidden="true"></i>
                </div>
                <div class="col-10">
                    <h4 class="chibi-infos-heading uppercase">How to search</h4>
                    <p>Use the fields on the left to either:</p>
                    <ul>                        
                        <li>search by card number</li>
                        <li>search by card name</li>
                        <li>or narrow down with the 4 fields</li>
                    </ul>
                </div>
            </div>`)
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

/*-------------------- LOAD CHIBI API AUTOMATICALLY WHEN PAGE IS READY -------------------- */

