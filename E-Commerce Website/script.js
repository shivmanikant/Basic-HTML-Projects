// Mock product data
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
];

// Function to display products in the catalog
function displayProducts() {
    const catalog = document.getElementById('product-catalog');
    catalog.innerHTML = '<h2>Product Catalog</h2>';
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        catalog.appendChild(productDiv);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cart = document.getElementById('cart');
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${product.name} - $${product.price}</p>
        `;
        cart.appendChild(cartItem);
    }
}

// Display products when the page loads
window.onload = displayProducts;
