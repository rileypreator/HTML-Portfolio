//Got some ideas from 
//https://stackoverflow.com/questions/32410590/form-submission-after-javascript-validation

function validate(){
    let apr = Number(document.getElementById("apr").value);
    let term = Number(document.getElementById("term").value);
    let amount = Number(document.getElementById("amount").value);
    let form = document.getElementById("form");
    let errorMessage = document.getElementById("error");

    errorMessage.innerHTML = "";
    // errorMessage.innerHTML = "";
    //Used this website to better understand try catch blocks
    //https://www.w3schools.com/js/tryit.asp?filename=tryjs_throw_error
    // if (!form.checkValidity())
    //     document.getElementById("form").reportValidity();
    // else {
    try {
        if (apr < 0)
            throw "APR must be 0 or higher";
        if (apr > 25)
            throw "APR must be 25 or lower";
        if (term < 0)
            throw "Term cannot be less than 0";
        if (term > 40)
            throw "Term cannot be more than 40";
        if (amount < 0)
            throw "Amount cannot be less than 0";

    }
    catch(error) {
        errorMessage.innerHTML = error;
        return false;
    }

    return true;
// }
    
}