// function login() {
//     let loginForm = document.getElementById("login");
//     let inputs = loginForm.getElementsByTagName("input");
  
//     let username = inputs[0].value;
//     let password = inputs[1].value;
  
//     let users;
//     fetch("http://127.0.0.1:5000/login/")
//     .then((response) => response.json())
//     .then((json) =>{
//       console.log(json);
//       users = json;
//       console.log(username, password, users);
  
//       let logged = users.filter((userProfile) => {
//         return userProfile.username == username && userProfile.password == password;
//       });
//       console.log(logged);
//       if (logged.length >= 1){
//         window.location.href = `./index.html`;
//       }
//     })
//   }
  // =====LOG-IN======
// function login() {
//   let loginForm = document.getElementById("log");
//   let inputs = loginForm.getElementsByTagName("input");

//   let user = inputs[0].value;
//   let password = inputs[1].value;

//   let users;
//   fetch("http://127.0.0.1:5000/show-records/")
//   .then((response) => response.json())
//   .then((json) =>{
//     console.log(json);
//     users = json;
//     console.log(user, password, users);

//     let logged = users.filter((userProfile) => {
//       return userProfile.user == user && userProfile.password == password;
//     });
//     console.log(logged);
//     if (logged.length >= 1){
//       window.location.href = `./pay.html`;
//     }
//   })
// }
let users;
fetch("https://cryptic-plains-12434.herokuapp.com/login/")
.then((response)=> response.json())
.then((data) => {
  users=data
  console.log(users)
})

function login() {
  let loginForm = document.getElementById("login");
  let inputs = loginForm.getElementsByTagName("input");

  let uname = inputs[0].value;
  let pword = inputs[1].value;

  let log = users.filter((user) => {
    return user.username == uname && user.password == pword;
    });
    
    if (log.length > 0) {
    alert("You have Successfully Logged in, " + uname);
    // localStorage.setItem("user", JSON.stringify(log[0]));
    window.location.href = "./admin-portal.html";
  } else {
  alert("Please enter a valid username and password");
  }
}