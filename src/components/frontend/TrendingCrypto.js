// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom'; // Import NavLink if using client-side routing
// import 'bootstrap/dist/css/bootstrap.min.css';

// const TrendingSection = ({ trendingData }) => {
//   return (
//     <section aria-label="crypto trend" className="py-5">
//       <div className="container">
//         <div className="mb-4">
//           <ul className="nav nav-tabs">
//             <li className="nav-item">
//               <NavLink className="nav-link active" to="#">
//                 Crypto
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="#">
//                 DeFi
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="#">
//                 BSC
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="#">
//                 NFT
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="#">
//                 Metaverse
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="#">
//                 Polkadot
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="#">
//                 Solana
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="#">
//                 Opensea
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="#">
//                 Makersplace
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//         <Carousel interval={3000} controls indicators>
//           {trendingData.map((coin, index) => (
//             <Carousel.Item key={index}>
//               <div className="card p-3 mb-3">
//                 <div className="d-flex align-items-center mb-2">
//                   <img
//                     alt={`Logo of ${coin.item.name}`}
//                     src={coin.item.image}
//                     height="24"
//                     width="24"
//                     className="me-2"
//                   />
//                   <NavLink className="text-decoration-none" to="#">
//                     {coin.item.name}{' '}
//                     <span className="text-muted">
//                       {coin.item.symbol.toUpperCase()}/USD
//                     </span>
//                   </NavLink>
//                 </div>
//                 <h5 className="card-title">
//                   USD {coin.item.current_price ? coin.item.current_price.toFixed(2) : 'N/A'}
//                 </h5>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <div>
//                     <span className="text-muted">Current Price:</span>{' '}
//                     <strong>
//                       {coin.item.current_price ? coin.item.current_price.toFixed(2) : 'N/A'}
//                     </strong>
//                   </div>
//                   <span
//                     className={`badge ${coin.item.price_change_percentage_24h && coin.item.price_change_percentage_24h > 0 ? 'bg-success' : 'bg-danger'}`}
//                   >
//                     {coin.item.price_change_percentage_24h ? coin.item.price_change_percentage_24h.toFixed(2) : 'N/A'}%
//                   </span>
//                 </div>
//               </div>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default TrendingSection;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TrendingSection = () => {
//   const [trendingCoins, setTrendingCoins] = useState([]);

//   useEffect(() => {
//     const fetchTrendingCoins = async () => {
//       try {
//         const response = await axios.get('https://api.coingecko.com/api/v3/search/trending?include_platform=false');
//         setTrendingCoins(response.data.coins || []);
//       } catch (error) {
//         console.error('Error fetching trending coins:', error);
//       }
//     };

//     fetchTrendingCoins();
//   }, []);

//   return (
//     <section aria-label="crypto trend" className="section trend">
//       <div className="container">
//         <div className="trend-tab">
//           <ul className="tab-nav">
//             {/* Add your tab buttons here */}
//             <li><button className="tab-btn active">Crypto</button></li>
//             <li><button className="tab-btn">DeFi</button></li>
//             <li><button className="tab-btn">BSC</button></li>
//             <li><button className="tab-btn">NFT</button></li>
//             <li><button className="tab-btn">Metaverse</button></li>
//             <li><button className="tab-btn">Polkadot</button></li>
//             <li><button className="tab-btn">Solana</button></li>
//             <li><button className="tab-btn">Opensea</button></li>
//             <li><button className="tab-btn">Makersplace</button></li>
//           </ul>
//           <ul className="tab-content">
//             {trendingCoins.map((coin) => {
//               // Parse price change percentage to a number
//               const priceChangePercentage = parseFloat(coin.item.price_change_percentage_24h);
              
//               return (
//                 <li key={coin.item.id}>
//                   <div className="trend-card">
//                     <div className="card-title-wrapper">
//                       <img
//                         alt={`${coin.item.name} logo`}
//                         height="24"
//                         src={coin.item.thumb}
//                         width="24"
//                       />
//                       <a className="card-title" href="#">
//                         {coin.item.name}{' '}
//                         <span className="span">
//                           {coin.item.symbol.toUpperCase()}/USD
//                         </span>
//                       </a>
//                     </div>
//                     <data className="card-value" value={coin.item.data.price}>
//                       USD {coin.item.data.price.toLocaleString()}
//                     </data>
//                     <div className="card-analytics">
//                       <data className="current-price" value={coin.item.data.price}>
//                         {coin.item.data.price.toLocaleString()}
//                       </data>
//                       <div className={`badge ${priceChangePercentage > 0 ? 'green' : 'red'}`}>
//                         {priceChangePercentage.toFixed(2)}%
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingSection;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Carousel } from 'react-bootstrap';

