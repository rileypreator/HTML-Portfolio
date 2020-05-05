function checkDuet() {
    if ($("#duet").prop("checked") == true) {
        $("#second-student").show();
    }
    else {
        $("#second-student").hide();
    }
}

let registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", validate)

function validate(event) {
    event.preventDefault();
    //main validate bool
    let isValidated = true;
    //performance Type Variables
    let performanceTypeSolo =       $("#solo");
    let performanceTypeDuet =       $("#duet");
    let performanceTypeConcerto =   $("#concerto");

    //first Student
    let firstName =          $("#first_name").val();
    let lastName =           $("#last_name").val();
    let studentID =          $("#student_id").val();

    //second Student
    let firstName2 =         $("#first_name_2").val();
    let lastName2 =          $("#last_name_2").val();
    let studentID2 =         $("#student_id_2").val();

    //information for the student
    let skillLevel =         $("#skill").val();
    let instrument =         $("#instrument").val();
    let location =           $("#location").val();
    let roomNumber =         $("#room_number").val();
    let timeSlot =           $("#time_slot").val();

    //performance Validation
    if (!performanceTypeSolo.is(":checked") && !performanceTypeDuet.is(":checked") && !performanceTypeConcerto.is(":checked")) {
        $(".performance-Validate").show();
        isValidated = false;
    }
    else
        $(".performance-Validate").hide();

    //first student evaluation
    if (!firstName || firstName == "") {
        $(".first-name-1-validate").show();
        isValidated = false;
    }
    else
        $(".first-name-1-validate").hide()

    if (!lastName || lastName == "") {
        $(".last-name-1-validate").show();
        isValidated = false;
    }
    else
        $(".last-name-1-validate").hide();


    if (!studentID|| studentID == "") {
        $(".student-id-1-validate").show();
        isValidated = false;
    }
    else
        $(".student-id-1-validate").hide();


    //second student evaluation
    if (performanceTypeDuet.is(":checked")) {
        if (!firstName2 || firstName2 == "") {
            $(".first-name-2-validate").show();
            isValidated = false;
        }
        else
            $(".first-name-2-validate").hide();
        //first student evaluation
        if (!lastName2 || lastName2 == "") {
            $(".last-name-2-validate").show();
            isValidated = false;
        }
        else
            $(".last-name-2-validate").hide();
        //first student evaluation
        if (!studentID || studentID == "") {
            $(".student-id-2-validate").show();
            isValidated = false;
        }
        else
            $(".student-id-2-validate").hide();
    }

    //skill validate
    if (skillLevel == "") {
        $(".skill-validate").show();
        isValidated = false;
    }
    else
        $(".skill-validate").hide();

    //instrument validate
    if (instrument== "") {
        $(".instrument-validate").show();
        isValidated = false;
    }
    else
        $(".instrument-validate").hide();

    //location validate 
    if (location == "") {
        $(".location-validate").show();
        isValidated = false;
    }
    else
        $(".location-validate").hide();

    //Room Number Validate
    if (roomNumber == "") {
        $(".room-validate").show();
        isValidated = false;
    }
    else
        $(".room-validate").hide();

    //Time Slot Validate
    if (timeSlot == "") {
        $(".time-validate").show();
        isValidated = false;
    }
    else
        $(".time-validate").hide();

    
    
    if (isValidated) {
        submitForm();
    }
}

