function moveToRegister(){
    var loginElement = document.getElementById("login")
    var registerElement = document.getElementById("register")
    var buttonElement = document.getElementById("btn")

    loginElement.style.left = "-450px";
    registerElement.style.left = "50px";
    buttonElement.style.left = "110px";


}

function moveTologin(){
    var loginElement = document.getElementById("login")
    var registerElement = document.getElementById("register")
    var buttonElement = document.getElementById("btn")

    loginElement.style.left = "50px";
    registerElement.style.left = "450px";
    buttonElement.style.left = "0px";
}

function login() {
    var loginUserName = document.getElementById("loginUserName");
    var loginPassword = document.getElementById("loginPassword");
    console.log("userName :: "+loginUserName.value);
    console.log("loginPassword :: "+loginPassword.value);
    
    if (loginUserName.value == "" || loginPassword.value == "" ) {
        alert("Can't Login With Empty Username/Password")
    } else {
        fetch('http://localhost:5000/login')
            .then(response => response.json())
            .then(data => console.log(data));
        alert("UNDER DEVELOPMENET !!!");
    }
}

function register() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var emailId = document.getElementById("emailId").value;
    var password = document.getElementById("password").value;
    var termsAndCondition = document.getElementById("termsAndCondition");

    if (firstName == "" || lastName == "" || emailId == "" || password == "") {
        alert("Can't Register With Empty Username/Password")
    } else if (!termsAndCondition.checked){
        alert("Please Agree For Terms And Conditions")
    }
    else {
        let form = document.getElementById("register");
        formDetails = {
            "firstName":firstName,
            "lastName":lastName,
            "emailId":emailId,
            "password":password
        };
        fetch('http://localhost:5000/register', {
            headers: {
                'Content-type': 'application/json'
            }, 
            method: "POSt",
            body: JSON.stringify({"firstName": firstName, "lastName":lastName, "emailId":emailId, "password":password})
        })
            .then(response => response.json())
            .then(data => console.log(data));
        alert("Registration SuccessFul !!!! Future pages under developmenyt.");
    }   
}