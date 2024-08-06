import React from 'react';

const AppSection = () => {
  return (
    <section aria-label="app" className="section app">
      <div className="container">
        <div className="app-content">
          <h2 className="h2 section-title">
            Free Your Money & Invest With Confidence
          </h2>
          <p className="section-text">
            With Digital Payout, you can be sure your trading skills are matched
          </p>
          <ul className="section-list">
            <li className="section-item">
              <div className="title-wrapper">
                <ion-icon aria-hidden="true" name="checkmark-circle" />
                <h3 className="h3 item-title">
                  Buy, Sell, And Trade On The Go
                </h3>
              </div>
              <p className="item-text">
                Manage Your Holdings From Your Mobile Device
              </p>
            </li>
            <li className="section-item">
              <div className="title-wrapper">
                <ion-icon aria-hidden="true" name="checkmark-circle" />
                <h3 className="h3 item-title">
                  Take Control Of Your Wealth
                </h3>
              </div>
              <p className="item-text">
                Rest Assured You (And Only You) Have Access To Your Funds
              </p>
            </li>
          </ul>
          <div className="app-wrapper">
            <a href="#">
              <img
                alt="get it on google play"
                height="40"
                loading="lazy"
                src="./assets/images/googleplay.png"
                width="135"
              />
            </a>
            <a href="#">
              <img
                alt="download on the app store"
                height="40"
                loading="lazy"
                src="./assets/images/appstore.png"
                width="120"
              />
            </a>
          </div>
        </div>
        <div className="app-banner">
          <img
            alt="app banner"
            className="w-100"
            height="526"
            loading="lazy"
            src="./assets/images/app-banner.png"
            width="618"
          />
          <span className="span">
            Scan To Download
          </span>
        </div>
      </div>
    </section>
  );
}

export default AppSection;
