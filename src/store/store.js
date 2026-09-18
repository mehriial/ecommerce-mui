import {configureStore} from "@reduxjs/toolkit";
import productFilterReducer from "./slices/productFilterSlice";
import productReducer from "@/store/slices/productSlice.js";
import productDetailReducer from "@/store/slices/productDetailSlice.js";


export const store = configureStore({
    reducer: {
        products: productReducer,
        productFilter: productFilterReducer,
        productDetail: productDetailReducer,
    },
});

export default store;