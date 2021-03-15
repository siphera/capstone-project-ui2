  // get the bustket items
  function inventory() {
    // Get element to change
    let list = document.getElementById("dataTable");
  
    // Fetch the data
    fetch("https://cryptic-plains-12434.herokuapp.com/items")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        json.forEach((data) => inventoryItems(data));
      });
  }
  
  function inventoryItems(data) {
    const item = `
                    <td>${data.pid}</td>
                    <td>${data.product}</td>
                    <td>${data.quantity}</td>
                    <td>R${data.price}</td>
                    <td><button class="btn btn-default btn-lg show" >Edit</button><button class="btn btn-default btn-lg">Delete</button></td>
                `;
    let list = document.getElementById("dataTable");
    console.log("Hello");
    list.innerHTML += item;
  }
  
  inventory();

  // get the bustket items
  function totalItems() {
    // Get element to change
    let list = document.getElementById("order-total");
  
    // Fetch the data
    fetch("https://cryptic-plains-12434.herokuapp.com/totalitems")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        json.forEach((blog) => totaldisp(blog));
      });
  }
  function totaldisp(blog) {
    const item = `
                    <span style="color: green;">${blog[0]}</span>
                `;
    let list = document.getElementById("quantity-total");
    console.log("Hello");
    list.innerHTML += item;
  }
  
  totalItems();

  function updateStock() {
    let form = document.getElementById("inv");
    const inputs = form.getElementsByTagName("input");

    fetch("https://cryptic-plains-12434.herokuapp.com/items/", {
        
            method: "POST",
            body: JSON.stringify({
                product: inputs[0].value,
                quantity: inputs[1].value,
                price: inputs[2].value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => response.json())
        .then((json) => {
            alert("inventory updated succesfully");
            console.log(json);
            form.reset();
        });
}


// Click function for show the Modal

$(".show").on("click", function(){
  $(".mask").addClass("active");
});

// Function for close the Modal

function closeModal(){
  $(".mask").removeClass("active");
}

// Call the closeModal function on the clicks/keyboard

$(".close, .mask").on("click", function(){
  closeModal();
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});