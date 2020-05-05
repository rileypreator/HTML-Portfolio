function findDistance() {

    let startCity   = $("#startCity").val();
    let endCity     = $("#endCity").val();
    let startState  = $("#startState").val();
    let endState    = $("#endState").val();

    

   let validation =  validate(startCity, endCity, startState, endState);

   if (validation) {
    doRequest(startCity, endCity, startState, endState);
    getDirections(startCity, endCity, startState, endState);
    
   }

}

function validate(startCity, endCity, startState, endState) {

    let statePattern = /\b([A-Z]|[a-z])([A-Z]|[a-z])\b/;
    
    if (!startCity) {
        $(".startCityValidate").css("visibility", "visible");
    }
    else
        $(".startCityValidate").css("visibility", "hidden");

    if (!endCity) {
        $(".endCityValidate").css("visibility", "visible");
    }
    else
        $(".endCityValidate").css("visibility", "hidden");

    if (!statePattern.test(startState)) {
        $(".startStateValidate").css("visibility", "visible");
    }
    else
        $(".startStateValidate").css("visibility", "hidden");

    if (!statePattern.test(endState)) {
        $(".endStateValidate").css("visibility", "visible");
    }
    else
        $(".endStateValidate").css("visibility", "hidden");

    if (!statePattern.test(startState) || !statePattern.test(endState))
        return false;
    else
        return true;
}

function doRequest(startCity, endCity, startState, endState) {

    let url = "/cgi-bin/cs213/mileageAjaxJSON?" +
        "startCity=" + startCity +
        "&startState=" + startState + 
        "&endCity=" + endCity + 
        "&endState=" + endState; 

    // $.ajax({url: url, dataType: "json", success: function (response) {
    //     console.log(response);
    // } });

    let encodedURL = encodeURI(url);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let response = JSON.parse(this.responseText);

            console.log(response);

            if (response.miles != "Unknown") {

                let modes = response.trip.tmode;
                let allModes = modes.join();
                let information = "<h2>Starting City: " + startCity + ", " + startState + "</h2>" +
                    "<h2>Ending City: " + endCity + ", " + endState + "</h2>" + 
                    "<h1>Distance between the cities: " + response.trip.miles + " miles" +
                    "<h4>Modes that can be used: " + allModes;

                    
                    $(".showDistance").html(information);
            }
        }
    }

    xhr.open("GET", encodedURL);
    xhr.send();
}

function getDirections(startCity, endCity, startState, endState) {

    let url = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDxlZdklGXJh_eRqU8BCtvULhf9iGzvgHs"
    + "&origin=" + startCity + "+" + startState
    + "&destination=" + endCity + "+" + endState;

    let encodedURL = encodeURI(url);
    $(".googleFrame").attr("src", encodedURL);
}
