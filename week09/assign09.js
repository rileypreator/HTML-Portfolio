function getCountryChoice() {
    
    let choice = document.getElementById("country").value;

    let choiceNumber;

    if (choice == "usa")
        choiceNumber = 0;
    else if (choice == "canada")
        choiceNumber = 1;
    else if (choice == "russia")
        choiceNumber = 2;
    else if (choice == "mexico")
        choiceNumber = 3;
    else
        choiceNumber = 4;

    switch(choiceNumber) {
        case 0:
            runAjax("usa");
            break;
        case 1:
            runAjax("canada");
            break;
        case 2:
            runAjax("russia");
            break;
        case 3:
            runAjax("mexico");
            break;
        default:
            runAjax("none");
             break;
    }
}

function runAjax(countryChoice) {

    if (countryChoice == "none") 
        document.getElementById("cityInfo").innerHTML = "No Country Selected";
    else {
        let url = "./" + countryChoice + ".txt";

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("cityInfo").innerHTML = this.responseText;
            }
        }

        xhr.open("GET", url, true);
        xhr.send();
    }
}

function validateFile() {

    let url = "./" + document.getElementById("fileName").value;

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);

        displayJson(response);
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}

function displayJson(responseJson) {

    let students = responseJson.students;

    document.getElementById("showStudents").innerHTML = "";
    //for loop to go through each student
    for (student of students) {
        let studentContent = "";
        studentContent += "<h2>" + student.first + " " + student.last + "</h2>";
        studentContent += "<h3>Address:</h3>";

        let addressInfo = student.address;
        // for (addressInfo of address) {
            studentContent += "<h4>City: " + addressInfo.city;
            studentContent += "<h4>State: " + addressInfo.state;
            studentContent += "<h4>Zip Code: " + addressInfo.zip;
        // }
        studentContent += "<h4>Major: " + student.major + "</h4>";
        studentContent += "</h5>GPA: " + student.gpa + "</h5>";

        document.getElementById("showStudents").innerHTML += studentContent + "<br><br>";
    }
}