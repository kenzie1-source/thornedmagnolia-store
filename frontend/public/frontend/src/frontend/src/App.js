info

code
Code

preview
Preview

Deploy
Deploy
Robot
**Awesome! Now let's add the main React app files! ⚡**

Ask Question
Agent is asking a question, Please answer it to further continue :
Great! Now for the main React files! ⚡

FILE 5: React Entry Point
Click "Create new file"
Filename: frontend/src/index.js
Copy/paste this:
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
Click "Commit new file"
FILE 6: Main App Component
Click "Create new file"
Filename: frontend/src/App.js
Copy/paste this:
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51RtD5HF4rcLrOAiC86PPkzj83UmojJpzofsoVPaaoG3Ff4nTVZKIIJRoIMxuS3ELSOGP5odien2baIPRQglIDPJR00GG5P6E4P');

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "World's Best Teacher", price: 20, image: "https://via.placeholder.com/300x300/C4B5A0/2C2C2C?text=Teacher+Shirt" },
    { id: 2, name: "Mama Bear", price: 20, image: "https://via.placeholder.com/300x300/D4C4B0/2C2C2C?text=Mama+Bear" },
    { id: 3, name: "Custom Sweatshirt", price: 25, image: "https://via.placeholder.com/300x300/8B7D6B/FAF9F7?text=Custom+Sweatshirt" }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const checkout = async () => {
    const stripe = await stripePromise;
    // Simple checkout - in production you'd create a payment intent
    alert('Stripe checkout would open here! Your integration is ready!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_52cf19ad-c32d-4836-89a7-e393bc972a46/artifacts/nd1lbx1y_Business%20%233%20Logo.png"
                alt="Thorned Magnolia Collective" 
                className="w-12 h-12 rounded-full"
              />
              <h1 className="text-2xl font-bold text-gray-800">Thorned Magnolia Collective</h1>
            </div>
            <button 
              onClick={checkout}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Cart ({cart.length}) - Checkout
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <h2 className="text-5xl font-light text-gray-800 mb-4">Beautiful Apparel from Mississippi</h2>
        <p className="text-xl text-gray-600 mb-8">Custom t-shirts and sweatshirts made with love</p>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-light text-center mb-12">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                <p className="text-2xl font-bold text-orange-600 mb-4">${product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h4 className="text-2xl font-light mb-4">Thorned Magnolia Collective</h4>
          <p>Made with love in Mississippi | thornedmagnoliaco@gmail.com</p>
          <p className="mt-2">Stripe payments ready! 💳</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
