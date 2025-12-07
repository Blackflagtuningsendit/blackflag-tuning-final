// Cart system
let cart = [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function addToCart(name, price) {
    cart.push({name, price});
    cartCount.textContent = cart.length;
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = cart.map(item => `<p>${item.name} — $${item.price}</p>`).join('');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = '$' + total;
}

function checkout() {
    if (cart.length === 0) return alert('Cart is empty');
    alert(`Checkout: $${cart.reduce((sum, i) => sum + i.price, 0)} — Redirecting to Stripe...`);
    // Add your real Stripe checkout here later
}

// App download (email gate example)
function downloadApp(appName) {
    const email = prompt(`Enter your email to receive ${appName} download link:`);
    if (email) alert(`${appName} download link sent to ${email}!`);
}

// Mobile menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Light-show toggle (fun demo)
function toggleLightShow() {
    document.querySelector('.gallery-grid').classList.toggle('light-show');
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});
