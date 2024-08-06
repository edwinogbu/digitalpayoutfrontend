

import React, { useEffect, useState } from 'react'
import InstructionSection from './InstructionSection'
import AboutSection from './AboutSection'
import TrendingCrypto from './TrendingCrypto'
import MarketUpdateContainer from './MarketUpdateContainer'
import TrendingSection from './TrendingCrypto'
import MarketUpdate from '../../pages/MarketUpdate'
// import AppSection from './AppSection'


export default function Main() {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    const fetchTrendingData = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/search/trending?include_platform=false');
      const data = await response.json();
      setTrendingData(data.coins); // Adjust according to the actual structure
    };

    fetchTrendingData();
  }, []);

  return (
    <main className="pt-0 py-0 mt-0 my-0">
      <article className="pt-0 py- mt-0 my-0">
        <section className="" aria-label="hero">
          <div className="container-fluid section-hero">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" style={{ backgroundImage: "url('./assets/images/testimonial/crt4.jpg')" }}>
                  <div className="hero-content text-center">
                    <h1 className="h1 hero-title">Bryan Adams</h1>
                    <p className="hero-text text-light caption-left">
                      Digital PayOut is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
                    </p>
                    <a href="#" className="btn btn-primary mt-5">Get started now</a>
                  </div>
                </div>
                <div className="carousel-item" style={{ backgroundImage: "url('./assets/images/testimonial/cert2.jpg')" }}>
                  <div className="hero-content text-center">
                    <h1 className="h1 hero-title">David Johnson</h1>
                    <p className="hero-text text-white fw-bold caption-left">
                      Thanks to Digital PayOut, I've been able to diversify my investment portfolio with ease. Their platform is top-notch!
                    </p>
                    <a href="#" className="btn btn-primary mt-5">Explore</a>
                  </div>
                </div>
                <div className="carousel-item" style={{ backgroundImage: "url('./assets/images/testimonial/crt6.jpg')" }}>
                  <div className="hero-content text-center">
                    <h1 className="h1 hero-title">Jan Johnson</h1>
                    <p className="hero-text text-white caption-left">
                      Thanks to Digital PayOut, I've been able to diversify my investment portfolio with ease. Their platform is top-notch!
                    </p>
                    <a href="#" className="btn btn-primary">Discover</a>
                  </div>
                </div>
                {/* Add more carousel items as needed */}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>

        <section className="section trend" aria-label="crypto trend">
          <div className="container">
            <div id="cryptoCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="trend-tab">
                <ul className="tab-nav" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '3px solid white', borderRadius: '50px' }}>
                  <li className="mx-5" style={{ display: 'inline-block' }}>
                    {/* <button className="tab-btn text-capitalize">Crypto Company</button> */}
                  </li>
                  <li style={{ display: 'inline-block' }}>
                    <h1 className="card-title text-center text-white text-capitalize">What People are Saying- Digital Payout Crypto Company</h1>
                  </li>
                  <li className="mx-5">
                    <button className="carousel-control-prev" type="button" data-bs-target="#cryptoCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon text-white" aria-hidden="true"></span>Previous
                      <span className="visually-hidden text-white">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#cryptoCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>Next
                      <span className="visually-hidden text-white">Next</span>
                    </button>
                  </li>
                </ul>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <ul className="tab-content">
                      <li>
                        <div className="trend-card">
                          <div className="card-title-wrapper">
                            <img src="./assets/images/testimonial/crt4.jpg" width="250" height="250" alt="bitcoin logo" />
                            {/* <a href="#" className="card-title">
                              Jeff Jullian <span className="span"></span>
                            </a> */}
                          </div>
                          <data className="card-value" value="46168.95"> Jeff Jullian-USD 46,168.95</data>
                          <div className="card-analytics">
                            {/* <data className="current-price" value="36641.20"></data> */}
                            <div className="badge bg-danger">
                              The customer support at Digital Payout is excellent.<br />
                              They helped me navigate complex transactions.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="trend-card active">
                          <div className="card-title-wrapper">
                            <img src="./assets/images/testimonial/cert2.jpg" width="250" height="250" alt="ethereum logo" />
                            {/* <a href="#" className="card-title">
                              Jane Smith <span className="span"></span>
                            </a> */}
                          </div>
                          <data className="card-value" value="3480.04"> Jane Smith-USD 3,480.04</data>
                          <div className="card-analytics">
                            {/* <data className="current-price" value="36641.20"></data> */}
                            <div className="badge bg-success">
                              I've been using Digital Payout for years. <br />
                              Their cryptocurrency exchange platform is top-notch!
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="trend-card">
                          <div className="card-title-wrapper">
                            <img src="./assets/images/testimonial/crt6.jpg" width="250" height="250" alt="tether logo" />
                            {/* <a href="#" className="card-title">
                              Emmy Bush <span className="span"></span>
                            </a> */}
                          </div>
                          <data className="card-value" value="1.00"> Emmy Bush- USD 1.00</data>
                          <div className="card-analytics">
                            {/* <data className="current-price" value="36641.20"></data> */}
                            <div className="badge bg-danger">
                              Digital Payout's low fees and fast execution<br />
                              make it my go-to platform for crypto trading.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="trend-card">
                          <div className="card-title-wrapper">
                            <img src="./assets/images/testimonial/crto1.jpg" width="250" height="250" alt="bnb logo" />
                            {/* <a href="#" className="card-title">
                              Bryan Jones <span className="span"></span>
                            </a> */}
                          </div>
                          <data className="card-value" value="443.56"> Bryan Jones- USD 443.56</data>
                          <div className="card-analytics">
                            {/* <data className="current-price" value="36641.20"></data> */}
                            <div className="badge bg-danger">
                              Digital Payout's security features give me peace of mind.<br />
                              My assets are safe!
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="carousel-item">
                    <ul className="tab-content">
                      <li>
                        <div className="trend-card">
                          <div className="card-title-wrapper">
                            <img src="./assets/images/testimonial/cer5.jpg" width="250" height="250" alt="bitcoin logo" />
                            {/* <a href="#" className="card-title">
                              Benni Joe <span className="span"></span>
                            </a> */}
                          </div>
                          <data className="card-value" value="46168.95"> Benni Joe-USD 46,168.95</data>
                          <div className="card-analytics">
                            {/* <data className="current-price" value="36641.20"></data> */}
                            <div className="badge bg-danger">
                              The customer support at Digital Payout is excellent.<br />
                              They helped me navigate complex transactions.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="trend-card active">
                          <div className="card-title-wrapper">
                            <img src="./assets/images/testimonial/cert2.jpg" width="250" height="250" alt="ethereum logo" />
                            {/* <a href="#" className="card-title">
                              Jane Smith <span className="span"></span>
                            </a> */}
                          </div>
                          <data className="card-value" value="3480.04"> Benni Joe-USD 3,480.04</data>
                          <div className="card-analytics">
                            {/* <data className="current-price" value="36641.20"></data> */}
                            <div className="badge bg-success">
                              I've been using Digital Payout for years. <br />
                              Their cryptocurrency exchange platform is top-notch!
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="trend-card">
                          <div className="card-title-wrapper">
                            <img src="./assets/images/testimonial/crt6.jpg" width="250" height="250" alt="tether logo" />
                            {/* <a href="#" className="card-title">
                              Emma jackson <span className="span"></span>
                            </a> */}
                          </div>
                          <data className="card-value" value="1.00">Emma jackson - USD 1.00</data>
                          <div className="card-analytics">
                            {/* <data className="current-price" value="36641.20"></data> */}
                            <div className="badge bg-danger">
                              Digital Payout's low fees and fast execution<br />
                              make it my go-to platform for crypto trading.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="trend-card">
                          <div className="card-title-wrapper">
                            <img src="./assets/images/testimonial/crto1.jpg" width="250" height="250" alt="bnb logo" />
                            {/* <a href="#" className="card-title">
                              Bridget Chan <span className="span"></span>
                            </a> */}
                          </div>
                          <data className="card-value" value="443.56"> Bridget Chan-USD 443.56</data>
                          <div className="card-analytics">
                            {/* <data className="current-price" value="36641.20"></data> */}
                            <div className="badge bg-danger">
                              Digital Payout's security features give me peace of mind.<br />
                              My assets are safe!
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



    {/* <main className='pt-0 py-0 mt-0 my-0'>
    <article className='pt-0 py-0 mt-0 my-0'>
      <section className="hero" aria-label="hero">
        <div className="container-fluid">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ backgroundImage: "url('./assets/images/testimonial/crt4.jpg')" }}>
                <div className="hero-content text-center">
                  <h1 className="hero-title">Bryan Adams</h1>
                  <p className="hero-text text-light">
                    Digital PayOut is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
                  </p>
                  <a href="#" className="btn btn-primary mt-5">Get started now</a>
                </div>
              </div>
              <div className="carousel-item" style={{ backgroundImage: "url('./assets/images/testimonial/cert2.jpg')" }}>
                <div className="hero-content text-center">
                  <h1 className="hero-title">David Johnson</h1>
                  <p className="hero-text text-white fw-bold">
                    Thanks to Digital PayOut, I've been able to diversify my investment portfolio with ease. Their platform is top-notch!
                  </p>
                  <a href="#" className="btn btn-primary mt-5">Explore</a>
                </div>
              </div>
              <div className="carousel-item" style={{ backgroundImage: "url('./assets/images/testimonial/crt6.jpg')" }}>
                <div className="hero-content text-center">
                  <h1 className="hero-title">Jan Johnson</h1>
                  <p className="hero-text text-white">
                    Thanks to Digital PayOut, I've been able to diversify my investment portfolio with ease. Their platform is top-notch!
                  </p>
                  <a href="#" className="btn btn-primary">Discover</a>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section className="trend" aria-label="crypto trend">
        <div className="container">
          <div id="cryptoCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="trend-tab">
              <ul className="nav justify-content-center align-items-center border border-3 border-white rounded-pill">
                <li className="nav-item mx-5">
                  <button className="nav-link btn text-capitalize">Crypto Company</button>
                </li>
                <li className="nav-item">
                  <h1 className="text-center text-white text-capitalize">Clients Testimonials - Digital Payout Crypto Company</h1>
                </li>
                <li className="nav-item mx-5">
                  <button className="carousel-control-prev btn" type="button" data-bs-target="#cryptoCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon text-white" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next btn" type="button" data-bs-target="#cryptoCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon text-white" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </li>
              </ul>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <ul className="tab-content">
                    <li>
                      <div className="trend-card">
                        <div className="card-title-wrapper">
                          <img src="./assets/images/testimonial/crt4.jpg" width="250" height="250" alt="bitcoin logo" />
                          <a href="#" className="card-title">
                            Bitcoin <span className="span">BTC/USD</span>
                          </a>
                        </div>
                        <data className="card-value" value="46168.95">USD 46,168.95</data>
                        <div className="card-analytics">
                          <data className="current-price" value="36641.20">36,641.20</data>
                          <div className="badge bg-danger text-wrap">
                            The customer support at Digital Payout is excellent.<br />
                            They helped me navigate complex transactions.
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="trend-card active">
                        <div className="card-title-wrapper">
                          <img src="./assets/images/testimonial/cert2.jpg" width="250" height="250" alt="ethereum logo" />
                          <a href="#" className="card-title">
                            Jane Smith <span className="span">ETH/USD</span>
                          </a>
                        </div>
                        <data className="card-value" value="3480.04">USD 3,480.04</data>
                        <div className="card-analytics">
                          <data className="current-price" value="36641.20">36,641.20</data>
                          <div className="badge bg-success text-wrap">
                            I've been using Digital Payout for years. <br />
                            Their cryptocurrency exchange platform is top-notch!
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="trend-card">
                        <div className="card-title-wrapper">
                          <img src="./assets/images/testimonial/crt6.jpg" width="250" height="250" alt="tether logo" />
                          <a href="#" className="card-title">
                            Tether <span className="span">USDT/USD</span>
                          </a>
                        </div>
                        <data className="card-value" value="1.00">USD 1.00</data>
                        <div className="card-analytics">
                          <data className="current-price" value="36641.20">36,641.20</data>
                          <div className="badge bg-danger text-wrap">
                            Digital Payout's low fees and fast execution<br />
                            make it my go-to platform for crypto trading.
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="trend-card">
                        <div className="card-title-wrapper">
                          <img src="./assets/images/testimonial/crto1.jpg" width="250" height="250" alt="bnb logo" />
                          <a href="#" className="card-title">
                            BNB <span className="span">BNB/USD</span>
                          </a>
                        </div>
                        <data className="card-value" value="443.56">USD 443.56</data>
                        <div className="card-analytics">
                          <data className="current-price" value="36641.20">36,641.20</data>
                          <div className="badge bg-danger text-wrap">
                            Digital Payout's security features give me peace of mind.<br />
                            My assets are safe!
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="carousel-item">
                  <ul className="tab-content">
                    <li>
                      <div className="trend-card">
                        <div className="card-title-wrapper">
                          <img src="./assets/images/testimonial/cer5.jpg" width="250" height="250" alt="bitcoin logo" />
                          <a href="#" className="card-title">
                            Bitcoin <span className="span">BTC/USD</span>
                          </a>
                        </div>
                        <data className="card-value" value="46168.95">USD 46,168.95</data>
                        <div className="card-analytics">
                          <data className="current-price" value="36641.20">36,641.20</data>
                          <div className="badge bg-danger text-wrap">
                            The customer support at Digital Payout is excellent.<br />
                            They helped me navigate complex transactions.
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="trend-card active">
                        <div className="card-title-wrapper">
                          <img src="./assets/images/testimonial/cert2.jpg" width="250" height="250" alt="ethereum logo" />
                          <a href="#" className="card-title">
                            Esther <span className="span">ETH/USD</span>
                          </a>
                        </div>
                        <data className="card-value" value="3480.04">USD 3,480.04</data>
                        <div className="card-analytics">
                          <data className="current-price" value="36641.20">36,641.20</data>
                          <div className="badge bg-success text-wrap">
                            I've been using Digital Payout for years.<br />
                            Their cryptocurrency exchange platform is top-notch!
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="trend-card">
                        <div className="card-title-wrapper">
                          <img src="./assets/images/testimonial/crt6.jpg" width="250" height="250" alt="tether logo" />
                          <a href="#" className="card-title">
                            Tether <span className="span">USDT/USD</span>
                          </a>
                        </div>
                        <data className="card-value" value="1.00">USD 1.00</data>
                        <div className="card-analytics">
                          <data className="current-price" value="36641.20">36,641.20</data>
                          <div className="badge bg-danger text-wrap">
                            Digital Payout's low fees and fast execution<br />
                            make it my go-to platform for crypto trading.
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="trend-card">
                        <div className="card-title-wrapper">
                          <img src="./assets/images/testimonial/crto1.jpg" width="250" height="250" alt="bnb logo" />
                          <a href="#" className="card-title">
                            BNB <span className="span">BNB/USD</span>
                          </a>
                        </div>
                        <data className="card-value" value="443.56">USD 443.56</data>
                        <div className="card-analytics">
                          <data className="current-price" value="36641.20">36,641.20</data>
                          <div className="badge bg-danger text-wrap">
                            Digital Payout's security features give me peace of mind.<br />
                            My assets are safe!
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  */}

