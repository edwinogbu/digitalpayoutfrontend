import React from 'react';

const AboutSection = () => {
  return (
    // <section aria-label="about" className="section about">
    //   <div className="container">
    //     <figure className="about-banner">
    //       <img
    //         alt="about banner"
    //         className="w-100"
    //         height="436"
    //         loading="lazy"
    //         src="./assets/images/about-banner.png"
    //         width="748"
    //       />
    //     </figure>
    //     <div className="about-content">
    //       <h2 className="h2 section-title">What Is Digital Payout</h2>
    //       <p className="section-text">
    //         Explore a variety of trading options on Digital Payout. You can engage in various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin trading.
    //       </p>
    //       <ul className="section-list">
    //         <li className="section-item">
    //           <div className="title-wrapper">
    //             <ion-icon aria-hidden="true" name="checkmark-circle" />
    //             <h3 className="h3 list-title">View real-time cryptocurrency prices</h3>
    //           </div>
    //           <p className="item-text">
    //             Stay updated with real-time cryptocurrency prices and market trends on Digital Payout.
    //           </p>
    //         </li>
    //         <li className="section-item">
    //           <div className="title-wrapper">
    //             <ion-icon aria-hidden="true" name="checkmark-circle" />
    //             <h3 className="h3 list-title">Buy and sell BTC, ETH, XRP, and more</h3>
    //           </div>
    //           <p className="item-text">
    //             Easily buy and sell a variety of cryptocurrencies including BTC, ETH, XRP, and many others on Digital Payout.
    //           </p>
    //         </li>
    //       </ul>
    //       <a className="btn btn-primary" href="#">
    //         Explore More
    //       </a>
    //     </div>
    //   </div>
    // </section>
    <section aria-label="about" className="section about" >
  <div className="container" style={{backgroundColor:'#000033', borderRadius:10, padding:1, color:'#fff'}}>
    <figure className="about-banner">
      <img
        alt="about banner"
        className="img-fluid"
        height="436"
        loading="lazy"
        src="./assets/images/about-banner.png"
        width="748"
      />
    </figure>
    <div className="about-content" style={{backgroundColor:'#000033', borderRadius:10, padding:1, color:'#fff'}}>
      <h2 className="display-4 section-title">What Is Digital Payout</h2>
      <p className="lead section-text">
        Explore a variety of trading options on Digital Payout. You can engage in various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin trading.
      </p>
      <ul className="list-unstyled section-list">
        <li className="d-flex align-items-start section-item mb-4">
          <ion-icon aria-hidden="true" name="checkmark-circle" className="me-2" />
          <div>
            <h3 className="h5 list-title">View real-time cryptocurrency prices</h3>
            <p className="mb-0 item-text">
              Stay updated with real-time cryptocurrency prices and market trends on Digital Payout.
            </p>
          </div>
        </li>
        <li className="d-flex align-items-start section-item">
          <ion-icon aria-hidden="true" name="checkmark-circle" className="me-2" />
          <div>
            <h3 className="h5 list-title">Buy and sell BTC, ETH, XRP, and more</h3>
            <p className="mb-0 item-text">
              Easily buy and sell a variety of cryptocurrencies including BTC, ETH, XRP, and many others on Digital Payout.
            </p>
          </div>
        </li>
      </ul>
      <a className="btn btn-primary mt-3" href="#">
        Explore More
      </a>
    </div>
  </div>
</section>

  );
};

export default AboutSection;
