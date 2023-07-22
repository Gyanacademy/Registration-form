//jshint esversion:6

function gowhatsapp() {
    let firstname = document.getElementById("firstName").value;
    let lastname = document.getElementById("lastname").value;
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let motherTongue = document.getElementById("m-tongue").value;
    let pname = document.getElementById("pname").value;
    let fatherOccupation = document.getElementById("occupation").value;
    let motherName = document.getElementById("m-name").value;
    let motherOccupation = document.getElementById("m-occupation").value;
    let phone = document.getElementById("phone").value;
    let parentsPhone = document.getElementById("pphone").value;
    let email = document.getElementById("email").value;
    let pphone = document.getElementById("pphone").value;
    let houseBuildingno = document.getElementById("House-Building-no").value;
    let Streetlocality = document.getElementById("Street-locality").value;
    let district = document.getElementById("district").value;
    let state = document.getElementById("state").value;
    let pinCode = document.getElementById("pin-code").value;
    var std = document.getElementById("std").value;
    let scname = document.getElementById("scname").value;

    let stream = document.getElementById("stream").value;
    let mode = document.getElementById("mode").value;
    let board = document.getElementById("board").value;
    let ref = document.getElementById("ref").value;


    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var checkbox of markedCheckbox) {
        var subjects = document.body.append(checkbox.value + ', ');
    }
    let allsubjects = subjects;

    let url =
        "https://wa.me/918088263376?text=" +
        "Dear, Gyan Academy of Commerce & Science " + "%0a" +
        "Name of the student : " + "*" +
        firstname + " " + lastname + "*"
        "%0a" +
        "%0a" +
        "Students Contact Number: "
        + phone +
        "%0a" +
        "%0a" +
        "Gender : "
        + gender +
        "%0a" +
        "%0a" +
        "Date of Birth: "
        + dob +
        "%0a" +
        "%0a" +
        "Name of Father : "
        + pname +
        "%0a" +
        "%0a" +
        "Name of Mothe : " + motherName +
        "%0a" +
        "%0a" +
        "Parents Contact Number : "
        + pphone +
        "%0a" +
        "%0a" +
        "Residential Address : "
        + houseBuildingno + "," + Streetlocality + ", " + district + ", " + state + ", " + pinCode +
        "%0a" +
        "%0a" +
        "Class Studying : "
        + std +
        "%0a" +
        "%0a" +
        "School/College Studying : " + "*"
        + scname + "*" +
        "%0a" +
        "%0a" +
        "Subjects Needed : "
        + allsubjects +
        "%0a" +
        "%0a" +
        "Stream : "
        + stream +
        "%0a" +
        "%0a" +
        "Mode of Teaching : " + "*" +
        mode + "*" +
        "%0a" +
        "%0a" +
        "Board : "
        + board;






    window.open(url, "_blank").focus();

}

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("form-group");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML="Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("form-group");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm())
        return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }

    // Otherwise, display the correct tab:
    showTab(currentTab);

}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("form-group");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].classList.add(" invalid");
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].classList = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].classList.add(" active");
}
//  sending form to google sheets
function sendtoGsheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx4rPzR2Sm4UHGWfguNA2j27rdD92exv6S9tFKBCsCH6bLr-oWnPXcFBPmIT18iNCC6fw/exec'
    const form = document.forms['Student-Database']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert('Successfully Registered!', response))
            .catch(error => alert('Error!', error.message))
    })
}