// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/frontend/Navbar'
// import Footer from '../components/frontend/Footer'
// import TrendingCrypto from './../components/frontend/TrendingCrypto'

// // Function to fetch market data from CoinGecko API
// export const getMarketData = async (pageNumber = 1) => {
//   try {
//     const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageNumber}&sparkline=false&price_change_percentage=24h`);
//     return response.data;
//   } catch (e) {
//     console.log(e);
//     return [];
//   }
// };

// const MarketUpdate = () => {
//   const [marketData, setMarketData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const fetchMarketData = async () => {
//       setLoading(true);

//       const cachedData = localStorage.getItem(`marketData_page_${currentPage}`);
//       if (cachedData) {
//         setMarketData(JSON.parse(cachedData));
//         setLoading(false);
//       } else {
//         const data = await getMarketData(currentPage);
//         setMarketData(data);
//         localStorage.setItem(`marketData_page_${currentPage}`, JSON.stringify(data));
//         setLoading(false);
//       }
//     };

//     fetchMarketData();
//   }, [currentPage]);

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//     <Navbar /> 
//     <main className="pt-0 py-0 mt-0 my-0">
//     <article className="pt-0 py-2 mt-0 my-0">
//     <section aria-label="market update" className="section market">
//       <div className="container">
//         <div className="title-wrapper">
//           <h2 className="h2 section-title">Digital PayOut Market Update</h2>
//           <a className="btn-link" href="#">See All Coins</a>
//         </div>
//         <div className="market-tab">
//           <table className="market-table">
//             <thead className="table-head">
//               <tr className="table-row table-title">
//                 <th className="table-heading"></th>
//                 <th className="table-heading" scope="col">#</th>
//                 <th className="table-heading" scope="col">Name</th>
//                 <th className="table-heading" scope="col">Last Price</th>
//                 <th className="table-heading" scope="col">24h %</th>
//                 <th className="table-heading" scope="col">Market Cap</th>
//                 <th className="table-heading" scope="col">Last 7 Days</th>
//                 <th className="table-heading"></th>
//               </tr>
//             </thead>
//             <tbody className="table-body">
//               {marketData.map((coin, index) => (
//                 <tr className="table-row" key={coin.id}>
//                   <td className="table-data">
//                     <button aria-label="Add to favourite" className="add-to-fav">
//                       <ion-icon aria-hidden="true" className="icon-outline" name="star-outline"></ion-icon>
//                       <ion-icon aria-hidden="true" className="icon-fill" name="star"></ion-icon>
//                     </button>
//                   </td>
//                   <th className="table-data rank" scope="row">{index + 1 + (currentPage - 1) * 10}</th>
//                   <td className="table-data">
//                     <div className="wrapper">
//                       <img alt={`${coin.name} logo`} className="img" height="20" src={coin.image} width="20" />
//                       <h3>
//                         <Link className="coin-name" to={`/market/${coin.id}`}>
//                           {coin.name} <span className="span">{coin.symbol.toUpperCase()}</span>
//                         </Link>
//                       </h3>
//                     </div>
//                   </td>
//                   <td className="table-data last-price">${coin.current_price.toLocaleString()}</td>
//                   <td className={`table-data last-update ${coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}`}>
//                     {coin.price_change_percentage_24h.toFixed(2)}%
//                   </td>
//                   <td className="table-data market-cap">${coin.market_cap.toLocaleString()}</td>
//                   <td className="table-data">
//                     <img src={`./assets/images/chart-${index % 2 === 0 ? '1' : '2'}.svg`} className="chart" alt="chart" width="100" height="40" />
//                   </td>
//                   <td className="table-data">
//                     <button className="btn btn-outline">Trade</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="pagination">
//             <button className="btn" onClick={handlePreviousPage} disabled={currentPage === 1}>
//               Previous
//             </button>
//             <span className="page-number">Page {currentPage}</span>
//             <button className="btn" onClick={handleNextPage}>
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section>
//         <div className="title-wrapper text-center">
//           <h1 className="h2 section-title text-center">
//               Trending Crypto
//           </h1>
//         </div>
//         <TrendingCrypto />
//     </section>
//     </article>
//     </main>
//     <Footer />
//      </>
//   );
// };