{/* 
      <section
        aria-label="crypto trend"
        className="section trend"
       
      >
        <div className="container">
          <div className="trend-tab">
            <ul className="tab-nav">
              <li>
                <button className="tab-btn active">
                  Crypto
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  DeFi
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  BSC
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  NFT
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  Metaverse
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  Polkadot
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  Solana
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  Opensea
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  Makersplace
                </button>
              </li>
            </ul>
            
            <ul className="tab-content">
              <li>
                <div className="trend-card">
                  <div className="card-title-wrapper">
                    <img
                      alt="bitcoin logo"
                      height="24"
                      src="./assets/images/coin-1.svg"
                      width="24"
                    />
                    <a
                      className="card-title"
                      href="#"
                    >
                      Bitcoin{' '}
                      <span className="span">
                        BTC/USD
                      </span>
                    </a>
                  </div>
                  <data
                    className="card-value"
                    value="46168.95"
                  >
                    USD 46,168.95
                  </data>
                  <div className="card-analytics">
                    <data
                      className="current-price"
                      value="36641.20"
                    >
                      36,641.20
                    </data>
                    <div className="badge red">
                      -0.79%
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="trend-card active">
                  <div className="card-title-wrapper">
                    <img
                      alt="ethereum logo"
                      height="24"
                      src="./assets/images/coin-2.svg"
                      width="24"
                    />
                    <a
                      className="card-title"
                      href="#"
                    >
                      Ethereum{' '}
                      <span className="span">
                        ETH/USD
                      </span>
                    </a>
                  </div>
                  <data
                    className="card-value"
                    value="3480.04"
                  >
                    USD 3,480.04
                  </data>
                  <div className="card-analytics">
                    <data
                      className="current-price"
                      value="36641.20"
                    >
                      36,641.20
                    </data>
                    <div className="badge green">
                      +10.55%
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="trend-card">
                  <div className="card-title-wrapper">
                    <img
                      alt="tether logo"
                      height="24"
                      src="./assets/images/coin-3.svg"
                      width="24"
                    />
                    <a
                      className="card-title"
                      href="#"
                    >
                      Tether{' '}
                      <span className="span">
                        USDT/USD
                      </span>
                    </a>
                  </div>
                  <data
                    className="card-value"
                    value="1.00"
                  >
                    USD 1.00
                  </data>
                  <div className="card-analytics">
                    <data
                      className="current-price"
                      value="36641.20"
                    >
                      36,641.20
                    </data>
                    <div className="badge red">
                      -0.01%
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="trend-card">
                  <div className="card-title-wrapper">
                    <img
                      alt="bnb logo"
                      height="24"
                      src="./assets/images/coin-4.svg"
                      width="24"
                    />
                    <a
                      className="card-title"
                      href="#"
                    >
                      BNB{' '}
                      <span className="span">
                        BNB/USD
                      </span>
                    </a>
                  </div>
                  <data
                    className="card-value"
                    value="443.56"
                  >
                    USD 443.56
                  </data>
                  <div className="card-analytics">
                    <data
                      className="current-price"
                      value="36641.20"
                    >
                      36,641.20
                    </data>
                    <div className="badge red">
                      -1.24%
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
        <section>
        <div className="title-wrapper text-center">
          <h1 className="h2 section-title text-center">
              Trending Crypto
          </h1>
        </div>
        <TrendingCrypto />
    </section>
    {/* <TrendingSection trendingData={trendingData} /> */}
    {/* <MarketUpdateContainer /> */}
    <MarketUpdate />
      {/* <section
        aria-label="market update"
        className="section market"
       
        style={{
          backgroundColor: '#804080',
          backgroundImage: 'url(\'/assets/images/fly-coins.jpg\')',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div
          className="container "
          style={{
            backgroundColor: '#804080',
            backgroundImage: 'url(\'./assets/images/fly-coins.jpg\')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div className="title-wrapper">
            <h2 className="h2 section-title">
              Digital PayOut Market Update
            </h2>
            <a
              className="btn-link"
              href="#"
            >
              See All Coins
            </a>
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
            <ul className="tab-nav">
              <li>
                <button className="tab-btn active">
                  View All
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  Metaverse
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  Entertainment
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  Energy
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  NFT
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  Gaming
                </button>
              </li>
              <li>
                <button className="tab-btn">
                  Music
                </button>
              </li>
            </ul>
            <table
              className="market-table"
              style={{
                backgroundImage: 'url(\'./assets/images/fly-coins.jpg\')',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '448',
                width: '57'
              }}
            >
              <thead
                className="table-head"
                style={{
                  backgroundColor: '#1815c5'
                }}
              >
                <tr className="table-row table-title">
                  <th className="table-heading" />
                  <th
                    className="table-heading"
                    scope="col"
                  >
                    #
                  </th>
                  <th
                    className="table-heading"
                    scope="col"
                  >
                    Name
                  </th>
                  <th
                    className="table-heading"
                    scope="col"
                  >
                    Last Price
                  </th>
                  <th
                    className="table-heading"
                    scope="col"
                  >
                    24h %
                  </th>
                  <th
                    className="table-heading"
                    scope="col"
                  >
                    Market Cap
                  </th>
                  <th
                    className="table-heading"
                    scope="col"
                  >
                    Last 7 Days
                  </th>
                  <th className="table-heading" />
                </tr>
              </thead>
              <tbody className="table-body">
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      aria-label="Add to favourite"
                      className="add-to-fav"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        aria-hidden="true"
                        class="icon-outline"
                        name="star-outline"
                      />
                      <ion-icon
                        aria-hidden="true"
                        class="icon-fill"
                        name="star"
                      />
                    </button>
                  </td>
                  <th
                    className="table-data rank"
                    scope="row"
                  >
                    1
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        alt="Bitcoin logo"
                        className="img"
                        height="20"
                        src="./assets/images/coin-1.svg"
                        width="20"
                      />
                      <h3>
                        <a
                          className="coin-name"
                          href="#"
                        >
                          Bitcoin{' '}
                          <span className="span">
                            BTC
                          </span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">
                    $56,623.54
                  </td>
                  <td className="table-data last-update green">
                    +1.45%
                  </td>
                  <td className="table-data market-cap">
                    $880,423,640,582
                  </td>
                  <td className="table-data">
                    <img
                      alt="profit chart"
                      className="chart"
                      height="40"
                      src="./assets/images/chart-1.svg"
                      width="100"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">
                      Trade
                    </button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      aria-label="Add to favourite"
                      className="add-to-fav"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        aria-hidden="true"
                        class="icon-outline"
                        name="star-outline"
                      />
                      <ion-icon
                        aria-hidden="true"
                        class="icon-fill"
                        name="star"
                      />
                    </button>
                  </td>
                  <th
                    className="table-data rank"
                    scope="row"
                  >
                    2
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        alt="Ethereum logo"
                        className="img"
                        height="20"
                        src="./assets/images/coin-2.svg"
                        width="20"
                      />
                      <h3>
                        <a
                          className="coin-name"
                          href="#"
                        >
                          Ethereum{' '}
                          <span className="span">
                            ETH
                          </span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">
                    $56,623.54
                  </td>
                  <td className="table-data last-update red">
                    -5.12%
                  </td>
                  <td className="table-data market-cap">
                    $880,423,640,582
                  </td>
                  <td className="table-data">
                    <img
                      alt="loss chart"
                      className="chart"
                      height="40"
                      src="./assets/images/chart-2.svg"
                      width="100"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">
                      Trade
                    </button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      aria-label="Add to favourite"
                      className="add-to-fav"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        aria-hidden="true"
                        class="icon-outline"
                        name="star-outline"
                      />
                      <ion-icon
                        aria-hidden="true"
                        class="icon-fill"
                        name="star"
                      />
                    </button>
                  </td>
                  <th
                    className="table-data rank"
                    scope="row"
                  >
                    3
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        alt="Tether logo"
                        className="img"
                        height="20"
                        src="./assets/images/coin-3.svg"
                        width="20"
                      />
                      <h3>
                        <a
                          className="coin-name"
                          href="#"
                        >
                          Tether{' '}
                          <span className="span">
                            USDT/USD
                          </span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">
                    $56,623.54
                  </td>
                  <td className="table-data last-update green">
                    +1.45%
                  </td>
                  <td className="table-data market-cap">
                    $880,423,640,582
                  </td>
                  <td className="table-data">
                    <img
                      alt="profit chart"
                      className="chart"
                      height="40"
                      src="./assets/images/chart-1.svg"
                      width="100"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">
                      Trade
                    </button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      aria-label="Add to favourite"
                      className="add-to-fav"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        aria-hidden="true"
                        class="icon-outline"
                        name="star-outline"
                      />
                      <ion-icon
                        aria-hidden="true"
                        class="icon-fill"
                        name="star"
                      />
                    </button>
                  </td>
                  <th
                    className="table-data rank"
                    scope="row"
                  >
                    4
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        alt="BNB logo"
                        className="img"
                        height="20"
                        src="./assets/images/coin-4.svg"
                        width="20"
                      />
                      <h3>
                        <a
                          className="coin-name"
                          href="#"
                        >
                          BNB{' '}
                          <span className="span">
                            BNB/USD
                          </span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">
                    $56,623.54
                  </td>
                  <td className="table-data last-update red">
                    -3.75%%
                  </td>
                  <td className="table-data market-cap">
                    $880,423,640,582
                  </td>
                  <td className="table-data">
                    <img
                      alt="loss chart"
                      className="chart"
                      height="40"
                      src="./assets/images/chart-2.svg"
                      width="100"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">
                      Trade
                    </button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      aria-label="Add to favourite"
                      className="add-to-fav"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        aria-hidden="true"
                        class="icon-outline"
                        name="star-outline"
                      />
                      <ion-icon
                        aria-hidden="true"
                        class="icon-fill"
                        name="star"
                      />
                    </button>
                  </td>
                  <th
                    className="table-data rank"
                    scope="row"
                  >
                    5
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        alt="Solana logo"
                        className="img"
                        height="20"
                        src="./assets/images/coin-5.svg"
                        width="20"
                      />
                      <h3>
                        <a
                          className="coin-name"
                          href="#"
                        >
                          Solana{' '}
                          <span className="span">
                            SOL
                          </span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">
                    $56,623.54
                  </td>
                  <td className="table-data last-update green">
                    +1.45%
                  </td>
                  <td className="table-data market-cap">
                    $880,423,640,582
                  </td>
                  <td className="table-data">
                    <img
                      alt="profit chart"
                      className="chart"
                      height="40"
                      src="./assets/images/chart-1.svg"
                      width="100"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">
                      Trade
                    </button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      aria-label="Add to favourite"
                      className="add-to-fav"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        aria-hidden="true"
                        class="icon-outline"
                        name="star-outline"
                      />
                      <ion-icon
                        aria-hidden="true"
                        class="icon-fill"
                        name="star"
                      />
                    </button>
                  </td>
                  <th
                    className="table-data rank"
                    scope="row"
                  >
                    6
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        alt="XRP logo"
                        className="img"
                        height="20"
                        src="./assets/images/coin-6.svg"
                        width="20"
                      />
                      <h3>
                        <a
                          className="coin-name"
                          href="#"
                        >
                          XRP{' '}
                          <span className="span">
                            XRP
                          </span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">
                    $56,623.54
                  </td>
                  <td className="table-data last-update red">
                    -2.22%
                  </td>
                  <td className="table-data market-cap">
                    $880,423,640,582
                  </td>
                  <td className="table-data">
                    <img
                      alt="loss chart"
                      className="chart"
                      height="40"
                      src="./assets/images/chart-2.svg"
                      width="100"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">
                      Trade
                    </button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      aria-label="Add to favourite"
                      className="add-to-fav"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        aria-hidden="true"
                        class="icon-outline"
                        name="star-outline"
                      />
                      <ion-icon
                        aria-hidden="true"
                        class="icon-fill"
                        name="star"
                      />
                    </button>
                  </td>
                  <th
                    className="table-data rank"
                    scope="row"
                  >
                    7
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        alt="Cardano logo"
                        className="img"
                        height="20"
                        src="./assets/images/coin-7.svg"
                        width="20"
                      />
                      <h3>
                        <a
                          className="coin-name"
                          href="#"
                        >
                          Cardano{' '}
                          <span className="span">
                            ADA
                          </span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">
                    $56,623.54
                  </td>
                  <td className="table-data last-update green">
                    +0.8%
                  </td>
                  <td className="table-data market-cap">
                    $880,423,640,582
                  </td>
                  <td className="table-data">
                    <img
                      alt="profit chart"
                      className="chart"
                      height="40"
                      src="./assets/images/chart-1.svg"
                      width="100"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">
                      Trade
                    </button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      aria-label="Add to favourite"
                      className="add-to-fav"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        aria-hidden="true"
                        class="icon-outline"
                        name="star-outline"
                      />
                      <ion-icon
                        aria-hidden="true"
                        class="icon-fill"
                        name="star"
                      />
                    </button>
                  </td>
                  <th
                    className="table-data rank"
                    scope="row"
                  >
                    8
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        alt="Avalanche logo"
                        className="img"
                        height="20"
                        src="./assets/images/coin-8.svg"
                        width="20"
                      />
                      <h3>
                        <a
                          className="coin-name"
                          href="#"
                        >
                          Avalanche{' '}
                          <span className="span">
                            AVAX
                          </span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">
                    $56,623.54
                  </td>
                  <td className="table-data last-update green">
                    +1.41%
                  </td>
                  <td className="table-data market-cap">
                    $880,423,640,582
                  </td>
                  <td className="table-data">
                    <img
                      alt="profit chart"
                      className="chart"
                      height="40"
                      src="./assets/images/chart-1.svg"
                      width="100"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">
                      Trade
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section> */}
    <InstructionSection />
    <AboutSection />
   
    </article>
  </main>
  )
}
