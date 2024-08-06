import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/frontend/Navbar';
import Footer from '../components/frontend/Footer';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <>
      <Navbar />
      <main className='pt-5 py-5 mt-5 my-5'>
        <article className='pt-2 py-2 mt-2 my-2'>
          <section className="contact" style={{}}>
            <div className="container" style={{ backgroundColor: '#331177' }}>
              <div className="row">
                <div className="col-xl-6 col-md-12">
                  <div className="aside-content">
                    <h3>Contact Information</h3>
                    <p>Address: 123 Awolowo Lane, Ikeja, Lagos</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Email: contact@digitalpayout.com</p>
                  </div>
                  <div className="image" style={{ borderRadius: 100 }}>
                    <img
                      alt="Contact Us"
                      src="assets/images/hero-banner.png"
                      className="img-fluid"
                      style={{ borderRadius: 100 }}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-12">
                  <div className="contact-main">
                    <div className="block-text text-center">
                      <h3 className="heading">
                        Leave a message for Digital Payout
                      </h3>
                      <p className="desc fs-20">
                        Get in touch with us to discuss anything related to Digital Payout.
                      </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <input
                          id="name"
                          name="name"
                          className="form-control p-4 text-bg-secondary "
                          placeholder="Enter your name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          name="email"
                          className="form-control p-4 text-bg-secondary"
                          placeholder="Enter email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          id="subject"
                          name="subject"
                          className="form-control p-4 text-bg-secondary"
                          placeholder="Enter the subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-control text-dark"
                          placeholder="Enter your message "
                          rows="15"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <button
                        className="btn btn-primary"
                        type="submit"
                      >
                        Send message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}


// import React, { useState } from 'react';
// import axios from 'axios';
// import Navbar from '../components/frontend/Navbar';
// import Footer from '../components/frontend/Footer';

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/contact', formData);
//       alert('Message sent!');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send message.');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <main className='pt-5 py-5 mt-5 my-5'>
//         <article className='pt-2 py-2 mt-2 my-2'>
//           <section className="contact" style={{}}>
//             <div className="container" style={{ backgroundColor: '#331177' }}>
//               <div className="row">
//                 <div className="col-xl-6 col-md-12">
//                   <div className="aside-content">
//                     <h3>Contact Information</h3>
//                     <p>Address: 123 Awolowo Lane, Ikeja, Lagos</p>
//                     <p>Phone: +1 (123) 456-7890</p>
//                     <p>Email: contact@digitalpayout.com</p>
//                   </div>
//                   <div className="image" style={{ borderRadius: 100 }}>
//                     <img
//                       alt="Contact Us"
//                       src="assets/images/hero-banner.png"
//                       className="img-fluid"
//                       style={{ borderRadius: 100 }}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-xl-6 col-md-12">
//                   <div className="contact-main">
//                     <div className="block-text text-center">
//                       <h3 className="heading">
//                         Leave a message for Digital Payout
//                       </h3>
//                       <p className="desc fs-20">
//                         Get in touch with us to discuss anything related to Digital Payout.
//                       </p>
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                       <div className="form-group">
//                         <label htmlFor="name">Your name</label>
//                         <input
//                           id="name"
//                           name="name"
//                           className="form-control p-4"
//                           placeholder="Enter your name"
//                           type="text"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                           id="email"
//                           name="email"
//                           className="form-control p-4"
//                           placeholder="Enter email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="subject">Subject</label>
//                         <input
//                           id="subject"
//                           name="subject"
//                           className="form-control p-4"
//                           placeholder="Enter the subject"
//                           type="text"
//                           value={formData.subject}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="message">Message</label>
//                         <textarea
//                           id="message"
//                           name="message"
//                           className="form-control"
//                           placeholder="Enter your message"
//                           rows="15"
//                           value={formData.message}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                       <button
//                         className="btn btn-primary"
//                         type="submit"
//                       >
//                         Send message
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </article>
//       </main>
//       <Footer />
//     </>
//   );
// }