// export default MarketUpdate;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Function to fetch market data from CoinGecko API
export const getMarketData = async (pageNumber = 1) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageNumber}&sparkline=false&price_change_percentage=24h`);
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const MarketUpdate = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMarketData = async () => {
      setLoading(true);

      // Check localStorage for cached data
      const cachedData = localStorage.getItem(`marketData_page_${currentPage}`);
      if (cachedData) {
        // Use cached data
        setMarketData(JSON.parse(cachedData));
        setLoading(false);
      } else {
        // Fetch data from API and cache it
        const data = await getMarketData(currentPage);
        setMarketData(data);
        localStorage.setItem(`marketData_page_${currentPage}`, JSON.stringify(data));
        setLoading(false);
      }
    };

    fetchMarketData();
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section
      aria-label="market update"
      className="section market"
      style={{
        backgroundColor: '#804080',
        backgroundImage: 'url("/assets/images/fly-coins.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: '#804080',
          backgroundImage: 'url("./assets/images/fly-coins.jpg")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="title-wrapper">
          <h2 className="h2 section-title">Digital PayOut Market Update</h2>
          <a className="btn-link" href="#">See All Coins</a>
        </div>
        <div
          className="market-tab"
          style={{
            backgroundImage: 'url("./assets/images/fly-coins.jpg")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <ul className="tab-nav">
            <li><button className="tab-btn active">View All</button></li>
            <li><button className="tab-btn">Metaverse</button></li>
            <li><button className="tab-btn">Entertainment</button></li>
            <li><button className="tab-btn">Energy</button></li>
            <li><button className="tab-btn">NFT</button></li>
            <li><button className="tab-btn">Gaming</button></li>
            <li><button className="tab-btn">Music</button></li>
          </ul>
          <table
            className="market-table"
            style={{
              backgroundImage: 'url("./assets/images/fly-coins.jpg")',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '448px',
              width: '100%'
            }}
          >
            <thead
              className="table-head"
              style={{
                backgroundColor: '#1815c5'
              }}
            >
              <tr className="table-row table-title">
                <th className="table-heading"></th>
                <th className="table-heading" scope="col">#</th>
                <th className="table-heading" scope="col">Name</th>
                <th className="table-heading" scope="col">Last Price</th>
                <th className="table-heading" scope="col">24h %</th>
                <th className="table-heading" scope="col">Market Cap</th>
                <th className="table-heading" scope="col">Last 7 Days</th>
                <th className="table-heading"></th>
              </tr>
            </thead>
            <tbody className="table-body">
              {marketData.map((coin, index) => (
                
                <tr className="table-row" key={coin.id}>
                    <td className="table-data">
                      <button aria-label="Add to favourite" className="add-to-fav">
                        <ion-icon aria-hidden="true" className="icon-outline" name="star-outline"></ion-icon>
                        <ion-icon aria-hidden="true" className="icon-fill" name="star"></ion-icon>
                      </button>
                    </td>
                    <th className="table-data rank" scope="row">{index + 1 + (currentPage - 1) * 10}</th>
                    <td className="table-data">
                      <div className="wrapper">
                        <img alt={`${coin.name} logo`} className="img" height="20" src={coin.image} width="20" />
                        <h3>
                          {/* <a className="coin-name" href="#">
                            {coin.name} <span className="span">{coin.symbol.toUpperCase()}</span>
                          </a> */}
                          <Link className="coin-name" to={`/market/${coin.id}`}>
                            {coin.name} <span className="span">{coin.symbol.toUpperCase()}</span>
                          </Link>
                        </h3>
                      </div>
                    </td>
                    <td className="table-data last-price">${coin.current_price.toLocaleString()}</td>
                    <td className={`table-data last-update ${coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}`}>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td className="table-data market-cap">${coin.market_cap.toLocaleString()}</td>
                    <td className="table-data">
                      <img src={`./assets/images/chart-${index % 2 === 0 ? '1' : '2'}.svg`} className="chart" alt="chart" width="100" height="40" />
                    </td>
                    <td className="table-data">
                    <Link className="coin-name" to={`/market/${coin.id}`}>
                      <button className="btn btn-outline">Trade</button>
                     </Link>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button className="btn" onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span className="page-number">Page {currentPage}</span>
            <button className="btn" onClick={handleNextPage}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketUpdate;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// // Function to fetch market data from CoinGecko API
// export const getMarketData = async (pageNumber = 1) => {
//   try {
//     const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageNumber}&sparkline=false&price_change_percentage=24h`);
//     return response.data;
//   } catch (e) {
//     console.log(e);
//     return [];
//   }
// };

