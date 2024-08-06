import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  useEffect(() => {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const chatBox = document.getElementById('chat-box');
    const closeChat = document.getElementById('close-chat');
    
    if (whatsappBtn && chatBox && closeChat) {
      whatsappBtn.addEventListener('click', function(event) {
        event.preventDefault();
        chatBox.style.display = 'block';
      });
      
      closeChat.addEventListener('click', function() {
        chatBox.style.display = 'none';
      });
    }
    
    // Cleanup event listeners on component unmount
    return () => {
      if (whatsappBtn && chatBox && closeChat) {
        whatsappBtn.removeEventListener('click', () => {});
        closeChat.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <>
      <footer className="footer" style={{ 
        backgroundImage: `url('./assets/images/cryptocurrency.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="footer-top">
          <div className="container" style={{ 
            backgroundImage: `url('./assets/images/fly-coins.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#fff'
          }}>

            <div className="footer-brand">
              <Link to="#" className="logo">
                <img src="./assets/images/logo.svg" width="50" height="50" alt="Digital Payout logo" />
                Digital Payout
              </Link>
              <h2 className="footer-title">Let's talk! 🤙</h2>
              <a href="tel:+123456789101" className="footer-contact-link">+12 345 678 9101</a>
              <a href="mailto:hello.digitalpayout@gmail.com" className="footer-contact-link">hello.digitalpayout@gmail.com</a>
              <address className="footer-contact-link">Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522</address>
            </div>

            <div className="footer-column">
              <ul className="footer-list">
                <li><p className="footer-list-title">Products</p></li>
                <li><Link to="#" className="footer-link">Spot</Link></li>
                <li><Link to="#" className="footer-link">Inverse Perpetual</Link></li>
                <li><Link to="#" className="footer-link">USDT Perpetual</Link></li>
                <li><Link to="#" className="footer-link">Exchange</Link></li>
                <li><Link to="#" className="footer-link">Launchpad</Link></li>
                <li><Link to="#" className="footer-link">Digital Wallet</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <ul className="footer-list">
                <li><p className="footer-list-title">Services</p></li>
                <li><Link to="#" className="footer-link">Buy Crypto</Link></li>
                <li><Link to="#" className="footer-link">Markets</Link></li>
                <li><Link to="#" className="footer-link">Trading Fee</Link></li>
                <li><Link to="#" className="footer-link">Affiliate Program</Link></li>
                <li><Link to="#" className="footer-link">Referral Program</Link></li>
                <li><Link to="#" className="footer-link">API</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <ul className="footer-list">
                <li><p className="footer-list-title">Support</p></li>
                <li><Link to="#" className="footer-link">Digital Payout Academy</Link></li>
                <li><Link to="#" className="footer-link">Help Center</Link></li>
                <li><Link to="#" className="footer-link">User Feedback</Link></li>
                <li><Link to="#" className="footer-link">Submit a request</Link></li>
                <li><Link to="#" className="footer-link">API Documentation</Link></li>
                <li><Link to="#" className="footer-link">Trading Rules</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <ul className="footer-list">
                <li><p className="footer-list-title">About Us</p></li>
                <li><Link to="#" className="footer-link">About Digital Payout</Link></li>
                <li><Link to="#" className="footer-link">Authenticity Check</Link></li>
                <li><Link to="#" className="footer-link">Careers</Link></li>
                <li><Link to="#" className="footer-link">Business Contacts</Link></li>
                <li><Link to="#" className="footer-link">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ color: '#fff' }}>
          <div className="container">
            <p className="copyright">
              &copy; 2022 Digital Payout. All Rights Reserved by <Link to="#" className="copyright-link text-bg-success">Digital Payout</Link>
            </p>
            <ul className="social-list">
              <li><Link to="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></Link></li>
              <li><Link to="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></Link></li>
              <li><Link to="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></Link></li>
              <li><Link to="#" className="social-link"><ion-icon name="logo-linkedin"></ion-icon></Link></li>
            </ul>
          </div>
        </div>
      </footer>
    
      <div className="whatsapp-chat-widget">
        <Link to="#" id="whatsapp-btn">
          <img src="assets/images/WhatsApp_icon.png" alt="WhatsApp Chat" />
        </Link>
        <div className="chat-box" id="chat-box">
          <div className="chat-header" style={{ textAlign: 'center' }}>
            <img src="assets/images/golden-coin.jpg" alt="WhatsApp Chat" className="chat-header-icon" style={{ width: '100px', height: '100px', borderRadius: '50px' }} />
            <br />
            <button id="close-chat" style={{ position: 'absolute', top: '10px', right: '10px' }}>&times;</button>
          </div>
          <div className="chat-content">
            <span className="chat-header-title">You are welcome to <br /> Digital <br /> PayOut Crypto Currency Platform</span>
            <p className="welcome-message">Let me know how I can assist?</p>
          </div>
          <div className="chat-footer">
            <a href="https://wa.me/+5534991135894" target="_blank" rel="noopener noreferrer">Start Chat</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;


// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="footer" style={{ 
//       backgroundImage: `url('./assets/images/cryptocurrency.jpg')`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat'
//     }}>
//       <div className="footer-top">
//         <div className="container" style={{ 
//           backgroundImage: `url('./assets/images/fly-coins.jpg')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           color: '#fff'
//         }}>

//           <div className="footer-brand">
//             <a href="#" className="logo">
//               <img src="./assets/images/logo.svg" width="50" height="50" alt="Digital Payout logo" />
//               Digital Payout
//             </a>
//             <h2 className="footer-title">Let's talk! 🤙</h2>
//             <a href="tel:+123456789101" className="footer-contact-link">+12 345 678 9101</a>
//             <a href="mailto:hello.digitalpayout@gmail.com" className="footer-contact-link">hello.digitalpayout@gmail.com</a>
//             <address className="footer-contact-link">Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522</address>
//           </div>

//           <div className="footer-column">
//             <ul className="footer-list">
//               <li><p className="footer-list-title">Products</p></li>
//               <li><a href="#" className="footer-link">Spot</a></li>
//               <li><a href="#" className="footer-link">Inverse Perpetual</a></li>
//               <li><a href="#" className="footer-link">USDT Perpetual</a></li>
//               <li><a href="#" className="footer-link">Exchange</a></li>
//               <li><a href="#" className="footer-link">Launchpad</a></li>
//               <li><a href="#" className="footer-link">Digital Wallet</a></li>
//             </ul>
//           </div>

//           <div className="footer-column">
//             <ul className="footer-list">
//               <li><p className="footer-list-title">Services</p></li>
//               <li><a href="#" className="footer-link">Buy Crypto</a></li>
//               <li><a href="#" className="footer-link">Markets</a></li>
//               <li><a href="#" className="footer-link">Trading Fee</a></li>
//               <li><a href="#" className="footer-link">Affiliate Program</a></li>
//               <li><a href="#" className="footer-link">Referral Program</a></li>
//               <li><a href="#" className="footer-link">API</a></li>
//             </ul>
//           </div>

//           <div className="footer-column">
//             <ul className="footer-list">
//               <li><p className="footer-list-title">Support</p></li>
//               <li><a href="#" className="footer-link">Digital Payout Academy</a></li>
//               <li><a href="#" className="footer-link">Help Center</a></li>
//               <li><a href="#" className="footer-link">User Feedback</a></li>
//               <li><a href="#" className="footer-link">Submit a request</a></li>
//               <li><a href="#" className="footer-link">API Documentation</a></li>
//               <li><a href="#" className="footer-link">Trading Rules</a></li>
//             </ul>
//           </div>

//           <div className="footer-column">
//             <ul className="footer-list">
//               <li><p className="footer-list-title">About Us</p></li>
//               <li><a href="#" className="footer-link">About Digital Payout</a></li>
//               <li><a href="#" className="footer-link">Authenticity Check</a></li>
//               <li><a href="#" className="footer-link">Careers</a></li>
//               <li><a href="#" className="footer-link">Business Contacts</a></li>
//               <li><a href="#" className="footer-link">Blog</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom" style={{ color: '#fff' }}>
//         <div className="container">
//           <p className="copyright">
//             &copy; 2022 Digital Payout. All Rights Reserved by <a href="#" className="copyright-link text-bg-danger"> Digital Payout</a>
//           </p>
//           <ul className="social-list">
//             <li><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
//             <li><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
//             <li><a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
//             <li><a href="#" className="social-link"><ion-icon name="logo-linkedin"></ion-icon></a></li>
//           </ul>
//         </div>
//       </div>
//     </footer>
    
//   );
// };

// export default Footer;
