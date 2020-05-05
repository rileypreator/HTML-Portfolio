function startupLoad () {
    document.getElementById("firstName").focus();
    document.getElementById("firstNameVerify").style.visibility = "hidden";
    document.getElementById("lastNameVerify").style.visibility = "hidden";
    document.getElementById("addressVerify").style.visibility = "hidden";
    document.getElementById("phoneVerify").style.visibility = "hidden";
    document.getElementById("cardNumberVerify").style.visibility = "hidden";
    document.getElementById("dateVerify").style.visibility = "hidden";
}



function validateFirstName(firstNamePass) {

    let firstName = String(firstNamePass.value);

    if (firstName.length == 0)
        return false;
    else
        return true;
}

function validateLastName(lastNamePass) {

    let lastName = String(lastNamePass.value);

    if (lastName.length == 0)
        return false;
    else
        return true;
}

function validateAddress(addressPass) {

    let address = String(addressPass.value);

    if (address.length == 0)
        return false;
    else    
        return true;
}

function validatePhone(phoneNumberPass) {
    console.log("Checking Phone number " + phoneNumberPass.value )

    // let number = Number(phoneNumberPass.value);
    let phoneNumber = String(phoneNumberPass.value);

    let pattern1 = /(\d{10})/;
    let pattern2 = /^\d{3}-\d{3}-\d{4}$/g;
    let pattern3 = /^\(\d{3}\)\d{3}-\d{4}$/;

    // Used this website to learn about substrings
    //https://www.w3schools.com/jsref/jsref_substr.asp
    let substring1, substring2, substring3;

    if (pattern1.test(phoneNumber)) {
        substring1 = phoneNumber.substr(0,3);
        substring2 = phoneNumber.substr(3,3);
        substring3 = phoneNumber.substr(6,4);

        // phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "("+ substring1 + ")-" + substring2 + "-" + substring3);
        phoneNumber = "(" + substring1 + ")" + substring2 + "-" + substring3;
        
        document.getElementById("phone").value = phoneNumber;
        return true;
    }
    else if (pattern2.test(phoneNumber)) {
        substring1 = phoneNumber.substr(0,3);
        substring2 = phoneNumber.substr(4,3);
        substring3 = phoneNumber.substr(7,5);

        // phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "("+ substring1 + ")-" + substring2 + "-" + substring3);
        phoneNumber = "(" + substring1 + ")" + substring2 + substring3;
        
        document.getElementById("phone").value = phoneNumber;
        return true;
    }
    else if (pattern3.test(phoneNumber)) {
        return true;
    }
    else {
        return false;
    }

}

function validateCardNumber(cardString) {

    console.log("Card number is " + cardString);

    let cardNumber = String(cardString.value);

    let pattern = /\d{16}/;
    let pattern2 = /^\d{4} \d{4} \d{4} \d{4}$/;

    if (pattern.test(cardNumber)) {
        let substring1 = cardNumber.substr(0,4);
        let substring2 = cardNumber.substr(4,4);
        let substring3 = cardNumber.substr(8,4);
        let substring4 = cardNumber.substr(12,4);

        cardNumber = substring1 + " " + substring2 + " " + substring3 + " " + substring4;
        document.getElementById("cardNumber").maxlength = "20";
        document.getElementById("cardNumber").value = cardNumber;

        return true;
    }
    else if (pattern2.test(cardNumber))
        return true;
    else {
        return false;
    }
}

// Couldn't quite figure out the regex for this part. Looked on the internet to find some information regarding the regex here
//http://www.robarspages.ca/web-development/regex-mmyyyy-regular-expression-for-credit-card-expiration-date/
function validateDate(dateString) {

    console.log("date is " + dateString);

    let date = dateString.value;

    let pattern = /^((0[1-9])|(1[0-2]))\/((2020)|(20[2-9][0-9])|(2[3-9][0-9][0-9]|[3-9][0-9][0-9][0-9]))$/;

    if (pattern.test(date))  {
        console.log("Worked");
        return true;
    }
    else {
        return false;
    }
}

function validateAll() {

    //Validate First Name
    let firstNameBool = validateFirstName(document.getElementById("firstName"));
    //Validate Last Name
    let lastNameBool = validateLastName(document.getElementById("lastName"));
    //Validate Address
    let addressBool = validateAddress(document.getElementById("address"));
    //Validate Phone
    let phoneBool = validatePhone(document.getElementById("phone"));
    //Validate Card Number
    let cardNumberBool = validateCardNumber(document.getElementById("cardNumber"));
    //Validate Expiration Date
    let dateBool = validateDate(document.getElementById("exp_date"));

    console.log("Check values");

    let focus = true;

    if (firstNameBool && lastNameBool && addressBool && phoneBool && cardNumberBool && dateBool) {
       var form =  document.getElementById("form-grid");
       return true;
    }
    else {
        if (firstNameBool)
            document.getElementById("firstNameVerify").style.visibility = "hidden";
        else {
            document.getElementById("firstNameVerify").style.visibility = "visible";
            
            if (focus == true) {
                focus = false;
                document.getElementById("firstName").focus();
            }
        }
        if (lastNameBool)
            document.getElementById("lastNameVerify").style.visibility = "hidden";
        else {
            document.getElementById("lastNameVerify").style.visibility = "visible";
            
            if (focus == true) {
                focus = false;
                document.getElementById("lastName").focus();
            }
        }
        if (addressBool)
            document.getElementById("addressVerify").style.visibility = "hidden";
        else {
            document.getElementById("addressVerify").style.visibility = "visible";
            
            if (focus == true) {
                focus = false;
                document.getElementById("address").focus();
            }
        }
        if (phoneBool)
            document.getElementById("phoneVerify").style.visibility = "hidden";
        else {
            document.getElementById("phoneVerify").style.visibility = "visible";

            if (focus == true) {
                focus = false;
                document.getElementById("phone").focus();
            }
        }
        if (cardNumberBool)
            document.getElementById("cardNumberVerify").style.visibility = "hidden";
        else {
            document.getElementById("cardNumberVerify").style.visibility = "visible";
            
            if (focus == true) {
                focus = false;
                document.getElementById("cardNumber").focus();
            }
        }
        if (dateBool)
            document.getElementById("dateVerify").style.visibility = "hidden";
        else {
            document.getElementById("dateVerify").style.visibility = "visible";
            
            if (focus == true) {
                focus = false;
                document.getElementById("exp_date").focus();
            }
        }

        return false;
    }

    
}

function addTotal(ifclicked) {

    let item1 = document.getElementById("itemWant1").checked;
    let item2 = document.getElementById("itemWant2").checked;
    let item3 = document.getElementById("itemWant3").checked;
    let item4 = document.getElementById("itemWant4").checked;

    let total = 0;
    let item1Total = 0;
    let item2Total = 0;
    let item3Total = 0;
    let item4Total = 0;

    if (item1 == true)
        item1Total = 10;
    else
        item1Total = 0;
    if (item2 == true)
        item2Total = 10;
    else
        item2Total = 0;
    if (item3 == true)
        item3Total = 10;
    else
        item3Total = 0;
    if (item4 == true)
        item4Total = 10;
    else
        item4Total = 0;

    total = item1Total + item2Total + item3Total + item4Total;

    document.getElementById("total").innerHTML = total;
}

function resetForm() {

    // document.getElementById("form-grid").reset();
    document.getElementById("firstName").focus();
}