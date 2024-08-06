import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/frontend/Navbar';
import Footer from '../components/frontend/Footer';

const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.digitalspayout.com/api/cryptonews/news/${id}`);
        const data = response.data.cryptoNews;
        if (data) {
          setArticle(data);
        } else {
          setArticle(null);
          setError('No data found');
        }
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!article) {
    return <div>No article found</div>;
  }

  return (
    <>
      <Navbar />
      {/* <section aria-label="about" className="section about" >

          <div className="container mt-4">
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-3">
                  <img src={article.image} className="card-img-top" alt={article.title} />
                  <div className="card-body">
                    <h2 className="card-title">{article.title}</h2>
                    <p className="card-text">{article.content}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        By {article.author} on {new Date(article.createdAt).toLocaleDateString()}
                      </small>
                    </p>
                    <Link to="/" className="btn btn-primary">Back to Blog</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section> */}
      <section aria-label="about" className="section about">
  <div className="container mt-4">
    <div className="row justify-content-center">
      <div className="col-md-12 offset-1">
        <div className="card mb-3 text-center col-md-12 offset-1">
          <img src={article.image} className="card-img-top" alt={article.title} />
          <div className="card-body col-md-12" >
            <h2 className="card-title">{article.title}</h2>
            <p className="card-text">{article.content}</p>
            <p className="card-text">
              <small className="text-muted">
                By {article.author} on {new Date(article.createdAt).toLocaleDateString()}
              </small>
            </p>
            <Link to="/" className="btn btn-primary">Back to Blog</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </>
  );
};

export default BlogDetail;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';
// import Navbar from '../components/frontend/Navbar';
// import Footer from '../components/frontend/Footer';

// const BlogDetail = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     // Simulate fetching data by ID
//     const fetchData = async () => {
//       const response = await axios.get(`https://www.digitalspayout.com/api/cryptonews/news/${id}`);
//        const data = response.data.cryptoNews || [];
//       setArticle(data);
      
//       console.log('====================================');
//       console.log(data);
//       console.log(article);
//       console.log('====================================');
//       // setArticle(data);
//     };

//     fetchData();
//   }, [id]);

//   if (!article) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//     <Navbar />
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-md-12">
//           <div className="card mb-3">
//             <img src={article.image} className="card-img-top" alt={article.title} />
//             <div className="card-body">
//               <h2 className="card-title">{article.title}</h2>
//               <p className="card-text">{article.content}</p>
//               <p className="card-text"><small className="text-muted">By {article.author} on {new Date(article.createdAt).toLocaleDateString()}</small></p>
//               <Link to="/" className="btn btn-primary">Back to Blog</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <Footer />
//     </>
//   );
// };

// export default BlogDetail;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const BlogDetail = () => {
//   const [news, setNews] = useState(null);
//   const { id } = useParams(); // Get the news ID from the route parameters

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(`https://www.digitalspayout.com/api/cryptonews/news/${id}`);
//         setNews(response.data);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     fetchNews();
//   }, [id]);

//   if (!news) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="container mt-4">
//       <div className="card">
//         <img src={news.image} className="card-img-top" alt={news.title} />
//         <div className="card-body">
//           <h5 className="card-title">{news.title}</h5>
//           <p className="card-text">{news.description}</p>
//           <p className="card-text"><small className="text-muted">By {news.author} on {new Date(news.createdAt).toLocaleDateString()}</small></p>
//           <a href={news.url} className="btn btn-primary">Read Full Article</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const BlogDetail = ({ news }) => {
//   const { id } = useParams();
//   // const newsItem = newsList.find((news) => news.title === id);

//   // if (!newsItem) {
//   //   return <div>News article not found.</div>;
//   // }

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-lg-8">
//           <div className="card mb-4">
//             <img src={newsItem.image} className="card-img-top" alt={newsItem.title} />
//             <div className="card-body">
//               <h1 className="card-title">{newsItem.title}</h1>
//               <p className="card-text">{newsItem.description}</p>
//               <div className="d-flex justify-content-between">
//                 <span>By {newsItem.author}</span>
//                 <span>{new Date(newsItem.createdAt).toLocaleDateString()}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-4">
//           <div className="mb-4">
//             <h4 className="mb-3">Related News</h4>
//             {/* {newsList.filter((news) => news.title !== id).map((news, index) => ( */}
//               <div className="card mb-3" >
//                 <div className="row g-0">
//                   <div className="col-md-4">
//                     <img src={news.image} className="img-fluid rounded-start" alt={news.title} />
//                   </div>
//                   <div className="col-md-8">
//                     <div className="card-body">
//                       <h5 className="card-title">{news.title}</h5>
//                       <p className="card-text">{news.description}</p>
//                       <Link to={`/news/${news.title}`} className="btn btn-outline-primary">Read More</Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             {/* ))} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;
