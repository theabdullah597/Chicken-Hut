import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/logo.png" alt="Chicken Hurt logo" />
            <div>
              <h3>Chicken Hut</h3>
              <p>10 Finkle St, Kendal LA9 4AB</p>
              <a href="tel:+44 20 8211 9054">+44 20 8211 9054</a>
            </div>
          </div>
          <div className="company-block">
            <h4>BILOFEYZO LTD</h4>
            <p>ASHLEY HOUSE OFFICE 304</p>
            <p>235-239 HIGH ROAD</p>
            <p>LONDON</p>
            <p>N22 8HF</p>
          </div>
        </div>

        <div>
          <h3>Links</h3>
          <ul className="footer-links-list">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <a href="mailto:contact@chickenhutuk.com.com">Email Support</a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=10+Finkle+St,+Kendal+LA9+4AB"
                target="_blank"
                rel="noreferrer"
              >
                View on Map
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">© Chicken Hut 2026.</p>
    </footer>
  );
}

export default Footer;
