execute();

function execute() {
    addToInputIndexTemplate(parsingURL(window.location));
}

function parsingURL(parseURL) {
    const KEY = 0;
    const VALUE = 1;

    let result = {};
    let pURL = new URLSearchParams(new URL(parseURL).search);

    for(let kvEntry of pURL.entries()) {
        result[kvEntry[KEY]] = kvEntry[VALUE];
    }
    return result;
}

function addToInputIndexTemplate(params) {
    let doc = window.document;
    let firstName = doc.getElementById("first-name");
    let lastName = doc.getElementById("last-name");
    let email = doc.getElementById("email");
    let genderMale = doc.getElementById("gender-male");
    let genderFemale = doc.getElementById("gender-female");



    if("firstName" in params) {
        firstName.value = params["firstName"];
    } else {
        firstName.value = firstName.placeholder;
    }

    if("lastName" in params) {
        lastName.value = params["lastName"];
    } else {
        lastName.value = lastName.placeholder;
    }

    if("email" in params) {
        email.value = params["email"];
    } else {
        email.value = email.placeholder;
    }

    if("gender" in params) {
        if(params["gender"] === "male") {
            genderMale.checked = "checked";
        }
        if(params["gender"] === "female") {
            genderFemale.checked = "checked";
        }
    }
}