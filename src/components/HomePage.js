import React from 'react'
import { Instagram, Twitter, Youtube } from 'lucide-react'
import './HomePage.css'
import eventsData from './data.json'
import bmsIcon from '../assets/bms.png' // Use real BookMyShow PNG

const HomePage = () => {
  const socialLinks = [
    { icon: <Instagram size={18} />, href: 'https://instagram.com/onkaryadav', color: '#E4405F' },
    { icon: <Youtube size={18} />, href: 'https://www.youtube.com/@boi_onkar', color: '#FF0000' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com/onkaryadav', color: '#1DA1F2' }
  ]

  return (
    <div className="homepage">
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="container">
        <div className="links-section">
          {eventsData.map((event, idx) => (
            <a
              key={idx}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="link-icon">
                <img src={bmsIcon} alt="BookMyShow" />
              </div>
              <div className="link-content">
                <h3>{event.cityVenue}</h3>
                {event.date && (
                  <p>{event.date}{event.time ? ` • ${event.time}` : ''}</p>
                )}
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
