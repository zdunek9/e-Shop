import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialStoreState = {
  items: [],
  showCard: false,
  totalQuantity: 0,
  totalAmount: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialStoreState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existItem = state.items.find((findItem) => findItem.id === item.id);
      if (!existItem) {
        state.items.push({
          id: item.id,
          price: item.price,
          amount: 1,
          title: item.title,
          totalPrice: item.price,
          availability: Math.floor(Math.random() * 20) + 1,
        });
        state.totalAmount = state.totalAmount + item.price;
        state.totalQuantity++;
      } else if (existItem.amount < existItem.availability) {
        existItem.amount++;
        existItem.totalPrice = existItem.totalPrice + item.price;
        state.totalAmount = state.totalAmount + item.price;
        state.totalQuantity++;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existItem = state.items.find((item) => item.id === id);
      if (existItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existItem.amount--;
        existItem.totalPrice = existItem.totalPrice - existItem.price;
      }
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existItem.price;
    },
    changeShowCard(state) {
      state.showCard = !state.showCard;
    },
  },
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });
export const counterActions = counterSlice.actions;
export default store;
