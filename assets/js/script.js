function getPosts() {
    // Get element to change
    let list = document.getElementById("items");
  
    // Fetch the data
    fetch("http://127.0.0.1:5000/items")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        json.forEach((blog) => createBlogItem(blog));
      });
  }
  
  function createBlogItem(blog) {
    const item = `<li>
                    <span class="item">R${blog.price}</span>
                    <span class="category">${blog.product}</span>
                  </li>`;
    let list = document.getElementById("items");
    console.log("Hello");
    list.innerHTML += item;
  }
  
  getPosts();

  // get the bustket items
  function receipt() {
    // Get element to change
    let list = document.getElementById("receipt");
  
    // Fetch the data
    fetch("http://127.0.0.1:5000/busk")
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
                    <td>${blog.quantity}</td>
                `;
    let list = document.getElementById("receipt");
    console.log("Hello");
    list.innerHTML += item;
  }
  
  receipt();
  
    // get the bustket items
    function total() {
      // Get element to change
      let list = document.getElementById("order-total");
    
      // Fetch the data
      fetch("http://127.0.0.1:5000/total")
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