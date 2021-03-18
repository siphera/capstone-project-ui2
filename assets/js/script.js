function getPosts() {
    // Get element to change
    let list = document.getElementById("items");
  
    // Fetch the data
    fetch("https://cryptic-plains-12434.herokuapp.com/items")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        json.forEach((blog) => createBlogItem(blog));
      });
  }
  
  function createBlogItem(blog) {
    const item = `<button onclick="buy(${blog.pid})">
                    <span class="item">R${blog.price}</span></br>
                    <span class="category">${blog.product}</span>
                  </button>`;
    let list = document.getElementById("items");
    console.log("Hello");
    list.innerHTML += item;
  }
  getPosts(); // displaying the items on the buttons

  // ==============================================================
  let cart =[]

  fetch('https://cryptic-plains-12434.herokuapp.com/items')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    cart = data;
  })

  function buy(pid) {
    let shownItemList = document.getElementById('receipt');
    let filteredProducts = cart.filter(foodcart => {
      return foodcart.pid == pid;
    })
    filteredProducts.forEach(item => {
      let total = parseInt(document.getElementById('order-total').innerHTML);
      let product_price = parseInt(item.price)
      total = total + product_price;
      shownItemList.innerHTML += `
      <td>${item.pid}</td>
      <td>${item.product}</td>
      <td>R${item.price}</td>
    `
      document.getElementById('order-total').innerHTML = total;
    });
    console.log(filteredProducts)
  }

  function clear() {
    let total = document.getElementsByClassName("order-total")[0].innerHTML;
    alert(`Thank you for your purchase. Next customer please`);
    document.getElementsByClassName("order-total")[0].innerHTML = "0";
    let clear = "";
    let rec = document.getElementById("receip-list");
    rec.innerHTML = clear;
  }

  
  // function receiptItems(blog) {
  //   const item = `
  //                   <td>${blog.pid}</td>
  //                   <td>${blog.product}</td>
  //                   <td>R${blog.price}</td>
  //                   <td><button style="background-color: red; color: white;">Delete</button></td>
  //               `;
  //   let list = document.getElementBy  //   let inCartItems = products.filter((product) => blog.pid == pid);
  //   let selectedItem = inCartItems[0];
  //   let item = `
  //       <td>${blog.pid}</td>
  //       <td>${blog.product}</td>
  //       <td>R${blog.price}</td>
  //       <td><button style="background-color: red; color: white;">Delete</button></td>
  //       <li class="rec-li" id="product${pid}" product-price=${selectedItem.price}>
  //         ${selectedItem.product_name} : ${selectedItem.price}
  //       <button onclick="removefromCart(${pid})">Remove</button></li>
  //     `;
  //   cart.innerHTML += item;
  //   console.log(products);
  
  //   function calcTotal() {
  //     let recieptTotal = document.getElementsByClassName("order-total")[0];
  //     let y = parseInt(recieptTotal.innerHTML);
  //     let x = document
  //       .getElementById("product" + pid)
  //       .getAttribute("product-price");
  
  //     let total = parseInt(y) + parseInt(x);
//  Id("receipt");
  //   console.log("Hello");
  //   list.innerHTML += item;
  // }
  
  // receipt();

    // // get the basket items
    // function total() {
    //   // Get element to change
    //   let list = document.getElementById("order-total");
    
    //   // Fetch the data
    //   fetch("https://cryptic-plains-12434.herokuapp.com/total")
    //     .then((response) => response.json())
    //     .then((json) => {
    //       console.log(json);
    //       json.forEach((blog) => totaldisp(blog));
    //     });
    // }
    // function totaldisp(blog) {
    //   const item = `
    //                   <span>R${blog[0]}</span>
    //               `;
    //   let list = document.getElementById("order-total");
    //   console.log("Hello");
    //   list.innerHTML += item;
    // }
    // total();