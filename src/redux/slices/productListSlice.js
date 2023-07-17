import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
  productList: [],
  cartList: [],
  totalPrice: 0,
  editingProduct: null,
  deletion: false,
  isLoaded: false,
};

export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async (categoryId, sortType) => {
    const {data} = await axios.get(`http://localhost:3001/product?category=${categoryId}&sort=${sortType}`)
    return data
  }
)

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
    setDeletion(state){
      state.deletion = !state.deletion;
    },

    editProduct(state, action) {
      const updatedProduct = action.payload;
        state.editingProduct = updatedProduct;
        
        axios.put('http://localhost:3001/product', updatedProduct).catch((e) => console.log(e))
      
    },

    
  },
  extraReducers: {
    [fetchItems.pending] : (state) => {
      state.isLoaded = false;
    },
    [fetchItems.fulfilled] : (state, action) => {
      state.productList = action.payload;
      state.isLoaded = true;
    },
  }
});



export const { setProducts, setCartProducts, removeCartProduct, clearCartProducts, editProduct, editingProduct, setDeletion} = productListSlice.actions;

export default productListSlice.reducer;
