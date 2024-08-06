import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const MarketUpdateSection = ({ data }) => {
  return (
    <section
      aria-label="market update"
      className="section market"
      style={{
        backgroundColor: '#000033',
        backgroundImage: 'url(\'/assets/images/fly-coins.jpg\')',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div
        className="container py-5"
        style={{
          backgroundColor: '#000033',
          backgroundImage: 'url(\'./assets/images/fly-coins.jpg\')',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h2 section-title text-white">
            Digital PayOut Market Update
          </h2>
          <Link className="btn btn-link text-white" to="/all-coins">
            See All Coins
          </Link>
        </div>
        <div
          className="market-tab"
          style={{
            backgroundImage: 'url(\'./assets/images/fly-coins.jpg\')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <ul className="nav nav-tabs mb-3" role="tablist">
            <li className="nav-item">
              <button className="nav-link active" data-bs-toggle="tab" role="tab">
                View All
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" role="tab">
                Metaverse
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" role="tab">
                Entertainment
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" role="tab">
                Energy
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" role="tab">
                NFT
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" role="tab">
                Gaming
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" role="tab">
                Music
              </button>
            </li>
          </ul>
          <div className="table-responsive">
            <table className="table table-striped table-dark">
              <thead style={{ backgroundColor: '#000033' }}>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Last Price</th>
                  <th scope="col">24h %</th>
                  <th scope="col">Market Cap</th>
                  <th scope="col">Last 7 Days</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody className="table-body">
                {data.map((coin, index) => (
                  <tr key={coin.id} className="table-row">
                    <td className="table-data">
                      <button aria-label="Add to favourite" className="btn btn-outline-light btn-sm">
                        <i className="bi bi-star"></i>
                      </button>
                    </td>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={coin.image} alt={`${coin.name} logo`} width="20" height="20" className="me-2" />
                        <Link to={`/coin/${coin.id}`} className="text-white text-decoration-none">
                          {coin.name} <span className="text-muted">{coin.symbol.toUpperCase()}</span>
                        </Link>
                      </div>
                    </td>
                    <td>${coin.current_price.toLocaleString()}</td>
                    <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td>${coin.market_cap.toLocaleString()}</td>
                    <td>
                      <img src={`./assets/images/chart-${index % 2 === 0 ? '1' : '2'}.svg`} alt="chart" width="100" height="40" />
                    </td>
                    <td>
                      <button className="btn btn-outline-light btn-sm">Trade</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketUpdateSection;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const MarketUpdateSection = ({ data }) => {
//   return (
//     <section
//       aria-label="market update"
//       className="section market"
//       style={{
//         backgroundColor: '#804080',
//         backgroundImage: 'url(\'/assets/images/fly-coins.jpg\')',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover'
//       }}
//     >
//       <div
//         className="container py-5"
//         style={{
//           backgroundColor: '#804080',
//           backgroundImage: 'url(\'./assets/images/fly-coins.jpg\')',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover'
//         }}
//       >
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h2 className="h2 section-title text-white">
//             Digital PayOut Market Update
//           </h2>
//           <Link className="btn btn-link text-white" to="/all-coins">
//             See All Coins
//           </Link>
//         </div>
//         <div
//           className="market-tab"
//           style={{
//             backgroundImage: 'url(\'./assets/images/fly-coins.jpg\')',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover'
//           }}
//         >
//           <ul className="nav nav-tabs mb-3" role="tablist">
//             <li className="nav-item">
//               <button className="nav-link active" data-bs-toggle="tab" role="tab">
//                 View All
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" data-bs-toggle="tab" role="tab">
//                 Metaverse
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" data-bs-toggle="tab" role="tab">
//                 Entertainment
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" data-bs-toggle="tab" role="tab">
//                 Energy
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" data-bs-toggle="tab" role="tab">
//                 NFT
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" data-bs-toggle="tab" role="tab">
//                 Gaming
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" data-bs-toggle="tab" role="tab">
//                 Music
//               </button>
//             </li>
//           </ul>
//           <div className="table-responsive">
//             <table className="table table-striped table-dark">
//               <thead style={{ backgroundColor: '#1815c5' }}>
//                 <tr>
//                   <th scope="col"></th>
//                   <th scope="col">#</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Last Price</th>
//                   <th scope="col">24h %</th>
//                   <th scope="col">Market Cap</th>
//                   <th scope="col">Last 7 Days</th>
//                   <th scope="col"></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((coin, index) => (
//                   <tr key={coin.id}>
//                     <td>
//                       <button aria-label="Add to favourite" className="btn btn-outline-light btn-sm">
//                         <i className="bi bi-star"></i>
//                       </button>
//                     </td>
//                     <th scope="row">{index + 1}</th>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <img src={coin.image} alt={`${coin.name} logo`} width="20" height="20" className="me-2" />
//                         <Link to={`/coin/${coin.id}`} className="text-white text-decoration-none">
//                           {coin.name} <span className="text-muted">{coin.symbol.toUpperCase()}</span>
//                         </Link>
//                       </div>
//                     </td>
//                     <td>${coin.current_price}</td>
//                     <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
//                       {coin.price_change_percentage_24h}%
//                     </td>
//                     <td>${coin.market_cap}</td>
//                     <td>
//                       <img src={`./assets/images/chart-${index % 2 === 0 ? '1' : '2'}.svg`} alt="chart" width="100" height="40" />
//                     </td>
//                     <td>
//                       <button className="btn btn-outline-light btn-sm">Trade</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarketUpdateSection;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const MarketUpdateSection = ({ data }) => {
//   return (
//     <section
//       aria-label="market update"
//       className="section market"
//       style={{
//         backgroundColor: '#804080',
//         backgroundImage: 'url(\'/assets/images/fly-coins.jpg\')',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover'
//       }}
//     >
//       <div
//         className="container py-5"
//         style={{
//           backgroundColor: '#804080',
//           backgroundImage: 'url(\'./assets/images/fly-coins.jpg\')',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover'
//         }}
//       >
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h2 className="h2 section-title text-white">
//             Digital PayOut Market Update
//           </h2>
//           <a className="btn btn-link text-white" href="#">
//             See All Coins
//           </a>
//         </div>
//         <div
//           className="market-tab"
//           style={{
//             backgroundImage: 'url(\'./assets/images/fly-coins.jpg\')',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover'
//           }}
//         >
//           <ul className="nav nav-tabs mb-3" role="tablist">
//             <li className="nav-item">
//               <button className="nav-link active" data-bs-toggle="tab" role="tab">
//                 View All
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" data-bs-toggle="tab" role="tab">
//                 Metaverse
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" data-bs-toggle="tab" role="tab">
//                 Entertainment
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" data-bs-toggle="tab" role="tab">
//                 Energy
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" data-bs-toggle="tab" role="tab">
//                 NFT
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" data-bs-toggle="tab" role="tab">
//                 Gaming
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" data-bs-toggle="tab" role="tab">
//                 Music
//               </button>
//             </li>
//           </ul>
//           <div className="table-responsive">
//             <table className="table table-striped table-dark">
//               <thead style={{ backgroundColor: '#1815c5' }}>
//                 <tr>
//                   <th scope="col"></th>
//                   <th scope="col">#</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Last Price</th>
//                   <th scope="col">24h %</th>
//                   <th scope="col">Market Cap</th>
//                   <th scope="col">Last 7 Days</th>
//                   <th scope="col"></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((coin, index) => (
//                   <tr key={coin.id}>
//                     <td>
//                       <button aria-label="Add to favourite" className="btn btn-outline-light btn-sm">
//                         <i className="bi bi-star"></i>
//                       </button>
//                     </td>
//                     <th scope="row">{index + 1}</th>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <img src={coin.image} alt={`${coin.name} logo`} width="20" height="20" className="me-2" />
//                         <a href="#" className="text-white text-decoration-none">
//                           {coin.name} <span className="text-muted">{coin.symbol.toUpperCase()}</span>
//                         </a>
//                       </div>
//                     </td>
//                     <td>${coin.current_price}</td>
//                     <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
//                       {coin.price_change_percentage_24h}%
//                     </td>
//                     <td>${coin.market_cap}</td>
//                     <td>
//                       <img src={`./assets/images/chart-${index % 2 === 0 ? '1' : '2'}.svg`} alt="chart" width="100" height="40" />
//                     </td>
//                     <td>
//                       <button className="btn btn-outline-light btn-sm">Trade</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarketUpdateSection;
