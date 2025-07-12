import { useState, useEffect } from 'react'
import './App.css'
import cykleBackground from './assets/cykle-background.png'

// AnimatedHero Component
function AnimatedHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Placeholder images - these would be replaced with actual Cykle product images
  const images = [
    'https://i.imgur.com/QQSKR6K.png',
    'https://imgur.com/wCITYdE.png',
    'https://imgur.com/1xnmgA1.png',
    'https://imgur.com/daFzorb.png',
    'https://imgur.com/2ukxPl6.png',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="animated-hero">
      <div className="rotating-text-container">
        <svg width="400" height="400" viewBox="0 0 400 400" className="rotating-svg">
          <defs>
            <path
              id="circle-path"
              d="M 200, 200 m -170, 0 a 170,170 0 1,1 340,0 a 170,170 0 1,1 -340,0"
            />
          </defs>
          <text className="rotating-text">
            <textPath href="#circle-path">
              Cykle • Cykle • Cykle • Cykle • Cykle • Cykle • Cykle • Cykle
            </textPath>
          </text>
        </svg>
        
        <div className="image-container">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Cykle product ${index + 1}`}
              className={`fading-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// SignUpForm Component
function SignUpForm() {
  return (
    <div className="signup-section">
      <h1 className="brand-name">Cykle</h1>
      <h2 className="early-access">Early Access</h2>
      <p className="signup-text">Sign Up</p>
      
      <form action="https://formspree.io/f/xdkdnolg" method="POST" className="signup-form">
        <label htmlFor="email" className="email-label">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="email-input"
          placeholder="Enter your email"
        />
        <button type="submit" className="submit-button">
          Get Early Access
        </button>
      </form>
    </div>
  )
}

// Main App Component
function App() {
  return (
    <div className="app">
      <div className="header">
        <h3 className="tagline">
          the <span className="highlight">neighborhoods</span><br />
          thrifts in your <span className="highlight">pockets</span> 
        </h3>
      </div>
      
      <AnimatedHero />
      
      <SignUpForm />
      
      <div className="footer">
        <div className="social-icons">
          <a href="#" className="social-icon instagram" aria-label="Instagram">
            📷
          </a>
          <a href="#" className="social-icon tiktok" aria-label="TikTok">
            🎵
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
