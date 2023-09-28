let url = 'https://course-api.com/javascript-store-products';
const itemBox = document.getElementById('itemList');
const searchInput = document.getElementById('search');
const listMenu = document.getElementById('list')

// Fetch the products and perform the initial rendering
fetch(url)
  .then(response => response.json())
  .then(products => {
    // Store the products in a variable accessible in this scope
    const productList = products;

    const data = productList.map(item => {
      const main = item.fields
      const companyName = main.company;
      const itemName = main.name;
      const itemPrice = main.price;
      const imageUrl = main.image[0].url;
      return `
        <div class="item">
            <div class="item_img">
                <img src="${imageUrl}" alt="">
            </div>
            <div class="item_txt">
                <h2>${itemName}</h2>    
                <h3>${companyName}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ipsum ipsa, similique ipsam odit temporibus.</p>
                <b>${itemPrice}$</b>
            </div>
        </div>
      `;
    });

    itemBox.innerHTML = data.join('');

    // Add an event listener to filter items when the user types in the search input
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        // Filter the products based on the search term
        const filteredProducts = productList.filter(item => {
            return item.fields.name.toLowerCase().includes(searchTerm);
        });

        // Generate HTML for the filtered products
        const filteredData = filteredProducts.map(item => {
            const main = item.fields;
            const companyName = main.company;
            const itemName = main.name;
            const itemPrice = main.price;
            const imageUrl = main.image[0].url;
            return `
                <div class="item">
                    <div class="item_img">
                        <img src="${imageUrl}" alt="">
                    </div>
                    <div class="item_txt">
                        <h2>${itemName}</h2>    
                        <h3>${companyName}</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ipsum ipsa, similique ipsam odit temporibus.</p>
                        <b>${itemPrice}$</b>
                    </div>
                </div>
            `;
        });

        // Display the filtered items
        itemBox.innerHTML = filteredData.join('');
    });
    listMenu.addEventListener('click', (e) => {
        let bar = e.target.textContent.toLowerCase();
        
        const filteredProducts = productList.filter(item => {
            return item.fields.company.toLowerCase().includes(bar);
        });

        // Generate HTML for the filtered products
        const filteredData = filteredProducts.map(item => {
            const main = item.fields;
            const companyName = main.company;
            const itemName = main.name;
            const itemPrice = main.price;
            const imageUrl = main.image[0].url;
            return `
                <div class="item">
                    <div class="item_img">
                        <img src="${imageUrl}" alt="">
                    </div>
                    <div class="item_txt">
                        <h2>${itemName}</h2>    
                        <h3>${companyName}</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ipsum ipsa, similique ipsam odit temporibus.</p>
                        <b>${itemPrice}$</b>
                    </div>
                </div>
            `;
        });

        // Display the filtered items
        itemBox.innerHTML = filteredData.join('');
    });
  });
