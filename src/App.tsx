import React from 'react'
import './App.css'
import Footer from './Footer'
import LogoMofisbliss from './LogoMofisbliss'
import '@fontsource/pacifico'

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <LogoMofisbliss size={48} />
            <span className="mofisbliss-script">Mofisbliss Bread</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero hero-bread-bg">
        <div className="hero-overlay" />
        <div className="hero-content hero-content-over-image">
          <h1>Fresh Baked Delights</h1>
          <p>Discover the art of artisanal baking with our handcrafted breads with the finest ingredients made with love</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🥖</div>
              <h3>Fresh Daily</h3>
              <p>Every item is baked fresh each morning using traditional recipes and premium ingredients.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌾</div>
              <h3>Organic Ingredients</h3>
              <p>We source only the finest organic ingredients to ensure the best taste and quality.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍞</div>
              <h3>Book Our Bread Loaves for Your Events</h3>
              <p>Make your celebrations memorable with our fresh and delicious loaves of bread, perfect for social gatherings and other special occasions. Reserve in advance for a truly blissful experience!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="menu-preview">
        <div className="container">
          <h2>Our Popular Items</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <img src="public/jumbo-bread.jpg" alt="Jumbo Bread" className="menu-photo" />
              <h3>Jumbo Bread</h3>
              <p>Our largest loaf, perfect for big families, parties, or anyone who loves plenty of fresh, fluffy bread!</p>
            </div>
            <div className="menu-item">
              <img src="public/family-bread.jpg" alt="Family Bread" className="menu-photo" />
              <h3>Family Bread</h3>
              <p>Generously sized for sharing, this loaf is ideal for family breakfasts and gatherings.</p>
            </div>
            <div className="menu-item">
              <img src="public/small-bread.png" alt="Small Bread" className="menu-photo" />
              <h3>Small Bread</h3>
              <p>Perfect for individuals or a quick snack, our small bread is soft, tasty, and just the right size.</p>
            </div>
            <div className="menu-item">
              <img src="public/sardine-bread.jpeg" alt="Sardine Bread" className="menu-photo" />
              <h3>Sardine Bread</h3>
              <p>Soft bread loaf filled with savory sardine goodness a very delicious treat for fish lovers!</p>
            </div>
            <div className="menu-item">
              <img src="public/coconut-bread.jpg" alt="Coconut Bread" className="menu-photo" />
              <h3>Coconut Bread</h3>
              <p>Infused with real coconut for a sweet, tropical twist on classic bread. A customer favorite!</p>
            </div>
            <div className="menu-item">
              <img src="public/wheat-bread.jpg" alt="Wheat Bread" className="menu-photo" />
              <h3>Wheat Bread</h3>
              <p>Made with wholesome wheat flour, this healthy loaf is hearty, nutritious, and full of flavor.</p>
            </div>
            <div className="menu-item">
              <img src="public/fruit-bread.jpg" alt="Fruit Bread" className="menu-photo" />
              <h3>Fruit Bread</h3>
              <p>Loaded with juicy fruits. Our fruit bread is a sweet, colorful delight and yummy in every slice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>Founded in 2020, Mofis Bliss Bakery has been serving our community with passion and dedication. Our master bakers combine traditional techniques with modern innovation to create unforgettable baked goods.</p>
              <p>Every morning, our ovens warm up to create the perfect environment for our artisanal breads and pastries. We believe that great baking starts with great ingredients and ends with a smile on your face.</p>
            </div>
            <div className="about-image">
              <div className="about-bg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Visit Us Today</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
              <p>Saturday: 7:00 AM - 9:00 PM</p>
              <p>Sunday: 7:00 AM - 6:00 PM</p>
            </div>
            <div className="contact-info">
              <h3>Quick Contact</h3> 
              <p>📞 (234) 805 242 5342</p>
              <p>📞 (234) 803 313 4109</p>
              <p>📧 hello@mofisblissbakery.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
