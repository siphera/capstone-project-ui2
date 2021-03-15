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
    const item = `<button>
                    <span class="item">R${blog.price}</span></br>
                    <span class="category">${blog.product}</span>
                  </button>`;
    let list = document.getElementById("items");
    console.log("Hello");
    list.innerHTML += item;
  }
  getPosts(); // displaying the items on the buttons

  // get the bustket items
  function receipt() {
    // Get element to change
    let list = document.getElementById("receipt");
  
    // Fetch the data
    fetch("https://cryptic-plains-12434.herokuapp.com/bask")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        json.forEach((blog) => receiptItems(blog));
      });
  }
  
  function receiptItems(blog) {
    const item = `
                    <td>${blog.pid}</td>
                    <td>${blog.product}</td>
                    <td>R${blog.price}</td>
                    <td><button style="background-color: red; color: white;">Delete</button></td>
                `;
    let list = document.getElementById("receipt");
    console.log("Hello");
    list.innerHTML += item;
  }
  
  receipt();

    // get the basket items
    function total() {
      // Get element to change
      let list = document.getElementById("order-total");
    
      // Fetch the data
      fetch("https://cryptic-plains-12434.herokuapp.com/total")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          json.forEach((blog) => totaldisp(blog));
        });
    }
    function totaldisp(blog) {
      const item = `
                      <span>R${blog[0]}</span>
                  `;
      let list = document.getElementById("order-total");
      console.log("Hello");
      list.innerHTML += item;
    }
    total();