// const MarketUpdate = () => {
//   const [marketData, setMarketData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const fetchMarketData = async () => {
//       setLoading(true);
//       const data = await getMarketData(currentPage);
//       setMarketData(data);
//       setLoading(false);
//     };

//     fetchMarketData();
//   }, [currentPage]);

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <section
//       aria-label="market update"
//       className="section market"
//       style={{
//         backgroundColor: '#804080',
//         backgroundImage: 'url("/assets/images/fly-coins.jpg")',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover'
//       }}
//     >
//       <div
//         className="container"
//         style={{
//           backgroundColor: '#804080',
//           backgroundImage: 'url("./assets/images/fly-coins.jpg")',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover'
//         }}
//       >
//         <div className="title-wrapper">
//           <h2 className="h2 section-title">Digital PayOut Market Update</h2>
//           <a className="btn-link" href="#">See All Coins</a>
//         </div>
//         <div
//           className="market-tab"
//           style={{
//             backgroundImage: 'url("./assets/images/fly-coins.jpg")',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover'
//           }}
//         >
//           <ul className="tab-nav">
//             <li><button className="tab-btn active">View All</button></li>
//             <li><button className="tab-btn">Metaverse</button></li>
//             <li><button className="tab-btn">Entertainment</button></li>
//             <li><button className="tab-btn">Energy</button></li>
//             <li><button className="tab-btn">NFT</button></li>
//             <li><button className="tab-btn">Gaming</button></li>
//             <li><button className="tab-btn">Music</button></li>
//           </ul>
//           <table
//             className="market-table"
//             style={{
//               backgroundImage: 'url("./assets/images/fly-coins.jpg")',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//               backgroundSize: 'cover',
//               height: '448px',
//               width: '100%'
//             }}
//           >
//             <thead
//               className="table-head"
//               style={{
//                 backgroundColor: '#1815c5'
//               }}
//             >
//               <tr className="table-row table-title">
//                 <th className="table-heading"></th>
//                 <th className="table-heading" scope="col">#</th>
//                 <th className="table-heading" scope="col">Name</th>
//                 <th className="table-heading" scope="col">Last Price</th>
//                 <th className="table-heading" scope="col">24h %</th>
//                 <th className="table-heading" scope="col">Market Cap</th>
//                 <th className="table-heading" scope="col">Last 7 Days</th>
//                 <th className="table-heading"></th>
//               </tr>
//             </thead>
//             <tbody className="table-body">
//               {marketData.map((coin, index) => (
//                 <tr className="table-row" key={coin.id}>
//                   <td className="table-data">
//                     <button aria-label="Add to favourite" className="add-to-fav">
//                       <ion-icon aria-hidden="true" className="icon-outline" name="star-outline"></ion-icon>
//                       <ion-icon aria-hidden="true" className="icon-fill" name="star"></ion-icon>
//                     </button>
//                   </td>
//                   <th className="table-data rank" scope="row">{index + 1 + (currentPage - 1) * 10}</th>
//                   <td className="table-data">
//                     <div className="wrapper">
//                       <img alt={`${coin.name} logo`} className="img" height="20" src={coin.image} width="20" />
//                       <h3>
//                         <a className="coin-name" href="#">
//                           {coin.name} <span className="span">{coin.symbol.toUpperCase()}</span>
//                         </a>
//                       </h3>
//                     </div>
//                   </td>
//                   <td className="table-data last-price">${coin.current_price.toLocaleString()}</td>
//                   <td className={`table-data last-update ${coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}`}>
//                     {coin.price_change_percentage_24h.toFixed(2)}%
//                   </td>
//                   <td className="table-data market-cap">${coin.market_cap.toLocaleString()}</td>
//                   <td className="table-data">
//                     <img src={`./assets/images/chart-${index % 2 === 0 ? '1' : '2'}.svg`} className="chart" alt="chart" width="100" height="40" />
//                   </td>
//                   <td className="table-data">
//                     <button className="btn btn-outline">Trade</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="pagination">
//             <button className="btn" onClick={handlePreviousPage} disabled={currentPage === 1}>
//               Previous
//             </button>
//             <span className="page-number">Page {currentPage}</span>
//             <button className="btn" onClick={handleNextPage}>
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarketUpdate;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// // Function to fetch market data from CoinGecko API
// export const getMarketData = async (pageNumber = 1) => {
//   try {
//     const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`);
//     return response.data;
//   } catch (e) {
//     console.log(e);
//     return [];
//   }
// };

