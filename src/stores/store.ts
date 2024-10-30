import { create } from "zustand";

const useCryptoStore = create((set) => ({
  coins: [],
  fetchCoins: async () => {
    try {
      const response = await fetch("https://api.coinlore.net/api/tickers/");
      const data = await response.json();
      set({ coins: data.data });
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  },
}));

export default useCryptoStore;
