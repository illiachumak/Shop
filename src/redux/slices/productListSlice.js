import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  cartList: [],
  totalPrice: 0,
};

export const productListSlice = createSlice({
  name: 'productItems',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.productList = action.payload;
    },
    setCartProducts(state, action) {
      state.cartList.push(action.payload);
      state.totalPrice += action.payload.totalPrice;
      
    },
  },
});

export const { setProducts, setCartProducts } = productListSlice.actions;

export default productListSlice.reducer;
