import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CryptoNewsBlog = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [trendingNews, setTrendingNews] = useState([]);
  const [recentNews, setRecentNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const latestResponse = await axios.get('https://www.digitalspayout.com/api/cryptonews/news');
        setLatestNews(latestResponse.data.cryptoNews || []);
        
        // const trendingResponse = await axios.get('https://www.digitalspayout.com/api/cryptonews/news/trending');
        // setTrendingNews(trendingResponse.data.cryptoNews || []);
        
        // const recentResponse = await axios.get('https://www.digitalspayout.com/api/cryptonews/news/recent');
        // setRecentNews(recentResponse.data.cryptoNews || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);


  
  const testimonials = [  
    { id: 1,
      image: 'assets/images/testimonial/crto1.jpg',  
      name: 'Bryan Adams',  
      description: 'Digital PayOut is the easiest, safest, and fastest way to buy & sell crypto asset exchange.',  
      link: '#',  
    },  
    { id: 2, 
      image: 'assets/images/testimonial/cert2.jpg',  
      name: 'David Johnson',  
      description: 'Thanks to Digital PayOut, I\'ve been able to diversify my investment portfolio with ease. Their platform is top-notch!',  
      link: '#',  
    },  
    { id: 3,
      image: 'assets/images/testimonial/cf3.jpg',  
      name: 'Jan Johnson',  
      description: 'Thanks to Digital PayOut, I\'ve been able to diversify my investment portfolio with ease. Their platform is top-notch!',  
      link: '#',  
    },  
    // Add more testimonials as needed  
  ];




  const renderCard = (news, index) => (
    <div className="col-md-4 mb-3" key={index}  style={{backgroundColor:'#fff', padding:5, margin:5, }}>
      <div className="card h-100"  style={{backgroundColor:'#331177'}}>
        <img src={news.imageUrl} className="card-img-top text-white" alt={news.title} />
        <div className="card-body">
          <h5 className="card-title text-white">{news.title}</h5>
          <p className="card-text text-white">{news.content}</p>
          <Link to={`/blog/${news.id}`} className="btn btn-primary">Read More</Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container section hero">
      <div className="row mt-4">
        <div className="col-lg-8" >
          <div className="row" >
            {latestNews.map((news, index) => renderCard(news, index))}
            {/* {trendingNews.map((news, index) => renderCard(news, index))} */}
            {/* {recentNews.map((news, index) => renderCard(news, index))} */}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="mb-4">
            <h4 className="mb-3 text-white"  style={{backgroundColor:'#331177'}}>Testimonials</h4>
            {testimonials.map((testimonial, index) => (
              <div className="card mb-3" key={index}  style={{backgroundColor:'#331177'}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={testimonial.image} className="img-fluid rounded-start" alt={testimonial.name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-white">{testimonial.name}</h5>
                      <p className="card-text text-white">{testimonial.description}</p>
                      <Link to={`/testimonial/${testimonial.id}`} className="btn btn-outline-primary">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   
   
   
  );
};

export default CryptoNewsBlog;


// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// // import './CryptoNewsBlog.css'; 
// // import './testimonial-carousel.css';

// const CryptoNewsBlog = () => {
//   const [latestNews, setLatestNews] = useState([]);
//   const [trendingNews, setTrendingNews] = useState([]);
//   const [recentNews, setRecentNews] = useState([]);
//   // const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     // Fetch news data from the API
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get('https://www.digitalspayout.com/api/cryptonews/news');
//         const newsData = response.data;
//         // Assuming the API returns the news data in an array
//         // You may need to adjust the code according to the actual API response format

//         setLatestNews(newsData.latest);
//         // setTrendingNews(newsData.trending);
//         // setRecentNews(newsData.recent);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     fetchNews();
//   }, []);


//   const testimonials = [  
//     { id: 1,
//       image: 'assets/images/testimonial/crto1.jpg',  
//       name: 'Bryan Adams',  
//       description: 'Digital PayOut is the easiest, safest, and fastest way to buy & sell crypto asset exchange.',  
//       link: '#',  
//     },  
//     { id: 2, 
//       image: 'assets/images/testimonial/cert2.jpg',  
//       name: 'David Johnson',  
//       description: 'Thanks to Digital PayOut, I\'ve been able to diversify my investment portfolio with ease. Their platform is top-notch!',  
//       link: '#',  
//     },  
//     { id: 3,
//       image: 'assets/images/testimonial/cf3.jpg',  
//       name: 'Jan Johnson',  
//       description: 'Thanks to Digital PayOut, I\'ve been able to diversify my investment portfolio with ease. Their platform is top-notch!',  
//       link: '#',  
//     },  
//     // Add more testimonials as needed  
//   ];


//   const renderCarouselItem = (news, index) => (
//     <Carousel.Item key={index}>
//       <div className="carousel-image" style={{ backgroundImage: `url(${news.image})` }}>
//         <div className="hero-content text-center">
//           <h1 className="h1 hero-title text-success">{news.title}</h1>
//           <p className="hero-text text-light caption-center text-success">{news.description}</p>
//           <a href={news.url} className="btn btn-primary mt-5 text-success">Read more</a>
//         </div>
//       </div>
//     </Carousel.Item>
//   );

//   const renderCard = (news, index) => (
//     <div className="col-md-4 mb-3" key={index}>
//       <div className="card h-100">
//         <img src={news.image} className="card-img-top" alt={news.title} />
//         <div className="card-body">
//           <h5 className="card-title">{news.title}</h5>
//           <p className="card-text">{news.description}</p>
//           <Link to={`/blog/${news.id}`} className="btn btn-primary">Read More</Link>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="container mt-4">
//       <Carousel>
//         {latestNews.map(renderCarouselItem)}
//       </Carousel>
//       <div className="row mt-4">
//         {/* Blog Content Partition */}
//         <div className="col-lg-8">
//           <div className="row">
//             {latestNews.map(renderCard)}
           
//           </div>
//         </div>

//         {/* Aside Content Partition */}
//         <div className="col-lg-4">
//           <div className="mb-4">
//             <h4 className="mb-3">Testimonials</h4>
//             {testimonials.map((testimonial, index) => (
//               <div className="card mb-3" key={index}>
//                 <div className="row g-0">
//                   <div className="col-md-4">
//                     <img src={testimonial.image} className="img-fluid rounded-start" alt={testimonial.name} />
//                   </div>
//                   <div className="col-md-8">
//                     <div className="card-body">
//                       <h5 className="card-title">{testimonial.name}</h5>
//                       <p className="card-text">{testimonial.description}</p>
//                       <Link to={`testimonial/${testimonial.id}`} className="btn btn-outline-primary">Learn More</Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CryptoNewsBlog;


// import React, { useState } from 'react';
// import { Carousel } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// // import './CryptoNewsBlog.css'; 
// // import './testimonial-carousel.css';

// const CryptoNewsBlog = () => {
//   const [latestNews, setLatestNews] = useState([
//     { id: 1,
//       title: 'Bitcoin Reaches New All-Time High',
//       description: 'Bitcoin has surged to a new all-time high, surpassing $60,000.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-13T08:00:00Z',
//       author: 'John Doe'
//     },
//     { id: 2,
//       title: 'Bitcoin Reaches New All-Time High 2',
//       description: 'Bitcoin has surged to a new all-time high, surpassing $60,000.',
//       url: '#',
//       image: 'assets/images/testimonial/cer5.jpg',
//       createdAt: '2024-07-13T08:00:00Z',
//       author: 'John Doe'
//     },
//     { id: 3,
//       title: 'Bitcoin Reaches New All-Time High 3',
//       description: 'Bitcoin has surged to a new all-time high, surpassing $60,000.',
//       url: '#',
//       image: 'assets/images/testimonial/cert2.jpg',
//       createdAt: '2024-07-13T08:00:00Z',
//       author: 'John Doe'
//     },
//     // Add more articles as needed
//   ]);

//   const [trendingNews, setTrendingNews] = useState([
//     { id: 1,
//       title: 'Litecoin Adoption Grows 4',
//       description: 'More merchants are now accepting Litecoin as a form of payment.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-12T10:30:00Z',
//       author: 'Jane Smith'
//     },
//     { id: 2,
//       title: 'Litecoin Adoption Grows 5',
//       description: 'More merchants are now accepting Litecoin as a form of payment.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-12T10:30:00Z',
//       author: 'Jane Smith'
//     },
//     { id: 3,
//       title: 'Litecoin Adoption Grows 6',
//       description: 'More merchants are now accepting Litecoin as a form of payment.',
//       url: '#',
//       image: 'assets/images/testimonial/crt6.jpg',
//       createdAt: '2024-07-12T10:30:00Z',
//       author: 'Jane Smith'
//     },
//     // Add more articles as needed
//   ]);

//   const [recentNews, setRecentNews] = useState([
//     { id: 1,
//       title: 'Binance Faces Regulatory Scrutiny 7',
//       description: 'Binance is facing increased regulatory scrutiny in multiple countries.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-11T15:45:00Z',
//       author: 'Michael Brown'
//     },
//     { id: 2,
//       title: 'Binance Faces Regulatory Scrutiny 8',
//       description: 'Binance is facing increased regulatory scrutiny in multiple countries.',
//       url: '#',
//       image: 'assets/images/testimonial/crt2.jpg',
//       createdAt: '2024-07-11T15:45:00Z',
//       author: 'Michael Brown'
//     },
//     { id: 3,
//       title: 'Binance Faces Regulatory Scrutiny',
//       description: 'Binance is facing increased regulatory scrutiny in multiple countries.',
//       url: '#',
//       image: 'assets/images/testimonial/cf3.jpg',
//       createdAt: '2024-07-11T15:45:00Z',
//       author: 'Michael Brown'
//     },
//     // Add more articles as needed
//   ]);

//   const testimonials = [  
//     { id: 1,
//       image: 'assets/images/testimonial/crto1.jpg',  
//       name: 'Bryan Adams',  
//       description: 'Digital PayOut is the easiest, safest, and fastest way to buy & sell crypto asset exchange.',  
//       link: '#',  
//     },  
//     { id: 2, 
//       image: 'assets/images/testimonial/cert2.jpg',  
//       name: 'David Johnson',  
//       description: 'Thanks to Digital PayOut, I\'ve been able to diversify my investment portfolio with ease. Their platform is top-notch!',  
//       link: '#',  
//     },  
//     { id: 3,
//       image: 'assets/images/testimonial/cf3.jpg',  
//       name: 'Jan Johnson',  
//       description: 'Thanks to Digital PayOut, I\'ve been able to diversify my investment portfolio with ease. Their platform is top-notch!',  
//       link: '#',  
//     },  
//     // Add more testimonials as needed  
//   ];

//   const renderCarouselItem = (news, index) => (
//     // <Carousel.Item key={index} style={{ backgroundImage: `url(${news.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//     //   <Carousel.Caption>
//     //     <h3>{news.title}</h3>
//     //   </Carousel.Caption>
//     // </Carousel.Item>
//     <Carousel.Item key={index}>
//                 <div className="carousel-image" style={{ backgroundImage: `url(${'assets/images/testimonial/crto1.jpg'})` }}>
//                   <div className="hero-content text-center">
//                     <h1 className="h1 hero-title text-success">{news.title}</h1>
//                     <p className="hero-text text-light caption-center text-success">{news.description}</p>
//                     <a href={news.url} className="btn btn-primary mt-5 text-success">Read more</a>
//                   </div>
//                 </div>
//               </Carousel.Item>
//   );

//   const renderCard = (news, index) => (
//     <div className="col-md-4 mb-3" key={index}>
//       <div className="card h-100">
//         <img src={news.image} className="card-img-top" alt={news.title} />
//         <div className="card-body">
//           <h5 className="card-title">{news.title}</h5>
//           <p className="card-text">{news.description}</p>
//           <Link to={`/blog/${news.id}`} className="btn btn-primary">Read More</Link>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="container mt-4">
//       {/* <Carousel>
//         {latestNews.map(renderCarouselItem)}
//       </Carousel> */}
//       <div className="row mt-4">
//         {/* Blog Content Partition */}
//         <div className="col-lg-8">
//           <div className="row">
//             {latestNews.map(renderCard)}
//             {trendingNews.map(renderCard)}
//             {recentNews.map(renderCard)}
//           </div>
//         </div>

//         {/* Aside Content Partition */}
//         <div className="col-lg-4">
//           <div className="mb-4">
//             <h4 className="mb-3">Testimonials</h4>
//             {testimonials.map((testimonial, index) => (
//               <div className="card mb-3" key={index}>
//                 <div className="row g-0">
//                   <div className="col-md-4">
//                     <img src={testimonial.image} className="img-fluid rounded-start" alt={testimonial.name} />
//                   </div>
//                   <div className="col-md-8">
//                     <div className="card-body">
//                       <h5 className="card-title">{testimonial.name}</h5>
//                       <p className="card-text">{testimonial.description}</p>
//                       <Link href={`testimonial/${testimonial.id}`} className="btn btn-outline-primary">Learn More</Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CryptoNewsBlog;


// import React, { useState } from 'react';
// import { Carousel } from 'react-bootstrap';
// import './CryptoNewsBlog.css'; 
// import './testimonial-carousel.css';

// const CryptoNewsBlog = () => {
//   const [latestNews, setLatestNews] = useState([
//     {
//       title: 'Bitcoin Reaches New All-Time High',
//       description: 'Bitcoin has surged to a new all-time high, surpassing $60,000.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-13T08:00:00Z',
//       author: 'John Doe'
//     },
//     {
//       title: 'Bitcoin Reaches New All-Time High 2',
//       description: 'Bitcoin has surged to a new all-time high, surpassing $60,000.',
//       url: '#',
//       image: 'assets/images/testimonial/cer5.jpg',
//       createdAt: '2024-07-13T08:00:00Z',
//       author: 'John Doe'
//     },
//     {
//       title: 'Bitcoin Reaches New All-Time High 3',
//       description: 'Bitcoin has surged to a new all-time high, surpassing $60,000.',
//       url: '#',
//       image: 'assets/images/testimonial/cert2.jpg',
//       createdAt: '2024-07-13T08:00:00Z',
//       author: 'John Doe'
//     },
//     // Add more articles as needed
//   ]);

//   const [trendingNews, setTrendingNews] = useState([
//     {
//       title: 'Litecoin Adoption Grows 4',
//       description: 'More merchants are now accepting Litecoin as a form of payment.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-12T10:30:00Z',
//       author: 'Jane Smith'
//     },
//     {
//       title: 'Litecoin Adoption Grows 5',
//       description: 'More merchants are now accepting Litecoin as a form of payment.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-12T10:30:00Z',
//       author: 'Jane Smith'
//     },
//     {
//       title: 'Litecoin Adoption Grows 6',
//       description: 'More merchants are now accepting Litecoin as a form of payment.',
//       url: '#',
//       image: 'assets/images/testimonial/crt6.jpg',
//       createdAt: '2024-07-12T10:30:00Z',
//       author: 'Jane Smith'
//     },
//     // Add more articles as needed
//   ]);

//   const [recentNews, setRecentNews] = useState([
//     {
//       title: 'Binance Faces Regulatory Scrutiny 7',
//       description: 'Binance is facing increased regulatory scrutiny in multiple countries.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-11T15:45:00Z',
//       author: 'Michael Brown'
//     },
//     {
//       title: 'Binance Faces Regulatory Scrutiny 8',
//       description: 'Binance is facing increased regulatory scrutiny in multiple countries.',
//       url: '#',
//       image: 'assets/images/testimonial/crt2.jpg',
//       createdAt: '2024-07-11T15:45:00Z',
//       author: 'Michael Brown'
//     },
//     {
//       title: 'Binance Faces Regulatory Scrutiny',
//       description: 'Binance is facing increased regulatory scrutiny in multiple countries.',
//       url: '#',
//       image: 'assets/images/testimonial/cf3.jpg',
//       createdAt: '2024-07-11T15:45:00Z',
//       author: 'Michael Brown'
//     },
//     // Add more articles as needed
//   ]);

//   const testimonials = [  
//     {  
//       image: 'assets/images/testimonial/crto1.jpg',  
//       name: 'Bryan Adams',  
//       description: 'Digital PayOut is the easiest, safest, and fastest way to buy & sell crypto asset exchange.',  
//       link: '#',  
//     },  
//     {  
//       image: 'assets/images/testimonial/cert2.jpg',  
//       name: 'David Johnson',  
//       description: 'Thanks to Digital PayOut, I\'ve been able to diversify my investment portfolio with ease. Their platform is top-notch!',  
//       link: '#',  
//     },  
//     {  
//       image: 'assets/images/testimonial/cf3.jpg',  
//       name: 'Jan Johnson',  
//       description: 'Thanks to Digital PayOut, I\'ve been able to diversify my investment portfolio with ease. Their platform is top-notch!',  
//       link: '#',  
//     },  
//     // Add more testimonials as needed  
//   ];

//   const renderCard = (news) => (
//     <div className="col-12 col-md-6 col-lg-4 mb-4" key={news.title}>
//       <div className="card">
//         <img src={news.image} className="card-img-top" alt={news.title} />
//         <div className="card-body">
//           <h5 className="card-title">{news.title}</h5>
//           <p className="card-text">{news.description}</p>
//           <p className="card-text">
//             <small className="text-muted">By {news.author} on {new Date(news.createdAt).toLocaleDateString()}</small>
//           </p>
//           <a href={news.url} className="btn btn-primary">Read More</a>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="container mt-4">
//       {/* News Headlines Slider */}
//       <Carousel>
//         {latestNews.map((news, index) => (
//           <Carousel.Item key={index} className="carousel-item">
//             <img className="d-block w-100" src={news.image} alt={news.title} />
//             <Carousel.Caption>
//               <h3>{news.title}</h3>
//               <p>{news.description}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>

//       <div className="row mt-4">
//         {/* Blog Content Partition */}
//         <div className="col-lg-8">
//           <div className="row">
//             {latestNews.map(renderCard)}
//             {trendingNews.map(renderCard)}
//             {recentNews.map(renderCard)}
//           </div>
//         </div>

//         {/* Aside Content Partition */}
//         <div className="col-lg-4">
//           <div className="mb-4">
//             <h4 className="mb-3">Testimonials</h4>
//             {testimonials.map((testimonial, index) => (
//               <div className="card mb-3" key={index}>
//                 <div className="row g-0">
//                   <div className="col-md-4">
//                     <img src={testimonial.image} className="img-fluid rounded-start" alt={testimonial.name} />
//                   </div>
//                   <div className="col-md-8">
//                     <div className="card-body">
//                       <h5 className="card-title">{testimonial.name}</h5>
//                       <p className="card-text">{testimonial.description}</p>
//                       <a href={testimonial.link} className="btn btn-outline-primary">Learn More</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CryptoNewsBlog;


// import React, { useState } from 'react';
// import { Carousel } from 'react-bootstrap';
// import './CryptoNewsBlog.css'; 
// import './testimonial-carousel.css';

// const CryptoNewsBlog = () => {
//   const [latestNews, setLatestNews] = useState([
//     {
//       title: 'Bitcoin Reaches New All-Time High',
//       description: 'Bitcoin has surged to a new all-time high, surpassing $60,000.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-13T08:00:00Z',
//       author: 'John Doe'
//     },
//     {
//       title: 'Bitcoin Reaches New All-Time High 2',
//       description: 'Bitcoin has surged to a new all-time high, surpassing $60,000.',
//       url: '#',
//       image: 'assets/images/testimonial/cer5.jpg',
//       createdAt: '2024-07-13T08:00:00Z',
//       author: 'John Doe'
//     },
//     {
//       title: 'Bitcoin Reaches New All-Time High 3',
//       description: 'Bitcoin has surged to a new all-time high, surpassing $60,000.',
//       url: '#',
//       image: 'assets/images/testimonial/cert2.jpg',
//       createdAt: '2024-07-13T08:00:00Z',
//       author: 'John Doe'
//     },
//     // Add more articles as needed
//   ]);

//   const [trendingNews, setTrendingNews] = useState([
//     {
//       title: 'Litecoin Adoption Grows 4',
//       description: 'More merchants are now accepting Litecoin as a form of payment.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-12T10:30:00Z',
//       author: 'Jane Smith'
//     },
//     {
//       title: 'Litecoin Adoption Grows 5',
//       description: 'More merchants are now accepting Litecoin as a form of payment.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-12T10:30:00Z',
//       author: 'Jane Smith'
//     },
//     {
//       title: 'Litecoin Adoption Grows 6',
//       description: 'More merchants are now accepting Litecoin as a form of payment.',
//       url: '#',
//       image: 'assets/images/testimonial/crt6.jpg',
//       createdAt: '2024-07-12T10:30:00Z',
//       author: 'Jane Smith'
//     },
//     // Add more articles as needed
//   ]);

//   const [recentNews, setRecentNews] = useState([
//     {
//       title: 'Binance Faces Regulatory Scrutiny 7',
//       description: 'Binance is facing increased regulatory scrutiny in multiple countries.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-11T15:45:00Z',
//       author: 'Michael Brown'
//     },
//     {
//       title: 'Binance Faces Regulatory Scrutiny 8',
//       description: 'Binance is facing increased regulatory scrutiny in multiple countries.',
//       url: '#',
//       image: 'assets/images/testimonial/crt2.jpg',
//       createdAt: '2024-07-11T15:45:00Z',
//       author: 'Michael Brown'
//     },
//     {
//       title: 'Binance Faces Regulatory Scrutiny',
//       description: 'Binance is facing increased regulatory scrutiny in multiple countries.',
//       url: '#',
//       image: 'assets/images/testimonial/cf3.jpg',
//       createdAt: '2024-07-11T15:45:00Z',
//       author: 'Michael Brown'
//     },
//     // Add more articles as needed
//   ]);

//   const testimonials = [  
//     {  
//       image: 'assets/images/testimonial/crto1.jpg',  
//       name: 'Bryan Adams',  
//       description: 'Digital PayOut is the easiest, safest, and fastest way to buy & sell crypto asset exchange.',  
//       link: '#',  
//     },  
//     {  
//       image: 'assets/images/testimonial/cert2.jpg',  
//       name: 'David Johnson',  
//       description: 'Thanks to Digital PayOut, I\'ve been able to diversify my investment portfolio with ease. Their platform is top-notch!',  
//       link: '#',  
//     },  
//     {  
//       image: 'assets/images/testimonial/cf3.jpg',  
//       name: 'Jan Johnson',  
//       description: 'Thanks to Digital PayOut, I\'ve been able to diversify my investment portfolio with ease. Their platform is top-notch!',  
//       link: '#',  
//     },  
//     // Add more testimonials as needed  
//   ];

//   const renderCard = (news) => (
//     <div className="col-12 col-md-6 col-lg-4 mb-4" key={news.title}>
//       <div className="card">
//         <img src={news.image} className="card-img-top" alt={news.title} />
//         <div className="card-body">
//           <h5 className="card-title">{news.title}</h5>
//           <p className="card-text">{news.description}</p>
//           <p className="card-text">
//             <small className="text-muted">By {news.author} on {new Date(news.createdAt).toLocaleDateString()}</small>
//           </p>
//           <a href={news.url} className="btn btn-primary">Read More</a>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="container mt-0">
//       {/* News Headlines Slider */}
//       <Carousel style={{backgroundColor:'#000033', color:"#fff"}}>
//         {latestNews.map((news, index) => (
//           <Carousel.Item key={index}>
//               <h3 style={{color:"#000033"}}>{news.title}</h3>
//             {/* <img className="d-block w-100" src={news.image} alt={news.title}  height="20" /> */}
//             {/* <Carousel.Caption> */}
//               <h3 style={{color:"#000033"}}>{news.title}</h3>
//               {/* <p>{news.description}</p> */}
//             {/* </Carousel.Caption> */}
//           </Carousel.Item>
//         ))}
//       </Carousel>

//       <div className="row mt-4">
//         {/* Blog Content Partition */}
//         <div className="col-lg-8">
//           <div className="row">
//             {latestNews.map(renderCard)}
//             {trendingNews.map(renderCard)}
//             {recentNews.map(renderCard)}
//           </div>
//         </div>

//         {/* Aside Content Partition */}
//         <div className="col-lg-4">
//           <div className="mb-4">
//             <h4 className="mb-3">Testimonials</h4>
//             {testimonials.map((testimonial, index) => (
//               <div className="card mb-3" key={index}>
//                 <div className="row g-0">
//                   <div className="col-md-4">
//                     <img src={testimonial.image} className="img-fluid rounded-start" alt={testimonial.name} />
//                   </div>
//                   <div className="col-md-8">
//                     <div className="card-body">
//                       <h5 className="card-title">{testimonial.name}</h5>
//                       <p className="card-text">{testimonial.description}</p>
//                       <a href={testimonial.link} className="btn btn-outline-primary">Learn More</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CryptoNewsBlog;


// import React, { useState } from 'react';
// import { Carousel } from 'react-bootstrap';
// import './CryptoNewsBlog.css'; 
// import './testimonial-carousel.css';

// const CryptoNewsBlog = () => {
//   const [latestNews, setLatestNews] = useState([
//     {
//       title: 'Bitcoin Reaches New All-Time High',
//       description: 'Bitcoin has surged to a new all-time high, surpassing $60,000.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-13T08:00:00Z',
//       author: 'John Doe'
//     },
//     {
//       title: 'Bitcoin Reaches New All-Time High 2',
//       description: 'Bitcoin has surged to a new all-time high, surpassing $60,000.',
//       url: '#',
//       image: 'assets/images/testimonial/cer5.jpg',
//       createdAt: '2024-07-13T08:00:00Z',
//       author: 'John Doe'
//     },
//     {
//       title: 'Bitcoin Reaches New All-Time High 3',
//       description: 'Bitcoin has surged to a new all-time high, surpassing $60,000.',
//       url: '#',
//       image: 'assets/images/testimonial/cert2.jpg',
//       createdAt: '2024-07-13T08:00:00Z',
//       author: 'John Doe'
//     },
//     // Add more articles as needed
//   ]);

//   const [trendingNews, setTrendingNews] = useState([
//     {
//       title: 'Litecoin Adoption Grows 4',
//       description: 'More merchants are now accepting Litecoin as a form of payment.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-12T10:30:00Z',
//       author: 'Jane Smith'
//     },
//     {
//       title: 'Litecoin Adoption Grows 5',
//       description: 'More merchants are now accepting Litecoin as a form of payment.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-12T10:30:00Z',
//       author: 'Jane Smith'
//     },
//     {
//       title: 'Litecoin Adoption Grows 6',
//       description: 'More merchants are now accepting Litecoin as a form of payment.',
//       url: '#',
//       image: 'assets/images/testimonial/crt6.jpg',
//       createdAt: '2024-07-12T10:30:00Z',
//       author: 'Jane Smith'
//     },
//     // Add more articles as needed
//   ]);

//   const [recentNews, setRecentNews] = useState([
//     {
//       title: 'Binance Faces Regulatory Scrutiny 7',
//       description: 'Binance is facing increased regulatory scrutiny in multiple countries.',
//       url: '#',
//       image: 'assets/images/testimonial/crto1.jpg',
//       createdAt: '2024-07-11T15:45:00Z',
//       author: 'Michael Brown'
//     },
//     {
//       title: 'Binance Faces Regulatory Scrutiny 8',
//       description: 'Binance is facing increased regulatory scrutiny in multiple countries.',
//       url: '#',
//       image: 'assets/images/testimonial/crt2.jpg',
//       createdAt: '2024-07-11T15:45:00Z',
//       author: 'Michael Brown'
//     },
//     {
//       title: 'Binance Faces Regulatory Scrutiny',
//       description: 'Binance is facing increased regulatory scrutiny in multiple countries.',
//       url: '#',
//       image: 'assets/images/testimonial/cf3.jpg',
//       createdAt: '2024-07-11T15:45:00Z',
//       author: 'Michael Brown'
//     },
//     // Add more articles as needed
//   ]);

//   const testimonials = [  
//     {  
//       image: 'assets/images/testimonial/crto1.jpg',  
//       name: 'Bryan Adams',  
//       description: 'Digital PayOut is the easiest, safest, and fastest way to buy &amp; sell crypto asset exchange.',  
//       link: '#',  
//     },  
//     {  
//       image: 'assets/images/testimonial/cert2.jpg',  
//       name: 'David Johnson',  
//       description: 'Thanks to Digital PayOut, I\'ve been able to diversify my investment portfolio with ease. Their platform is top-notch!',  
//       link: '#',  
//     },  
//     {  
//       image: 'assets/images/testimonial/cf3.jpg',  
//       name: 'Jan Johnson',  
//       description: 'Thanks to Digital PayOut, I\'ve been able to diversify my investment portfolio with ease. Their platform is top-notch!',  
//       link: '#',  
//     },  
//     // Add more testimonials as needed  
//   ];

//   const renderCard = (news) => (
//     <div className="col-12 col-md-6 col-lg-4 mb-4" key={news.title}>
//       <div className="card">
//         <img src={news.image} className="card-img-top" alt={news.title} />
//         <div className="card-body">
//           <h5 className="card-title">{news.title}</h5>
//           <p className="card-text">{news.description}</p>
//           <p className="card-text">
//             <small className="text-muted">By {news.author} on {new Date(news.createdAt).toLocaleDateString()}</small>
//           </p>
//           <a href={news.url} className="btn btn-success">Read More</a>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {/* Blog Content Partition */}
//         <div className="col-lg-8">
//           <div className="row">
//             {latestNews.map(renderCard)}
//             {trendingNews.map(renderCard)}
//             {recentNews.map(renderCard)}
//           </div>
//         </div>

//         {/* Aside Content Partition */}
//         <div className="col-lg-4">
//           <div className="mb-4">
//             <h4 className="mb-3">Testimonials</h4>
//             {testimonials.map((testimonial, index) => (
//               <div className="card mb-3" key={index}>
//                 <div className="row g-0">
//                   <div className="col-md-4">
//                     <img src={testimonial.image} className="img-fluid rounded-start" alt={testimonial.name} />
//                   </div>
//                   <div className="col-md-8">
//                     <div className="card-body">
//                       <h5 className="card-title">{testimonial.name}</h5>
//                       <p className="card-text">{testimonial.description}</p>
//                       <a href={testimonial.link} className="btn btn-outline-primary">Learn More</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CryptoNewsBlog;

