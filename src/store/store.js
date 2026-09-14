import {configureStore} from "@reduxjs/toolkit";
import productFilterReducer from "./slices/productFilterSlice";
import productReducer from "@/store/slices/productSlice.js";

export const store = configureStore({
    reducer: {
        products: productReducer,
        productFilter: productFilterReducer,
    },
});

export default store;