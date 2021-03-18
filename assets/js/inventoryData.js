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
    const item = `<tr data-id=${data.pid}>
                    <td>${data.pid}</td>
                    <td><input class="form-control" name="product" type="text" value="${data.product}"/></td>
                    <td><input class="form-control" name="quantity" type="text" value="${data.quantity}"/></td>
                    <td><input class="form-control" name="price" type="text" value="R${data.price}"/></td>
                    <td><button class="btn btn-default btn-lg show" onclick="editItems(${data.pid})">Edit</button><button class="btn btn-default btn-lg"type="button" onclick="deleteItem(${data.pid})">Delete</button></td>
                  </tr>
                `;
    let list = document.getElementById("dataTable");
    console.log("Hello");
    list.innerHTML += item;
  }
  inventory();

  // =============EDIT================
  function editItems(pid) {
    if (confirm("Save changes?")) {
      let item = document.querySelector(`[data-id="${pid}"`);
      let inputs = item.getElementsByTagName("input");
      console.log(item);
  
      let product = {
        product: inputs[0].value,
        quantity: inputs[1].value,
        price: inputs[2].value,
      };
  
      fetch(`https://cryptic-plains-12434.herokuapp.com/item/${pid}`, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    } else {
      alert("Changes Cancelled");
  
      console.log("Not saved");
    }
  }

  // =======delete item========
  function deleteItem(pid) {
    if (confirm("CONFIRM DELETE?")) {
      fetch(`https://cryptic-plains-12434.herokuapp.com/item/${pid}`, {
        method: "DELETE",
      });
      console.log(pid);
    } else {
      alert("Delete Cancelled");
    }

  // let item = document.querySelector(`[data-id="${ id }"]`);
  // console.log(item);
}

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