function submitForm() {
    // event.preventDefault();

    // $.ajax({})
    let form = document.getElementById("registration-form");
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(this.responseText);

            let newHTML = "";
            document.getElementById("display-results").innerHTML = newHTML;
            for (student of result) {
                if (student.performance != null) {
                    newHTML += "<div class=\"display-info\">"
                    newHTML += "<h3>Performance Type: " + student.performance + "</h3>";
                    newHTML += "<h3>Name : " + student.first_Name +  " " + student.last_Name + "</h3>";
                    newHTML += "<h4>Student ID: " + student.studentID + "</h4>";
                    if (student.performance == "Duet") {
                        newHTML += "<h3>Second Name : " + student.first_Name2 +  " " + student.last_Name2 + "</h3>";
                        newHTML += "<h4>Student ID: " + student.studentID2 + "</h4>";
                    }
                    newHTML += "<p>Skill: " + student.skill;
                    newHTML += "<p>Instrument: " + student.instrument;
                    newHTML += "<p>Location: " + student.location;
                    newHTML += "<p>Room: " + student.room;
                    newHTML += "<p>Time Slot: " + student.time;
                    newHTML += "</div>";
                }
            }
            
            document.getElementById("display-results").innerHTML = newHTML;
            $(".show-alert").html( 
                "<div class=\"alert alert-success alert-dismissible fade show success-alert\" role=\"alert\"> <h4 class=\"alert-heading\">Your information was submitted!</h4>Please double check the information that was added to make sure it is correct. <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span></button></div>"      
            );
        }
    };
    xhr.open("POST", "assign13.php")
    // + "performance_solo=" +          $("#solo").val()
    // + "&performance_duet=" +         $("#duet").val()
    // + "&performance_concerto=" +     $("#concert").val()
    // + "&first_name=" +               $("#first_name").val()
    // + "&last_name=" +                $("#last_name").val()
    // + "&student_id=" +               $("#student_id").val()
    // + "&first_name_2=" +             $("#first_name_2").val()
    // + "&last_name_2=" +              $("#last_name_2").val()
    // + "&student_id_2=" +             $("#student_id_2").val()
    // + "&skill=" +                    $("#skill").val()
    // + "&instrument=" +               $("#instrument").val();
    // + "&location=" +                 $("#location").val();
    // + "&room_number=" +              $("#room_number").val();
    // + "&time_slot=" +                $("#time_slot").val();
    // );
    xhr.send(formData);

}

function loadRegister() {
    let form = document.getElementById("registration-form");
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(this.responseText);

            let newHTML = "";

            for (student of result) {
                if (student.performance != null) {
                    newHTML += "<div class=\"display-info\">"
                    newHTML += "<h3>Performance Type: " + student.performance + "</h3>";
                    newHTML += "<h3>Name : " + student.first_Name +  " " + student.last_Name + "</h3>";
                    newHTML += "<h4>Student ID: " + student.studentID + "</h4>";
                    if (student.performance == "Duet") {
                        newHTML += "<h3>Second Name : " + student.first_Name2 +  " " + student.last_Name2 + "</h3>";
                        newHTML += "<h4>Student ID: " + student.studentID2 + "</h4>";
                    }
                    newHTML += "<p>Skill: " + student.skill;
                    newHTML += "<p>Instrument: " + student.instrument;
                    newHTML += "<p>Location: " + student.location;
                    newHTML += "<p>Room: " + student.room;
                    newHTML += "<p>Time Slot: " + student.time;
                    newHTML += "</div>";
                }
            }
            
            document.getElementById("display-results").innerHTML = newHTML;
        }
    };
    xhr.open("POST", "assign13.php")
    // + "performance_solo=" +          $("#solo").val()
    // + "&performance_duet=" +         $("#duet").val()
    // + "&performance_concerto=" +     $("#concert").val()
    // + "&first_name=" +               $("#first_name").val()
    // + "&last_name=" +                $("#last_name").val()
    // + "&student_id=" +               $("#student_id").val()
    // + "&first_name_2=" +             $("#first_name_2").val()
    // + "&last_name_2=" +              $("#last_name_2").val()
    // + "&student_id_2=" +             $("#student_id_2").val()
    // + "&skill=" +                    $("#skill").val()
    // + "&instrument=" +               $("#instrument").val();
    // + "&location=" +                 $("#location").val();
    // + "&room_number=" +              $("#room_number").val();
    // + "&time_slot=" +                $("#time_slot").val();
    // );
    xhr.send(formData);
}

