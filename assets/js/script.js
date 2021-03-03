function getPosts() {
    // Get element to change
    let list = document.getElementById("items");
  
    // Fetch the data
    fetch("http://127.0.0.1:5000/login")
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
  
  