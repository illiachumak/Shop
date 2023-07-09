import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
  productList: [],
  cartList: [],
  totalPrice: 0,
  editingProduct: null,
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
    clearCartProducts(state) {
      state.cartList = [];
      state.totalPrice = 0;
    },

    editProduct(state, action) {
      const updatedProduct = action.payload;
        state.editingProduct = updatedProduct;
        
        axios.post('http://localhost:3001/changeList', updatedProduct).catch((e) => console.log(e))
      
    },
  },
});



export const { setProducts, setCartProducts, removeCartProduct, clearCartProducts, editProduct, editingProduct} = productListSlice.actions;

export default productListSlice.reducer;
