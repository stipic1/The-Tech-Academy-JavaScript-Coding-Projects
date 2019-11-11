function validateForm() {
    var x = document.forms["myForm"]["first_name"].value;
    var y = document.forms["myForm"]["last_name"].value;
    var z = document.forms["myForm"]["phone_number"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (z == "") {
        alert("Phone number must be filled out");
        return false;
    }
}