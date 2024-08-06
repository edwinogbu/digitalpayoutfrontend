// src/components/MarketUpdateContainer.js
import React, { useEffect, useState } from 'react';
import { getMarketData } from '../../api';
import MarketUpdateSection from './MarketUpdateSection';

const MarketUpdateContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMarketData();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or other UI element
  }

  return <MarketUpdateSection data={data} />;
};

export default MarketUpdateContainer;