// const MarketUpdate = () => {
//   const [marketData, setMarketData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMarketData = async () => {
//       const data = await getMarketData();
//       setMarketData(data);
//       setLoading(false);
//     };

//     fetchMarketData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <section
//       aria-label="market update"
//       className="section market"
//       style={{
//         backgroundColor: '#804080',
//         backgroundImage: 'url("/assets/images/fly-coins.jpg")',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover'
//       }}
//     >
//       <div
//         className="container"
//         style={{
//           backgroundColor: '#804080',
//           backgroundImage: 'url("./assets/images/fly-coins.jpg")',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover'
//         }}
//       >
//         <div className="title-wrapper">
//           <h2 className="h2 section-title">Digital PayOut Market Update</h2>
//           <a className="btn-link" href="#">See All Coins</a>
//         </div>
//         <div
//           className="market-tab"
//           style={{
//             backgroundImage: 'url("./assets/images/fly-coins.jpg")',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover'
//           }}
//         >
//           <ul className="tab-nav">
//             <li><button className="tab-btn active">View All</button></li>
//             <li><button className="tab-btn">Metaverse</button></li>
//             <li><button className="tab-btn">Entertainment</button></li>
//             <li><button className="tab-btn">Energy</button></li>
//             <li><button className="tab-btn">NFT</button></li>
//             <li><button className="tab-btn">Gaming</button></li>
//             <li><button className="tab-btn">Music</button></li>
//           </ul>
//           <table
//             className="market-table"
//             style={{
//               backgroundImage: 'url("./assets/images/fly-coins.jpg")',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//               backgroundSize: 'cover',
//               height: '448px',
//               width: '100%'
//             }}
//           >
//             <thead
//               className="table-head"
//               style={{
//                 backgroundColor: '#1815c5'
//               }}
//             >
//               <tr className="table-row table-title">
//                 <th className="table-heading"></th>
//                 <th className="table-heading" scope="col">#</th>
//                 <th className="table-heading" scope="col">Name</th>
//                 <th className="table-heading" scope="col">Last Price</th>
//                 <th className="table-heading" scope="col">24h %</th>
//                 <th className="table-heading" scope="col">Market Cap</th>
//                 <th className="table-heading" scope="col">Last 7 Days</th>
//                 <th className="table-heading"></th>
//               </tr>
//             </thead>
//             <tbody className="table-body">
//               {marketData.map((coin, index) => (
//                 <tr className="table-row" key={coin.id}>
//                   <td className="table-data">
//                     <button aria-label="Add to favourite" className="add-to-fav">
//                       <ion-icon aria-hidden="true" className="icon-outline" name="star-outline"></ion-icon>
//                       <ion-icon aria-hidden="true" className="icon-fill" name="star"></ion-icon>
//                     </button>
//                   </td>
//                   <th className="table-data rank" scope="row">{index + 1}</th>
//                   <td className="table-data">
//                     <div className="wrapper">
//                       <img alt={`${coin.name} logo`} className="img" height="20" src={coin.image} width="20" />
//                       <h3>
//                         <a className="coin-name" href="#">
//                           {coin.name} <span className="span">{coin.symbol.toUpperCase()}</span>
//                         </a>
//                       </h3>
//                     </div>
//                   </td>
//                   <td className="table-data last-price">${coin.current_price.toLocaleString()}</td>
//                   <td className={`table-data last-update ${coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}`}>

