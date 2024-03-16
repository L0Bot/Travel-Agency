import React from 'react'
import Button from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Rejoignez l'aventure en souscrivant à notre newsletter !</p>
        <p className="footer-subscription-text">Vous pouvez désabonnez à n'importe quel moment.</p>
        <div className="input-areas">
          <form action="">
            <input type="email" name='email' placeholder='Votre email...' className="footer-input" />
            <Button buttonStyle='btn--outline'>S'inscrire</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>À propos de nous</h2>
            <Link to='/sign-up'>Nous rejoindre</Link>
            <Link to='/'>Nos valeurs</Link>
            <Link to='/'>Carrieres</Link>
            <Link to='/'>Conditions d'utilisation</Link>
          </div>
          <div className="footer-link-items">
            <h2>Besoin d'aide ?</h2>
            <Link to='/'>Nous contacter</Link>
            <Link to='/'>Support client</Link>
            <Link to='/'>Nos destinations</Link>
            <Link to='/'>Nos sponsors</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Réseaux Sociaux</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo"><i className="fa-solid fa-location-dot"></i>TRVL</Link>
          </div>
          <small className="website-rights">TRVL &#169; 2024</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook" to="/" target='_blank' aria-label='Facebook'>
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="social-icon-link twitter" to="/" target='_blank' aria-label='Twitter'>
            <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link className="social-icon-link instagram" to="/" target='_blank' aria-label='Instagram'>
            <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link className="social-icon-link youtube" to="/" target='_blank' aria-label='Youtube'>
            <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link className="social-icon-link linkedin" to="/" target='_blank' aria-label='Linkedin'>
            <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