// const TrendingSection = () => {
//   const [trendingCoins, setTrendingCoins] = useState([]);

//   useEffect(() => {
//     const fetchTrendingCoins = async () => {
//       try {
//         const response = await axios.get('https://api.coingecko.com/api/v3/search/trending?include_platform=false');
//         setTrendingCoins(response.data.coins || []);
//       } catch (error) {
//         console.error('Error fetching trending coins:', error);
//       }
//     };

//     fetchTrendingCoins();
//   }, []);

//   return (
//     <section aria-label="crypto trend" className="section trend">
//       <div className="container">
//         <div className="trend-tab">
//           <ul className="tab-nav">
//             {/* Add your tab buttons here */}
//             <li><button className="tab-btn active">Crypto</button></li>
//             <li><button className="tab-btn">DeFi</button></li>
//             <li><button className="tab-btn">BSC</button></li>
//             <li><button className="tab-btn">NFT</button></li>
//             <li><button className="tab-btn">Metaverse</button></li>
//             <li><button className="tab-btn">Polkadot</button></li>
//             <li><button className="tab-btn">Solana</button></li>
//             <li><button className="tab-btn">Opensea</button></li>
//             <li><button className="tab-btn">Makersplace</button></li>
//           </ul>
//           <Carousel interval={3000} controls indicators>
//             {trendingCoins.map((coin, index) => {
//               // Parse price change percentage to a number
//               const priceChangePercentage = parseFloat(coin.item.price_change_percentage_24h) || 0;
              
//               return (
//                   <Carousel.Item key={index}>
//                     <> 
//                    <ul className="tab-content">
//                    <li>
//                   <div className="trend-card">
//                     <div className="card-title-wrapper">
//                       <img
//                         alt={`${coin.item.name} logo`}
//                         height="24"
//                         src={coin.item.thumb}
//                         width="24"
//                       />
//                       <a className="card-title" href="#">
//                         {coin.item.name}{' '}
//                         <span className="span">
//                           {coin.item.symbol.toUpperCase()}/USD
//                         </span>
//                       </a>
//                     </div>
//                     <data className="card-value" value={coin.item.data?.price || 0}>
//                       USD {coin.item.data?.price?.toLocaleString() || '0.00'}
//                     </data>
//                     <div className="card-analytics">
//                       <data className="current-price" value={coin.item.data?.price || 0}>
//                         {coin.item.data?.price?.toLocaleString() || '0.00'}
//                       </data>
//                       <div className={`badge ${priceChangePercentage > 0 ? 'green' : 'red'}`}>
//                         {priceChangePercentage.toFixed(2)}%
//                       </div>
//                     </div>
//                   </div>

//                     </li>
//                     </ul>
//                </>
//                 </Carousel.Item>
                 
//               );
//             })}
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingSection;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