//                     {coin.price_change_percentage_24h.toFixed(2)}%
//                   </td>
//                   <td className="table-data market-cap">${coin.market_cap.toLocaleString()}</td>
//                   <td className="table-data">
//                   <img src={`./assets/images/chart-${index % 2 === 0 ? '1' : '2'}.svg`} className="chart" alt="chart" width="100" height="40" />
//                   </td>
//                   <td className="table-data">
//                     <button className="btn btn-outline">Trade</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarketUpdate;


// import React from 'react';
// // import './MarketUpdate.css';

// const marketData = [
//   {
//     id: 1,
//     name: 'Bitcoin',
//     symbol: 'BTC',
//     logo: './assets/images/coin-1.svg',
//     lastPrice: '$56,623.54',
//     change: '+1.45%',
//     changeClass: 'green',
//     marketCap: '$880,423,640,582',
//     chart: './assets/images/chart-1.svg'
//   },
//   {
//     id: 2,
//     name: 'Ethereum',
//     symbol: 'ETH',
//     logo: './assets/images/coin-2.svg',
//     lastPrice: '$56,623.54',
//     change: '-5.12%',
//     changeClass: 'red',
//     marketCap: '$880,423,640,582',
//     chart: './assets/images/chart-2.svg'
//   },
//   {
//     id: 3,
//     name: 'Tether',
//     symbol: 'USDT/USD',
//     logo: './assets/images/coin-3.svg',
//     lastPrice: '$56,623.54',
//     change: '+1.45%',
//     changeClass: 'green',
//     marketCap: '$880,423,640,582',
//     chart: './assets/images/chart-1.svg'
//   },
//   {
//     id: 4,
//     name: 'BNB',
//     symbol: 'BNB/USD',
//     logo: './assets/images/coin-4.svg',
//     lastPrice: '$56,623.54',
//     change: '-3.75%',
//     changeClass: 'red',
//     marketCap: '$880,423,640,582',
//     chart: './assets/images/chart-2.svg'
//   },
//   {
//     id: 5,
//     name: 'Solana',
//     symbol: 'SOL',
//     logo: './assets/images/coin-5.svg',
//     lastPrice: '$56,623.54',
//     change: '+1.45%',
//     changeClass: 'green',
//     marketCap: '$880,423,640,582',
//     chart: './assets/images/chart-1.svg'
//   },
//   {
//     id: 6,
//     name: 'XRP',
//     symbol: 'XRP',
//     logo: './assets/images/coin-6.svg',
//     lastPrice: '$56,623.54',
//     change: '-2.22%',
//     changeClass: 'red',
//     marketCap: '$880,423,640,582',
//     chart: './assets/images/chart-2.svg'
//   },
//   {
//     id: 7,
//     name: 'Cardano',
//     symbol: 'ADA',
//     logo: './assets/images/coin-7.svg',
//     lastPrice: '$56,623.54',
//     change: '+0.8%',
//     changeClass: 'green',
//     marketCap: '$880,423,640,582',
//     chart: './assets/images/chart-1.svg'
//   }
// ];

