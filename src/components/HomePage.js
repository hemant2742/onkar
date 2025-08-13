import React, { useState, useEffect } from 'react'
import { Instagram, Twitter, Youtube } from 'lucide-react'
import './HomePage.css'
import poster from '../assets/poster.png'
import eventsData from './data.json'

const HomePage = () => {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const socialLinks = [
    { icon: <Instagram size={18} />, href: 'https://instagram.com/onkaryadav', color: '#E4405F' },
    { icon: <Youtube size={18} />, href: 'https://www.youtube.com/@boi_onkar', color: '#FF0000' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com/onkaryadav', color: '#1DA1F2' }
  ]

  return (
    <div className="homepage">
      {/* Poster Image with Cinematic Pan */}
      <img
        src={poster}
        alt="poster"
        className="poster"
        style={{
          transform: `translateY(${offsetY * 0.3}px)` // Moves slower than scroll
        }}
      />

      {/* Overlay for darkening background */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="container">
        {/* Event Cards */}
        <div className="links-section">
          {eventsData.map((event, idx) => (
            <a
              key={idx}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="link-content">
                <h3>{event.cityVenue}</h3>
                {event.date && <p>{event.date}{event.time ? ` • ${event.time}` : ''}</p>}
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="social-bar">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              style={{ backgroundColor: link.color }}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="footer">
          <p>Nickey</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
