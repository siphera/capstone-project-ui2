function login(){
    let login_form = document.getElementById("login")
    let login_inputs = login_form.getElementsByTagName("input")

    let user = login_inputs[0].value;
    let password = login_inputs[1].value;

    let users;
    fetch("http://127.0.0.1:5000/")
}