// const MarketUpdate = () => {
//   return (
//     <section
//       aria-label="market update"
//       className="section market"
//       style={{
//         backgroundColor: '#804080',
//         backgroundImage: 'url("/assets/images/fly-coins.jpg")',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover'
//       }}
//     >
//       <div
//         className="container"
//         style={{
//           backgroundColor: '#804080',
//           backgroundImage: 'url("./assets/images/fly-coins.jpg")',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover'
//         }}
//       >
//         <div className="title-wrapper">
//           <h2 className="h2 section-title">Digital PayOut Market Update</h2>
//           <a className="btn-link" href="#">See All Coins</a>
//         </div>
//         <div
//           className="market-tab"
//           style={{
//             backgroundImage: 'url("./assets/images/fly-coins.jpg")',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover'
//           }}
//         >
//           <ul className="tab-nav">
//             <li><button className="tab-btn active">View All</button></li>
//             <li><button className="tab-btn">Metaverse</button></li>
//             <li><button className="tab-btn">Entertainment</button></li>
//             <li><button className="tab-btn">Energy</button></li>
//             <li><button className="tab-btn">NFT</button></li>
//             <li><button className="tab-btn">Gaming</button></li>
//             <li><button className="tab-btn">Music</button></li>
//           </ul>
//           <table
//             className="market-table"
//             style={{
//               backgroundImage: 'url("./assets/images/fly-coins.jpg")',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//               backgroundSize: 'cover',
//               height: '448',
//               width: '57'
//             }}
//           >
//             <thead
//               className="table-head"
//               style={{
//                 backgroundColor: '#1815c5'
//               }}
//             >
//               <tr className="table-row table-title">
//                 <th className="table-heading"></th>
//                 <th className="table-heading" scope="col">#</th>
//                 <th className="table-heading" scope="col">Name</th>
//                 <th className="table-heading" scope="col">Last Price</th>
//                 <th className="table-heading" scope="col">24h %</th>
//                 <th className="table-heading" scope="col">Market Cap</th>
//                 <th className="table-heading" scope="col">Last 7 Days</th>
//                 <th className="table-heading"></th>
//               </tr>
//             </thead>
//             <tbody className="table-body">
//               {marketData.map((coin) => (
//                 <tr className="table-row" key={coin.id}>
//                   <td className="table-data">
//                     <button aria-label="Add to favourite" className="add-to-fav">
//                       <ion-icon aria-hidden="true" className="icon-outline" name="star-outline"></ion-icon>
//                       <ion-icon aria-hidden="true" className="icon-fill" name="star"></ion-icon>
//                     </button>
//                   </td>
//                   <th className="table-data rank" scope="row">{coin.id}</th>
//                   <td className="table-data">
//                     <div className="wrapper">
//                       <img alt={`${coin.name} logo`} className="img" height="20" src={coin.logo} width="20" />
//                       <h3>
//                         <a className="coin-name" href="#">
//                           {coin.name} <span className="span">{coin.symbol}</span>
//                         </a>
//                       </h3>
//                     </div>
//                   </td>
//                   <td className="table-data last-price">{coin.lastPrice}</td>
//                   <td className={`table-data last-update ${coin.changeClass}`}>{coin.change}</td>
//                   <td className="table-data market-cap">{coin.marketCap}</td>
//                   <td className="table-data">
//                     <img alt="chart" className="chart" height="40" src={coin.chart} width="100" />
//                   </td>
//                   <td className="table-data">
//                     <button className="btn btn-outline">Trade</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarketUpdate;