const TrendingSection = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending?include_platform=false');
        setTrendingCoins(response.data.coins || []);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  // Group coins into chunks of 3
  const groupedCoins = [];
  for (let i = 0; i < trendingCoins.length; i += 3) {
    groupedCoins.push(trendingCoins.slice(i, i + 3));
  }

  return (
    <section aria-label="crypto trend" className="section trend">
      <div className="container">
        <div className="trend-tab">
          <ul className="tab-nav">
            {/* Add your tab buttons here */}
            <li><button className="tab-btn offset-5"></button></li>
            <li><button className="tab-btn"></button></li>
            <li><button className="tab-btn"></button></li>
            <li><button className="tab-btn"></button></li>
            <li><button className="tab-btn">
              {/* <h1>
              Trending Crypto Currencies

              </h1> */}
        
              </button></li>
            <li><button className="tab-btn"></button></li>
            <li><button className="tab-btn"></button></li>
            <li><button className="tab-btn"></button></li>
            <li><button className="tab-btn"></button></li>
          </ul>
          <Carousel interval={3000} controls indicators>
            {groupedCoins.map((group, groupIndex) => (
              <Carousel.Item key={groupIndex}>
                <div className="carousel-slide-content">
                  <h3 className="carousel-heading">Trending Currencies</h3>
                  <div className="d-flex justify-content-between">
                    {group.map((coin) => {
                      const priceChangePercentage = parseFloat(coin.item.price_change_percentage_24h) || 0;
                      
                      return (
                        <div className="trend-card" key={coin.item.id}>
                          <div className="card-title-wrapper">
                            <img
                              alt={`${coin.item.name} logo`}
                              height="24"
                              src={coin.item.thumb}
                              width="24"
                            />
                            <a className="card-title" href="#">
                              {coin.item.name}{' '}
                              <span className="span">
                                {coin.item.symbol.toUpperCase()}/USD
                              </span>
                            </a>
                          </div>
                          <data className="card-value" value={coin.item.data?.price || 0}>
                            USD {coin.item.data?.price?.toLocaleString() || '0.00'}
                          </data>
                          <div className="card-analytics">
                            <data className="current-price" value={coin.item.data?.price || 0}>
                              {coin.item.data?.price?.toLocaleString() || '0.00'}
                            </data>
                            <div className={`badge ${priceChangePercentage > 0 ? 'green' : 'red'}`}>
                              {priceChangePercentage.toFixed(2)}%
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Carousel } from 'react-bootstrap';

// const TrendingSection = () => {
//   const [trendingCoins, setTrendingCoins] = useState([]);

//   useEffect(() => {
//     const fetchTrendingCoins = async () => {
//       try {
//         const response = await axios.get('https://api.coingecko.com/api/v3/search/trending?include_platform=false');
//         setTrendingCoins(response.data.coins || []);
//       } catch (error) {
//         console.error('Error fetching trending coins:', error);
//       }
//     };

//     fetchTrendingCoins();
//   }, []);

//   // Group coins into chunks of 3
//   const groupedCoins = [];
//   for (let i = 0; i < trendingCoins.length; i += 3) {
//     groupedCoins.push(trendingCoins.slice(i, i + 3));
//   }

//   return (
//     <section aria-label="crypto trend" className="section trend">
//       <div className="container">
//         <div className="trend-tab">
//           <ul className="tab-nav">
//             {/* Add your tab buttons here */}
//             <li><button className="tab-btn active">Crypto</button></li>
//             <li><button className="tab-btn">DeFi</button></li>
//             <li><button className="tab-btn">BSC</button></li>
//             <li><button className="tab-btn">NFT</button></li>
//             <li><button className="tab-btn">Metaverse</button></li>
//             <li><button className="tab-btn">Polkadot</button></li>
//             <li><button className="tab-btn">Solana</button></li>
//             <li><button className="tab-btn">Opensea</button></li>
//             <li><button className="tab-btn">Makersplace</button></li>
//           </ul>
//           <Carousel interval={3000} controls indicators>
//             {groupedCoins.map((group, groupIndex) => (
//               <Carousel.Item key={groupIndex}>
//                 <div className="d-flex justify-content-between">
//                   {group.map((coin, coinIndex) => {
//                     const priceChangePercentage = parseFloat(coin.item.price_change_percentage_24h) || 0;
                    
//                     return (
//                       <div className="trend-card" key={coin.item.id}>
//                         <div className="card-title-wrapper">
//                           <img
//                             alt={`${coin.item.name} logo`}
//                             height="24"
//                             src={coin.item.thumb}
//                             width="24"
//                           />
//                           <a className="card-title" href="#">
//                             {coin.item.name}{' '}
//                             <span className="span">
//                               {coin.item.symbol.toUpperCase()}/USD
//                             </span>
//                           </a>
//                         </div>
//                         <data className="card-value" value={coin.item.data?.price || 0}>
//                           USD {coin.item.data?.price?.toLocaleString() || '0.00'}
//                         </data>
//                         <div className="card-analytics">
//                           <data className="current-price" value={coin.item.data?.price || 0}>
//                             {coin.item.data?.price?.toLocaleString() || '0.00'}
//                           </data>
//                           <div className={`badge ${priceChangePercentage > 0 ? 'green' : 'red'}`}>
//                             {priceChangePercentage.toFixed(2)}%
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingSection;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TrendingCrypto = () => {
//     const [trending, setTrending] = useState([]);
  
//     useEffect(() => {
//       const fetchTrendingData = async () => {
//         try {
//           const response = await axios.get('https://api.coingecko.com/api/v3/search/trending?include_platform=false');
//           setTrending(response.data.coins || []);
//         } catch (error) {
//           console.error('Failed to fetch trending data', error);
//         }
//       };
  
//       fetchTrendingData();
//     }, []);
  
//     return (
//       <section aria-label="crypto trend" className="section trend">
//         <div className="container">
//           <div className="trend-tab">
//             <ul className="tab-nav">
//               {/* Your tab buttons here */}
//             </ul>
//             <ul className="tab-content">
//               {trending.map((coinWrapper) => {
//                 const coin = coinWrapper.item; // Destructure to get the coin object
  
//                 // Safely access properties and handle undefined values
//                 const priceChange = parseFloat(coin.data?.price_change_percentage_24h?.usd) || 0;
//                 const currentPrice = parseFloat(coin.data?.current_price) || 0;
//                 const isPositive = priceChange >= 0;
  
//                 return (
//                   <li key={coin.id}>
//                     <div className={`trend-card ${isPositive ? 'active' : ''}`}>
//                       <div className="card-title-wrapper">
//                         <img
//                           alt={`${coin.name} logo`}
//                           height="24"
//                           src={coin.image}
//                           width="24"
//                         />
//                         <a className="card-title" href="#">
//                           {coin.name} <span className="span">{coin.symbol}/USD</span>
//                         </a>
//                       </div>
//                       <data className="card-value" value={currentPrice}>
//                         USD {currentPrice.toFixed(2)}
//                       </data>
//                       <div className="card-analytics">
//                         <data className="current-price" value={currentPrice}>
//                           {currentPrice.toFixed(2)}
//                         </data>
//                         <div className={`badge ${isPositive ? 'green' : 'red'}`}>
//                           {priceChange.toFixed(2)}%
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </section>

      
//     );
//   };
  
//   export default TrendingCrypto;
  

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const TrendingCrypto = () => {
//   const [trending, setTrending] = useState([]);
//   const [activeTab, setActiveTab] = useState('crypto');

//   useEffect(() => {
//     const fetchTrendingData = async () => {
//       try {
//         const response = await axios.get('https://api.coingecko.com/api/v3/search/trending?include_platform=false');
//         setTrending(response.data.coins);
//       } catch (error) {
//         console.error('Failed to fetch trending data', error);
//       }
//     };

//     fetchTrendingData();
//   }, []);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const renderTrendCard = (coinWrapper) => {
//     const { item: coin } = coinWrapper;
//     const priceChange = coin.data.price_change_percentage_24h.usd.toFixed(2);
//     const isPositive = priceChange >= 0;

//     return (
//       <li key={coin.id}>
//         <div className={`trend-card ${isPositive ? 'active' : ''}`}>
//           <div className="card-title-wrapper">
//             <img
//               alt={`${coin.name} logo`}
//               height="24"
//               src={coin.thumb}
//               width="24"
//             />
//             <a className="card-title" href="#">
//               {coin.name} <span className="span">{coin.symbol}/USD</span>
//             </a>
//           </div>
//           <data className="card-value" value={coin.data.price}>
//             USD {coin.data.price.toFixed(2)}
//           </data>
//           <div className="card-analytics">
//             <data className="current-price" value={coin.data.price}>
//               {coin.data.price.toFixed(2)}
//             </data>
//             <div className={`badge ${isPositive ? 'green' : 'red'}`}>
//               {priceChange}%
//             </div>
//           </div>
//         </div>
//       </li>
//     );
//   };

//   return (
//     <section aria-label="crypto trend" className="section trend">
//       <div className="container">
//         <div className="trend-tab">
//           <ul className="tab-nav">
//             <li>
//               <button
//                 className={`tab-btn ${activeTab === 'crypto' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('crypto')}
//               >
//                 Crypto
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`tab-btn ${activeTab === 'defi' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('defi')}
//               >
//                 DeFi
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`tab-btn ${activeTab === 'bsc' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('bsc')}
//               >
//                 BSC
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`tab-btn ${activeTab === 'nft' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('nft')}
//               >
//                 NFT
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`tab-btn ${activeTab === 'metaverse' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('metaverse')}
//               >
//                 Metaverse
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`tab-btn ${activeTab === 'polkadot' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('polkadot')}
//               >
//                 Polkadot
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`tab-btn ${activeTab === 'solana' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('solana')}
//               >
//                 Solana
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`tab-btn ${activeTab === 'opensea' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('opensea')}
//               >
//                 Opensea
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`tab-btn ${activeTab === 'makersplace' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('makersplace')}
//               >
//                 Makersplace
//               </button>
//             </li>
//           </ul>
//           <ul className="tab-content">
//             {trending.map(renderTrendCard)}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingCrypto;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const TrendingCrypto = () => {
//   const [trending, setTrending] = useState([]);
//   const [activeTab, setActiveTab] = useState('crypto');

//   useEffect(() => {
//     const fetchTrendingData = async () => {
//       try {
//         const response = await axios.get('https://api.coingecko.com/api/v3/search/trending?include_platform=false');
//         setTrending(response.data.coins);
//       } catch (error) {
//         console.error('Failed to fetch trending data', error);
//       }
//     };

//     fetchTrendingData();
//   }, []);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const renderTrendCard = (coinWrapper) => {
//     const { item: coin } = coinWrapper;

//     // Convert price_btc to a number
//     const priceBtc = parseFloat(coin.data.price_btc);
//     const priceChangePercentage24h = parseFloat(coin.data.price_change_percentage_24h.btc);

//     return (
//       <div key={coin.id} className="trend-card card mb-4">
//         <div className="card-body">
//           <div className="d-flex align-items-center mb-2">
//             <img src={coin.thumb} alt={`${coin.name} logo`} height="24" width="24" />
//             <a className="card-title ms-2" href="#">
//               {coin.name} <span className="text-muted">({coin.symbol})</span>
//             </a>
//           </div>
//           <data className="card-value" value={priceBtc}>
//             BTC {priceBtc.toFixed(8)}
//           </data>
//           <div className="card-analytics mt-2">
//             <data className="current-price" value={priceBtc}>
//               {priceBtc.toFixed(8)}
//             </data>
//             <div className={`badge ${priceChangePercentage24h < 0 ? 'bg-danger' : 'bg-success'} ms-2`}>
//               {priceChangePercentage24h.toFixed(2)}%
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section aria-label="crypto trend" className="section trend">
//       <div className="container">
//         <div className="trend-tab">
//           <ul className="nav nav-tabs">
//             <li className="nav-item">
//               <button className={`nav-link ${activeTab === 'crypto' ? 'active' : ''}`} onClick={() => handleTabChange('crypto')}>
//                 Crypto
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className={`nav-link ${activeTab === 'defi' ? 'active' : ''}`} onClick={() => handleTabChange('defi')}>
//                 DeFi
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className={`nav-link ${activeTab === 'bsc' ? 'active' : ''}`} onClick={() => handleTabChange('bsc')}>
//                 BSC
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className={`nav-link ${activeTab === 'nft' ? 'active' : ''}`} onClick={() => handleTabChange('nft')}>
//                 NFT
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" onClick={() => handleTabChange('metaverse')}>
//                 Metaverse
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" onClick={() => handleTabChange('polkadot')}>
//                 Polkadot
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" onClick={() => handleTabChange('solana')}>
//                 Solana
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" onClick={() => handleTabChange('opensea')}>
//                 Opensea
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" onClick={() => handleTabChange('makersplace')}>
//                 Makersplace
//               </button>
//             </li>
//           </ul>
//           <div className="tab-content mt-4">
//             <div className="tab-pane fade show active">
//               {trending.map(renderTrendCard)}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingCrypto;


// import React from 'react';
// import { useAuth } from './AuthContext';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const TrendingCrypto = () => {
//   const { state } = useAuth();
//   const { trending } = state;

//   return (
//     <section aria-label="crypto trend" className="py-5">
//       <div className="container">
//         <div className="trend-tab">
//           <ul className="nav nav-tabs">
//             <li className="nav-item">
//               <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#crypto-tab">Crypto</button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" data-bs-toggle="tab" data-bs-target="#defi-tab">DeFi</button>
//             </li>
//             {/* Add more tabs as needed */}
//           </ul>
//           <div className="tab-content mt-4">
//             <div className="tab-pane fade show active" id="crypto-tab">
//               <div className="row">
//                 {trending && trending.map((coinWrapper, index) => {
//                   const { item: coin } = coinWrapper;
//                   return (
//                     <div key={index} className="col-md-4 mb-4">
//                       <div className="card">
//                         <div className="card-body">
//                           <div className="d-flex align-items-center">
//                             <img src={coin.thumb} alt={`${coin.name} logo`} height="24" width="24" className="me-2" />
//                             <a href="#" className="card-title">{coin.name} <span className="text-muted">({coin.symbol})</span></a>
//                           </div>
//                           <p className="card-text">
//                             <strong>Market Cap Rank:</strong> {coin.market_cap_rank}
//                           </p>
//                           <p className="card-text">
//                             <strong>Price:</strong> ${coin.data.price.toFixed(2)}
//                           </p>
//                           <p className={`card-text ${coin.data.price_change_percentage_24h.usd < 0 ? 'text-danger' : 'text-success'}`}>
//                             <strong>24h Change:</strong> {coin.data.price_change_percentage_24h.usd.toFixed(2)}%
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="tab-pane fade" id="defi-tab"> {/* Add content for DeFi tab */}</div>
//             {/* Add more tab panes as needed */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingCrypto;
