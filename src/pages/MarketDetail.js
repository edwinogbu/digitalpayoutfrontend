import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getDetailedCoinData,
  getCoinMarketChart,
  getCandleChartData,
  getTimeVariantOptions,
  getMoneyFlowData
} from '../api'; // Update the import path
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   getDetailedCoinData,
//   getCoinMarketChart,
//   getCandleChartData,
//   getMoneyFlowData
// } from '../api'; // Adjust the path as necessary
// import { Line } from 'react-chartjs-2';
import Navbar from '../components/frontend/Navbar'
import Footer from '../components/frontend/Footer'

const MarketDetail = () => {
    const { coinId } = useParams();
    const [coinData, setCoinData] = useState(null);
    const [marketChartData, setMarketChartData] = useState(null);
    const [candleChartData, setCandleChartData] = useState(null);
    const [moneyFlowData, setMoneyFlowData] = useState(null);
    const [selectedRange, setSelectedRange] = useState(30); // Default to 30 days
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const detailedData = await getDetailedCoinData(coinId);
          setCoinData(detailedData);
  
          const chartData = await getCoinMarketChart(coinId, selectedRange);
          setMarketChartData(chartData);
  
          const candleData = await getCandleChartData(coinId, selectedRange);
          setCandleChartData(candleData);
  
          const flowData = await getMoneyFlowData(coinId, selectedRange);
          setMoneyFlowData(flowData);
  
          setLoading(false);
        } catch (error) {
          console.error("Error fetching coin details:", error);
        }
      };
  
      fetchData();
    }, [coinId, selectedRange]);
  
    const handleRangeChange = async (event) => {
      setSelectedRange(event.target.value);
      setLoading(true);
  
      try {
        const chartData = await getCoinMarketChart(coinId, event.target.value);
        setMarketChartData(chartData);
  
        const candleData = await getCandleChartData(coinId, event.target.value);
        setCandleChartData(candleData);
  
        const flowData = await getMoneyFlowData(coinId, event.target.value);
        setMoneyFlowData(flowData);
  
        setLoading(false);
      } catch (error) {
        console.error("Error updating charts:", error);
      }
    };
  
    const getChartOptions = (data, label) => ({
      labels: data?.map(item => new Date(item[0]).toLocaleDateString()),
      datasets: [
        {
          label: label,
          data: data?.map(item => item[1]),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1,
        },
      ],
    });
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
//   const { coinId } = useParams();
//   const [coinData, setCoinData] = useState(null);
//   const [marketChartData, setMarketChartData] = useState(null);
//   const [candleChartData, setCandleChartData] = useState(null);
//   const [moneyFlowData, setMoneyFlowData] = useState(null);
//   const [selectedRange, setSelectedRange] = useState(30); // Default to 30 days
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const detailedData = await getDetailedCoinData(coinId);
//         setCoinData(detailedData);

//         const chartData = await getCoinMarketChart(coinId, selectedRange);
//         setMarketChartData(chartData);

//         const candleData = await getCandleChartData(coinId, selectedRange);
//         setCandleChartData(candleData);

//         const flowData = await getMoneyFlowData(coinId, selectedRange);
//         setMoneyFlowData(flowData);

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching coin details:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [coinId, selectedRange]);

//   const handleRangeChange = async (event) => {
//     const range = event.target.value;
//     setSelectedRange(range);
//     setLoading(true);

//     try {
//       const chartData = await getCoinMarketChart(coinId, range);
//       setMarketChartData(chartData);

//       const candleData = await getCandleChartData(coinId, range);
//       setCandleChartData(candleData);

//       const flowData = await getMoneyFlowData(coinId, range);
//       setMoneyFlowData(flowData);

//       setLoading(false);
//     } catch (error) {
//       console.error("Error updating charts:", error);
//       setLoading(false);
//     }
//   };

//   const getChartOptions = (data, label) => ({
//     labels: data?.map(item => new Date(item[0]).toLocaleDateString()),
//     datasets: [
//       {
//         label: label,
//         data: data?.map(item => item[1]),
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderWidth: 1,
//       },
//     ],
//   });

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  return (
    <>
    <Navbar /> 
    <section>
        <div className="title-wrapper text-center">
          <h1 className="h2 section-title text-center text-white">
              Trending Crypto
          </h1>
        </div>
        {/* <TrendingCrypto /> */}
    </section>
    {/* <div className="market-detail">
      {coinData && (
        <div className="coin-info">
          <h1>{coinData.name} ({coinData.symbol.toUpperCase()})</h1>
          <img src={coinData.image.large} alt={coinData.name} />
          <p>Current Price: ${coinData.market_data.current_price.usd.toLocaleString()}</p>
          <p>Market Cap: ${coinData.market_data.market_cap.usd.toLocaleString()}</p>
          <p>24h Change: {coinData.market_data.price_change_percentage_24h.toFixed(2)}%</p>
        </div>
      )}

      <div className="charts">
        <div className="chart">
          <h2>Market Chart</h2>
          {marketChartData && <Line data={getChartOptions(marketChartData.prices, 'Price')} />}
        </div>
        <div className="chart">
          <h2>Candle Chart</h2>
          {candleChartData && <Line data={getChartOptions(candleChartData.prices, 'Price')} />}
        </div>
        <div className="chart">
          <h2>Money Flow</h2>
          {moneyFlowData && <Line data={getChartOptions(moneyFlowData, 'Money Flow')} />}
        </div>
      </div>

      <div className="range-selector">
        <label htmlFor="range">Select Range: </label>
        <select id="range" value={selectedRange} onChange={handleRangeChange}>
          <option value="1">1 Day</option>
          <option value="7">7 Days</option>
          <option value="30">30 Days</option>
          <option value="90">90 Days</option>
          <option value="365">1 Year</option>
        </select>
      </div>
    </div> */}
          <section
        aria-label="crypto trend"
        className="section trend"
        style={{backgroundColor:'#331177'}}
      >
        <h1 className="h2 section-title text-center text-white">
              Crypto Currency details
          </h1>
     <div className="market-detail"  style={{ backgroundColor: '#000033', color: '#FFF' }}>
      <div className="row container-fluid main-content px-2 px-lg-4">
        <div className="col-md-4" >
          <h1>{coinData?.name}</h1>
          <p style={{ backgroundColor: '#000033', color: '#FFF', border:5 }}>{coinData?.description.en}</p>
          <h3>Current Price: ${coinData?.market_data.current_price.usd.toFixed(2)}</h3>
          <h4>Market Cap: ${coinData?.market_data.market_cap.usd.toLocaleString()}</h4>
          <h4>Total Volume: ${coinData?.market_data.total_volume.usd.toLocaleString()}</h4>
        </div>
        <div className="col-md-8">
          <select onChange={handleRangeChange} value={selectedRange}>
            {getTimeVariantOptions().map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <div className="chart-container">
            <h3>Price Chart</h3>
            {marketChartData && (
              <Line data={getChartOptions(marketChartData.prices, 'Price')} />
            )}
          </div>
          <div className="chart-container">
            <h3>Candle Chart</h3>
            {candleChartData && (
              <Line data={getChartOptions(candleChartData, 'Candles')} />
            )}
          </div>
          <div className="chart-container">
            <h3>Money Flow</h3>
            {moneyFlowData && (
              <Line data={getChartOptions(moneyFlowData.prices, 'Money Flow')} />
            )}
          </div>
        </div>
      </div>
    </div>
</section>
    <Footer />
     </>
     
  );
};

export default MarketDetail;
