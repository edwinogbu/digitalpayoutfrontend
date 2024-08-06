import React from 'react';

const InstructionSection = () => {
  const steps = [
    {
      image: './assets/images/instruction-1.png',
      title: 'Download the Digital Payout App',
      description: 'Download the Digital Payout app from your app store to get started.',
    },
    {
      image: './assets/images/instruction-2.png',
      title: 'Connect Your Digital Wallet',
      description: 'Connect your digital wallet securely to your Digital Payout account.',
    },
    {
      image: './assets/images/instruction-3.png',
      title: 'Start Trading',
      description: "Begin trading cryptocurrencies with ease using Digital Payout's intuitive platform.",
    },
    {
      image: './assets/images/instruction-4.png',
      title: 'Earn Money',
      description: 'Explore various investment opportunities and earn profits through Digital Payout.',
    },
  ];

  return (
    // <section aria-label="instruction" className="section instruction">
    //   <div className="container">
    //     <h2 className="h2 section-title">How It Works</h2>
    //     <p className="section-text">
    //       Digital Payout makes buying and selling digital assets incredibly easy for me. I highly recommend it to anyone looking to get into crypto.
    //     </p>
    //     <ul className="instruction-list">
    //       {steps.map((step, index) => (
    //         <li key={index}>
    //           <div className="instruction-card">
    //             <figure className="card-banner">
    //               <img
    //                 alt={`Step ${index + 1}`}
    //                 className="img"
    //                 height="96"
    //                 loading="lazy"
    //                 src={step.image}
    //                 width="96"
    //               />
    //             </figure>
    //             <p className="card-subtitle">Step {index + 1}</p>
    //             <h3 className="h3 card-title">{step.title}</h3>
    //             <p className="card-text">{step.description}</p>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </section>
    <section aria-label="instruction" className="section instruction">
  <div className="container" style={{backgroundColor:'#000033', borderRadius:10, padding:1, color:'#fff'}}>
    <h2 className="display-4 section-title">How It Works</h2>
    <p className="lead section-text" style={{backgroundColor:'#000033', borderRadius:10, padding:1, color:'#fff'}}>
      Digital Payout makes buying and selling digital assets incredibly easy for me. I highly recommend it to anyone looking to get into crypto.
    </p>
    <ul className="list-unstyled instruction-list">
      {steps.map((step, index) => (
        <li key={index} className="mb-4">
          <div className="card">
            <figure className="card-body">
              <img
                alt={`Step ${index + 1}`}
                className="img-fluid"
                height="96"
                loading="lazy"
                src={step.image}
                width="96"
              />
            </figure>
            <div className="card-body">
              <p className="card-subtitle">Step {index + 1}</p>
              <h3 className="h5 card-title">{step.title}</h3>
              <p className="card-text">{step.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
</section>

  );
};

export default InstructionSection;