// import React, { useState } from 'react';
// import axios from 'axios';
// import Navbar from '../components/frontend/Navbar';
// import Footer from '../components/frontend/Footer';

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/contact', formData);
//       alert('Message sent!');
//       setFormData({ name: '', email: '', subject: 'NFT Items', message: '' });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send message.');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <main className='pt-5 py-5 mt-5 my-5'>
//         <article className='pt-2 py-2 mt-2 my-2'>
//           <section className="contact" style={{}}>
//             <div className="container" style={{ backgroundColor: '#331177' }}>
//               <div className="row">
//                 <div className="col-xl-6 col-md-12">
//                   <div className="aside-content">
//                     <h3>Contact Information</h3>
//                     <p>Address: 123 Awolowo Lane, Ikeja, Lagos</p>
//                     <p>Phone: +1 (123) 456-7890</p>
//                     <p>Email: contact@digitalpayout.com</p>
//                   </div>
//                   <div className="image" style={{ borderRadius: 100 }}>
//                     <img
//                       alt="Contact Us"
//                       src="assets/images/hero-banner.png"
//                       className="img-fluid"
//                       style={{ borderRadius: 100 }}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-xl-6 col-md-12">
//                   <div className="contact-main">
//                     <div className="block-text text-center">
//                       <h3 className="heading">
//                         Leave a message for Digital Payout
//                       </h3>
//                       <p className="desc fs-20">
//                         Get in touch with us to discuss anything related to Digital Payout.
//                       </p>
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                       <div className="form-group">
//                         <label htmlFor="name">Your name</label>
//                         <input
//                           id="name"
//                           name="name"
//                           className="form-control p-4"
//                           placeholder="Enter your name"
//                           type="text"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                           id="email"
//                           name="email"
//                           className="form-control p-4"
//                           placeholder="Enter email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="subject">Subject</label>
//                         <select
//                           id="subject"
//                           name="subject"
//                           className="form-control p-4"
//                           value={formData.subject}
//                           onChange={handleChange}
//                         >
//                           <option value="NFT Items">NFT Items</option>
//                           <option value="NFT Items 1">NFT Items 1</option>
//                           <option value="NFT Items 2">NFT Items 2</option>
//                         </select>
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="message">Message</label>
//                         <textarea
//                           id="message"
//                           name="message"
//                           className="form-control"
//                           placeholder="Enter your message"
//                           rows="15"
//                           value={formData.message}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                       <button
//                         className="btn btn-primary"
//                         type="submit"
//                       >
//                         Send message
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </article>
//       </main>
//       <Footer />
//     </>
//   );
// }


// import React from 'react';
// import Navbar from '../components/frontend/Navbar';
// import Footer from '../components/frontend/Footer';
// import { Col, Row } from 'react-bootstrap';

// export default function ContactUs() {
//   return (
//     <>
//       <Navbar />
//       <div className='row'>

//       </div>
//       <main className='pt-5 py-5 mt-5 my-5'>
//         <article className='pt-2 py-2 mt-2 my-2'>
            
//         <section className="contact" style={{}}>
//             <div className="container" style={{backgroundColor:'#331177'}}>
//             <div className="row">
//                 <div className="col-xl-6 col-md-12">
//                 {/* <Row md={3}> */}
          
//           <div className="aside-content">
//             <h3>Contact Information</h3>
//             <p>Address: 123 awolowo Lane, Ikeja, Lagos</p>
//             <p>Phone: +1 (123) 456-7890</p>
//             <p>Email: contact@digitalpayout.com</p>
//           </div>
//         {/* </Row> */}
//                 <div className="image" style={{borderRadius:100,}}>
//                     <img
//                     alt="Contact Us"
//                     src="assets/images/hero-banner.png"
//                     className="img-fluid"
//                     style={{borderRadius:100}}
//                     />
//                 </div>
//                 </div>
//                 <div className="col-xl-6 col-md-12">
//                 <div className="contact-main">
//                     <div className="block-text text-center">
//                     <h3 className="heading">
//                         Leave a message for Digital Payout
//                     </h3>
//                     <p className="desc fs-20">
//                         Get in touch with us to discuss anything related to Digital Payout.
//                     </p>
//                     </div>
//                     <form>
//                     <div className="form-group">
//                         <label htmlFor="name">Your name</label>
//                         <input
//                         id="name"
//                         className="form-control p-4"
//                         placeholder="Enter your name"
//                         type="text"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                         id="email"
//                         className="form-control p-4"
//                         placeholder="Enter email"
//                         type="email"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="subject">Subject</label>
//                         <select
//                         id="subject"
//                         className="form-control p-4"
//                         >
//                         <option>NFT Items</option>
//                         <option>NFT Items 1</option>
//                         <option>NFT Items 2</option>
//                         </select>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="message">Message</label>
//                         <textarea
//                         id="message"
//                         className="form-control"
//                         placeholder="Enter your message"
//                         rows="15"
//                         />
//                     </div>
//                     <button
//                         className="btn btn-primary"
//                         type="submit"
//                     >
//                         Send message
//                     </button>
//                     </form>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </section>
    
//         </article>
//       </main>

//       <Footer />
//     </>
//   );
// }
