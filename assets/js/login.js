function login() {
    let loginForm = document.getElementById("login");
    let inputs = loginForm.getElementsByTagName("input");
  
    let user = inputs[0].value;
    let password = inputs[1].value;
  
    let users;
    fetch("http://127.0.0.1:5000/login")
    .then((response) => response.json())
    .then((json) =>{
      console.log(json);
      users = json;
      console.log(user, password, users);
  
      let logged = users.filter((userProfile) => {
        return userProfile.user == user && userProfile.password == password;
      });
      console.log(logged);
      if (logged.length >= 1){
        window.location.href = `./index.html`;
      }
    })
  }