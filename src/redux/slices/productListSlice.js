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
    removeCartProduct(state, action) {
      const removedItemIndex = state.cartList.findIndex(
        (item) => item.name === action.payload
      );
      if (removedItemIndex !== -1) {
        const removedItem = state.cartList[removedItemIndex];
        state.cartList.splice(removedItemIndex, 1);
        state.totalPrice -= removedItem.totalPrice;
      }
    },
  },
});



export const { setProducts, setCartProducts, removeCartProduct} = productListSlice.actions;

export default productListSlice.reducer;
