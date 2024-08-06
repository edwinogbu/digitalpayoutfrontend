
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const [navClass, setNavClass] = useState('navbar');
  const [toggleClass, setToggleClass] = useState('nav-toggle-btn');

  const changeStyle = () => {
    setNavClass((prevClass) => (prevClass === 'navbar' ? 'navbar active' : 'navbar'));
    setToggleClass((prevClass) => (prevClass === 'nav-toggle-btn' ? 'nav-toggle-btn active' : 'nav-toggle-btn'));
  };


  return (
    <header className={`header`} data-header>
      <div className="container" style={{ backgroundColor: '#331177' }}>
        <Link to="/" className="logo" id="logo">
          <img
            alt="Cryptex logo"
            height="32"
            src="assets/images/instruction-4.png"
            width="32"
          />
          Digital PayOut
        </Link>
        {/* <nav className={`navbar`}> */}
        <nav className={navClass} data-navbar>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link active text-white">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/buy-crypto" className="navbar-link">
                Buy Crypto
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/markets" className="navbar-link">
                Markets
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/blog" className="navbar-link">
                Blog
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact-us" className="navbar-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        {/* <button
          aria-label="Toggle menu"
          className="nav-toggle-btn"
          id="menu-toggle"
        >
          <span className="line line-1" />
          <span className="line line-2" />
          <span className="line line-3" />
        </button> */}
         <button
          className={toggleClass}
          aria-label="Toggle menu"
          data-nav-toggler
          onClick={changeStyle}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
        <Link to="/login" className="btn btn-outline text-light">
          Account
        </Link>
        <Link to="/register" className="btn btn-outline text-light">
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;

// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   useEffect(() => {
//     const menuToggleBtn = document.getElementById('menu-toggle');
//     const header = document.querySelector('.header');
//     const navbar = document.querySelector('.navbar');

//     const handleMenuToggle = () => {
//       header.classList.toggle('header-open');
//       navbar.classList.toggle('navbar-open');
//     };

//     menuToggleBtn.addEventListener('click', handleMenuToggle);

//     return () => {
//       menuToggleBtn.removeEventListener('click', handleMenuToggle);
//     };
//   }, []);

//   return (
//     <header className={`header`}>
//       <div className="container" style={{ backgroundColor: '#331177' }}>
//         <Link to="/" className="logo" id="logo">
//           <img
//             alt="Cryptex logo"
//             height="32"
//             src="assets/images/instruction-4.png"
//             width="32"
//           />
//           Digital PayOut
//         </Link>
//         <nav className={`navbar`}>
//           <ul className="navbar-list">
//             <li className="navbar-item">
//               <Link to="/" className="navbar-link active">
//                 Home
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/buy-crypto" className="navbar-link">
//                 Buy Crypto
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/markets" className="navbar-link">
//                 Markets
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/blog" className="navbar-link">
//                 Blog
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/contact-us" className="navbar-link">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <button
//           aria-label="Toggle menu"
//           className="nav-toggle-btn"
//           id="menu-toggle"
//         >
//           <span className="line line-1" />
//           <span className="line line-2" />
//           <span className="line line-3" />
//         </button>
//         <Link to="/login" className="btn btn-outline text-light">
//           Account
//         </Link>
//         <Link to="/register" className="btn btn-outline text-light">
//           Register
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './carousel.css';

// export default function Navbar({ toggleMenu, selectedChain, setSelectedChain }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // const handleMenuToggle = () => {
//   //   setIsMenuOpen(!isMenuOpen);

//   //   const wrapper = document.getElementById('wrapper');
//   //   const sidebarWrapper = document.getElementById('sidebar-wrapper');
//   //   const pageContentWrapper = document.getElementById('page-content-wrapper');
//   //   const logo = document.getElementById('logo');
//   //   const menuToggle = document.getElementById('menu-toggle');

//   //   if (isMenuOpen) {
//   //     wrapper.classList.remove('toggled');
//   //     sidebarWrapper.classList.remove('toggled');
//   //     pageContentWrapper.classList.remove('toggled');
//   //     logo.classList.remove('toggled');
//   //     menuToggle.classList.remove('toggled');
//   //   } else {
//   //     wrapper.classList.add('toggled');
//   //     sidebarWrapper.classList.add('toggled');
//   //     pageContentWrapper.classList.add('toggled');
//   //     logo.classList.add('toggled');
//   //     menuToggle.classList.add('toggled');
//   //   }
//   // };



//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//     document.getElementById('menu-toggle').addEventListener('click', function() {
//       var header = document.getElementById('header');
//       var navbar = document.getElementById('navbar');
      
//       header.classList.toggle('header-open');
//       navbar.classList.toggle('navbar-open');
//     });
//     }
//   return (
//     <>
//     <header className={`header ${isMenuOpen ? 'header-open' : ''}`}>
//       <div className="container" style={{backgroundColor:'#331177'}}>
//         <Link to="/" className="logo" id="logo">
//           <img
//             alt="Cryptex logo"
//             height="32"
//             src="assets/images/instruction-4.png"
//             width="32"
//           />
//           Digital PayOut
//         </Link>
//         <nav className={`navbar ${isMenuOpen ? 'navbar-open' : ''}`}>
//           <ul className="navbar-list">
//             <li className="navbar-item">
//               <Link to="/" className="navbar-link active">
//                 Home
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/buy-crypto" className="navbar-link">
//                 Buy Crypto
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/markets" className="navbar-link">
//                 Markets
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/blog" className="navbar-link">
//                 Blog
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/contact-us" className="navbar-link">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <button
//           aria-label="Toggle menu"
//           className="nav-toggle-btn"
//           id="menu-toggle"
//           onClick={handleMenuToggle}
//         >
//           <span className="line line-1" />
//           <span className="line line-2" />
//           <span className="line line-3" />
//         </button>
//         <Link to="/login" className="btn btn-outline text-light">
//           Account
//         </Link>
//         <Link to="/register" className="btn btn-outline text-light">
//           Register
//         </Link>
//       </div>
//     </header>
//   </>
//     // <header className={`header ${isMenuOpen ? 'header-open' : ''}`}>
//     //   <div className="container-fluid" style={{ backgroundColor: '#331177' }}>
//     //     <div className="d-flex justify-content-between align-items-center py-2">
//     //       <Link to="/" className="navbar-brand d-flex align-items-center">
//     //         <img
//     //           alt="Cryptex logo"
//     //           height="32"
//     //           src="assets/images/instruction-4.png"
//     //           width="32"
//     //           className="me-2"
//     //         />
//     //         Digital PayOut
//     //       </Link>
//     //       <button
//     //         className="navbar-toggler d-lg-none"
//     //         type="button"
//     //         data-bs-toggle="collapse"
//     //         data-bs-target="#navbarNav"
//     //         aria-controls="navbarNav"
//     //         aria-expanded={isMenuOpen}
//     //         aria-label="Toggle navigation"
//     //         onClick={handleMenuToggle}
//     //       >
//     //         <span className="navbar-toggler-icon"></span>
//     //       </button>
//     //     </div>
//     //     <nav className={`navbar navbar-expand-lg ${isMenuOpen ? 'navbar-open' : ''}`}>
//     //       <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
//     //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//     //           <li className="nav-item">
//     //             <Link to="/" className="nav-link active" aria-current="page">
//     //               Home
//     //             </Link>
//     //           </li>
//     //           <li className="nav-item">
//     //             <Link to="/buy-crypto" className="nav-link">
//     //               Buy Crypto
//     //             </Link>
//     //           </li>
//     //           <li className="nav-item">
//     //             <Link to="/markets" className="nav-link">
//     //               Markets
//     //             </Link>
//     //           </li>
//     //           <li className="nav-item">
//     //             <Link to="/blog" className="nav-link">
//     //               Blog
//     //             </Link>
//     //           </li>
//     //           <li className="nav-item">
//     //             <Link to="/contact-us" className="nav-link">
//     //               Contact Us
//     //             </Link>
//     //           </li>
//     //         </ul>
//     //         <div className="d-none d-lg-flex gap-2 ms-auto">
//     //           <Link to="/login" className="btn btn-outline-light">
//     //             Account
//     //           </Link>
//     //           <Link to="/register" className="btn btn-outline-light">
//     //             Register
//     //           </Link>
//     //         </div>
//     //       </div>
//     //     </nav>
//     //   </div>
//     // </header> 
   
//   );
// }



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './carousel.css';
 
// export default function Navbar() {
//   return (
//     <header className="header" style={{backgroundColor:'#231447'}}>
//       {/* <div className="container" style={{backgroundColor:'#000033'}}> */}
//       <div className="container" style={{backgroundColor:'#331177'}}>
//         <Link to="/" className="logo">
//           <img
//             alt="Cryptex logo"
//             height="32"
//             src="assets/images/instruction-4.png"
//             width="32"
//           />
//           Digital PayOut
//         </Link>
//         <nav className="navbar" >
//         {/* <nav className="navstyle={{backgroundColor:'#000033', borderRadius:5, padding:5}}bar" style={{backgroundColor:'#000231', borderRadius:5, padding:5}}> */}
//           <ul className="navbar-list">
//             <li className="navbar-item">
//               <Link to="/" className="navbar-link active" >
//                 Home
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/buy-crypto" className="navbar-link" >
//                 Buy Crypto
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/markets" className="navbar-link" >
//                 Markets
//               </Link>
//             </li>
//             {/* <li className="navbar-item">
//               <Link to="/top-gainers" className="navbar-link" >
//                 Top Gainners
//               </Link>
//             </li> */}
//             {/* <li className="navbar-item">
//               <Link to="/top-losers" className="navbar-link" >
//                 Top Losers
//               </Link>
//             </li> */}
//             <li className="navbar-item">
//               <Link to="/blog" className="navbar-link" >
//                 Blog
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/contact-us" className="navbar-link" >
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <button
//           aria-label="Toggle menu"
//           className="nav-toggle-btn"
//           data-nav-toggler=""
//         >
//           <span className="line line-1" />
//           <span className="line line-2" />
//           <span className="line line-3" />
//         </button>
//         <Link to="/login" className="btn btn-outline text-light">
//           Account
//         </Link>
//         <Link to="/register" className="btn btn-outline text-light">
//           Register
//         </Link>
//       </div>
//     </header>
//   <header className="header" style={{ backgroundColor: '#231447' }}>
//   <div className="container-fluid" style={{ backgroundColor: '#331177' }}>
//     <div className="d-flex justify-content-between align-items-center py-2">
//       <Link to="/" className="logo d-flex align-items-center">
//         <img
//           alt="Cryptex logo"
//           height="32"
//           src="assets/images/instruction-4.png"
//           width="32"
//         />
//         <span className="ms-2 text-white">Digital PayOut</span>
//       </Link>
//       <button
//         aria-label="Toggle menu"
//         className="nav-toggle-btn d-lg-none"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//       >
//         <span className="line line-1" />
//         <span className="line line-2" />
//         <span className="line line-3" />
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <nav className="navbar" style={{ backgroundColor: '#000231', borderRadius: 5, padding: 5 }}>
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link to="/" className="nav-link active text-white">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/buy-crypto" className="nav-link text-white">
//                 Buy Crypto
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/markets" className="nav-link text-white">
//                 Markets
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/top-gainers" className="nav-link text-white">
//                 Top Gainers
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/top-losers" className="nav-link text-white">
//                 Top Losers
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/blog" className="nav-link text-white">
//                 Blog
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/contact-us" className="nav-link text-white">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div className="d-none d-lg-flex gap-2">
//         <Link to="/login" className="btn btn-outline-light">
//           Account
//         </Link>
//         <Link to="/register" className="btn btn-outline-light">
//           Register
//         </Link>
//       </div>
//     </div>
//   </div>
// </header>

//   );
// }




// import React from 'react'

// export default function Navbar() {
//   return (
//     <header
//   className="header"
//   data-header=""
// >
//   <div className="container">
//     <a
//       className="logo"
//       href="#"
//     >
//       <img
//         alt="Cryptex logo"
//         height="32"
//         src="assets/images/logo.svg"
//         width="32"
//       />
//       Digital PayOut
//     </a>
//     <nav
//       className="navbar"
//       data-navbar=""
//     >
//       <ul className="navbar-list">
//         <li className="navbar-item">
//           <a
//             className="navbar-link active"
//             data-nav-link=""
//             href="index2.html"
//           >
//             Home
//           </a>
//         </li>
//         <li className="navbar-item">
//           <a
//             className="navbar-link"
//             data-nav-link=""
//             href="market.html"
//           >
//             Buy Crypto
//           </a>
//         </li>
//         <li className="navbar-item">
//           <a
//             className="navbar-link"
//             data-nav-link=""
//             href="market.html"
//           >
//             Markets
//           </a>
//         </li>
//         <li className="navbar-item">
//           <a
//             className="navbar-link"
//             data-nav-link=""
//             href="market.html"
//           >
//             Top Gainners{' '}
//           </a>
//         </li>
//         <li className="navbar-item">
//           <a
//             className="navbar-link"
//             data-nav-link=""
//             href="market.html"
//           >
//             Top Losers
//           </a>
//         </li>
//         <li className="navbar-item">
//           <a
//             className="navbar-link"
//             data-nav-link=""
//             href="#"
            
//           >
//             Blog
//           </a>
//         </li>
//       </ul>
//     </nav>
//     <button
//       aria-label="Toggle menu"
//       className="nav-toggle-btn"
//       data-nav-toggler=""
//     >
//       <span className="line line-1" />
//       <span className="line line-2" />
//       <span className="line line-3" />
//     </button>
//     <a
//       className="btn btn-outline"
//       href="http://localhost:3000/login"
//     >
//       Account
//     </a>
//     <a
//       className="btn btn-outline"
//       href="register2.html"
//     >
//       Register
//     </a>
//   </div>
// </header>
//   )
// }
