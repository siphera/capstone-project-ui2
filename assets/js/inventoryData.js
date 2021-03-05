  // get the bustket items
  function inventory() {
    // Get element to change
    let list = document.getElementById("dataTable");
  
    // Fetch the data
    fetch("http://127.0.0.1:5000/items")
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
                    <td><button class="btn btn-default btn-lg">Edit</button><button class="btn btn-default btn-lg">Delete</button></td>
                `;
    let list = document.getElementById("dataTable");
    console.log("Hello");
    list.innerHTML += item;
  }
  
  inventory();