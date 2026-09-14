// import {createSlice} from "@reduxjs/toolkit";
//
// const initialState = {
//     categories: [],
//     colors: [],
//     sizes: [],
// };
//
// const productFilterSlice = createSlice({
//     name: "productFilter",
//     initialState,
//     reducers: {
//         toggleCategory: (state, action) => {
//             const category = action.payload;
//
//             const exists = state.categories.some(
//                 (item) => item.id === category.id
//             );
//
//             if (exists) {
//                 state.categories = state.categories.filter(
//                     (item) => item.id !== category.id
//                 );
//             } else {
//                 state.categories.push(category);
//             }
//         },
//
//         toggleColor: (state, action) => {
//             const color = action.payload;
//
//             const exists = state.colors.some(
//                 (item) => item.name === color.name
//             );
//
//             if (exists) {
//                 state.colors = state.colors.filter(
//                     (item) => item.name !== color.name
//                 );
//             } else {
//                 state.colors.push(color);
//             }
//         },
//
//         toggleSize: (state, action) => {
//             const size = action.payload;
//
//             const exists = state.sizes.some(
//                 (item) => item.name === size.name
//             );
//
//             if (exists) {
//                 state.sizes = state.sizes.filter(
//                     (item) => item.name !== size.name
//                 );
//             } else {
//                 state.sizes.push(size);
//             }
//         },
//
//         removeCategory: (state, action) => {
//             state.categories = state.categories.filter(
//                 (item) => item.id !== action.payload
//             );
//         },
//
//         removeColor: (state, action) => {
//             state.colors = state.colors.filter(
//                 (item) => item.name !== action.payload
//             );
//         },
//
//         removeSize: (state, action) => {
//             state.sizes = state.sizes.filter(
//                 (item) => item.name !== action.payload
//             );
//         },
//
//         clearFilters: (state) => {
//             state.categories = [];
//             state.colors = [];
//             state.sizes = [];
//         },
//     },
// });
//
// export const {
//     toggleCategory,
//     toggleColor,
//     toggleSize,
//     removeCategory,
//     removeColor,
//     removeSize,
//     clearFilters,
// } = productFilterSlice.actions;
//
// export default productFilterSlice.reducer;


import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    colors: [],
    sizes: [],
};

const productFilterSlice = createSlice({
    name: "productFilter",
    initialState,
    reducers: {
        toggleCategory: (state, action) => {
            const category = action.payload;

            const exist = state.categories.some((item) => item.id === category.id)

            if (exist) {
                state.categories = state.categories.filter(
                    (item) => item.id !== category.id
                );
            } else {
                state.categories.push(category)
            }
        },

        toggleColor: (state, action) => {
            const color = action.payload;

            const exists = state.colors.some(
                (item) => item.name === color.name
            );

            if (exists) {
                state.colors = state.colors.filter(
                    (item) => item.name !== color.name
                );
            } else {
                state.colors.push(color);
            }
        },

        toggleSize: (state, action) => {
            const size = action.payload;

            const exists = state.sizes.some(
                (item) => item.name === size.name
            );

            if (exists) {
                state.sizes = state.sizes.filter(
                    (item) => item.name !== size.name
                );
            } else {
                state.sizes.push(size);
            }
        },

        removeCategory: (state, action) => {
            state.categories = state.categories.filter(
                (item) => item.id !== action.payload
            );
        },

        removeColor: (state, action) => {
            state.colors = state.colors.filter(
                (item) => item.name !== action.payload
            );
        },

        removeSize: (state, action) => {
            state.sizes = state.sizes.filter(
                (item) => item.name !== action.payload
            );
        },

        clearFilters: (state) => {
            state.categories = [];
            state.colors = [];
            state.sizes = [];
        },
    },
});

export const {
    toggleCategory,
    toggleColor,
    toggleSize,
    removeCategory,
    removeColor,
    removeSize,
    clearFilters,
} = productFilterSlice.actions;

export default productFilterSlice.reducer;