// function getPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json(); // response ko JSON mein convert kar rahe hain
//       })
//       .then((data) => {
//         console.log('All Posts:', data); // yahan tum UI pe bhi show kar sakte ho
//       })
//       .catch((error) => {
//         console.error('Error fetching posts:', error);
//       });
//   }
  
//   getPosts(); // function call

// https://fakestoreapi.com/products

// fetch('products.json') // ya 'https://fakestoreapi.com/products'
//   .then(res => res.json())
//   .then(products => {
//     const container = document.getElementById('product-list');

//     products.forEach(product => {
//       const div = document.createElement('div');
//       div.innerHTML = `
//         <h3>${product.title}</h3>
//         <p>Price: ${product.price} PKR</p>
//         <img src="${product.image}" width="100">
//         <hr>
//       `;
//       container.appendChild(div);
//     });
//   });

// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// : 
// 109.95
// rating
// : 
// {rate: 3.9, count: 120}
// title
// : 
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => {

        const container = document.querySelector('.product-data');
        
        products.forEach(product => {
            const div = document.createElement('div');

            div.innerHTML = `
            <p>${product.category}</p>
            <h2>${product.title} </h2>
            <img src="${product.image}" width ="100">
            <p>price: ${product.price} pkr</p>
            <p>${product.rating.rate}</p>
           
            <hr>

            `;
            container.appendChild(div);

            div.classList.add('cart');
        });
      });





     

