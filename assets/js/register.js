function register() {
    let form = document.getElementById("register");
    const inputs = form.getElementsByTagName("input");

    fetch("http://127.0.0.1:5000/login", {
        
            method: "POST",
            body: JSON.stringify({
                user: inputs[0].value,
                role: inputs[1].value,
                password: inputs[2].value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then((response) => response.json())
        .then((json) => {
            alert("new user created succesfully");
            console.log(json);
            form.reset();
        });
}