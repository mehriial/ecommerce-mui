import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedColor: null,
    selectedSize: null,
    quantity: 1,
};

const productDetailSlice = createSlice({
    name: "productDetail",
    initialState,

    reducers: {
        toggleColor: (state, action) => {
            const color = action.payload;

            if (state.selectedColor?.name === color.name) {
                state.selectedColor = null;
            } else {
                state.selectedColor = color;
            }
        },

        toggleSize: (state, action) => {
            const size = action.payload;

            if (state.selectedSize?.name === size.name) {
                state.selectedSize = null;
            } else {
                state.selectedSize = size;
            }
        },

        increaseQuantity: (state)=> {
            state.quantity += 1
        },

        decreaseQuantity: (state)=> {
            if(state.quantity > 1) {
                state.quantity -=1
            }
        },

        setQuantity: (state, action) => {
            const quantity = Number(action.payload);

            if (quantity >= 1) {
                state.quantity = quantity;
            }
        },

        resetProductDetail: (state) => {
            state.selectedColor = null;
            state.selectedSize = null;
            state.quantity = 1;
        },
    },
});

export const {
    toggleColor,
    toggleSize,
    increaseQuantity,
    decreaseQuantity,
    setQuantity,
    resetProductDetail,
} = productDetailSlice.actions;

export default productDetailSlice.reducer;