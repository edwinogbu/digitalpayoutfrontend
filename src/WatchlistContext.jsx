import React, { createContext, useState, useEffect, useContext } from 'react';

const WatchlistContext = createContext();

export const useWatchlist = () => useContext(WatchlistContext);

const WatchlistProvider = ({ children }) => {
  const [watchlistCoinIds, setWatchlistCoinIds] = useState([]);

  const getWatchlistData = () => {
    try {
      const storedCoins = localStorage.getItem("@watchlist_coins");
      if (storedCoins !== null) {
        setWatchlistCoinIds(JSON.parse(storedCoins));
      }
    } catch (error) {
      console.error("Error getting watchlist data:", error);
    }
  };

  useEffect(() => {
    getWatchlistData();
  }, []);

  const storeWatchlistCoinId = (coinId) => {
    try {
      const updatedWatchlist = [...watchlistCoinIds, coinId];
      localStorage.setItem("@watchlist_coins", JSON.stringify(updatedWatchlist));
      setWatchlistCoinIds(updatedWatchlist);
    } catch (error) {
      console.error("Error storing watchlist coin ID:", error);
    }
  };

  const removeWatchlistCoinId = (coinId) => {
    try {
      const updatedWatchlist = watchlistCoinIds.filter((id) => id !== coinId);
      localStorage.setItem("@watchlist_coins", JSON.stringify(updatedWatchlist));
      setWatchlistCoinIds(updatedWatchlist);
    } catch (error) {
      console.error("Error removing watchlist coin ID:", error);
    }
  };

  return (
    <WatchlistContext.Provider value={{ watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistProvider;


// import React, { useContext, createContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const WatchlistContext = createContext();

// export const useWatchlist = () => useContext(WatchlistContext);

// const WatchlistProvider = ({children}) => {
//   const [watchlistCoinIds, setWatchlistCoinIds] = useState([]);

//   const getWatchlistData = async () => {
//     try {
//       const jsonValue = await AsyncStorage.getItem("@watchlist_coins");
//       setWatchlistCoinIds(jsonValue != null ? JSON.parse(jsonValue) : []);
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   useEffect(() => {
//     getWatchlistData()
//   },[])

//   const storeWatchlistCoinId = async (coinId) => {
//     try {
//       const newWatchlist = [...watchlistCoinIds, coinId];
//       const jsonValue = JSON.stringify(newWatchlist);
//       await AsyncStorage.setItem('@watchlist_coins', jsonValue);
//       setWatchlistCoinIds(newWatchlist);
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   const removeWatchlistCoinId = async (coinId) => {
//     const newWatchlist = watchlistCoinIds.filter((coinIdValue) => coinIdValue !== coinId);
//     const jsonValue = JSON.stringify(newWatchlist);
//     await AsyncStorage.setItem('@watchlist_coins', jsonValue);
//     setWatchlistCoinIds(newWatchlist);
//   }

//   return (
//     <WatchlistContext.Provider value={{watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId}}>
//       {children}
//     </WatchlistContext.Provider>
//   )
// }

// export default WatchlistProvider;