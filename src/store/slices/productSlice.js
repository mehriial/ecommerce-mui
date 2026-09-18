import {
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";

import api from "@/api/axios.js";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (
        {
            skip = 0,
            limit = 9,
            category = null,
        } = {},
        {rejectWithValue}
    ) => {
        try {
            const url = category
                ? `/products/category/${category}`
                : "/products";

            const response = await api.get(url, {
                params: {
                    skip,
                    limit,
                },
            });

            return response.data;
        } catch (error) {
            return rejectWithValue("Product yüklənmədi");
        }
    }
);

export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (id, {rejectWithValue}) => {
        try {
            const response = await api.get(`/products/${id}`);

            return response.data;
        } catch (error) {
            return rejectWithValue("Product tapılmadı");
        }
    }
);


export const fetchCategories = createAsyncThunk(
    "products/fetchCategories",
    async (_, {rejectWithValue}) => {
        try {
            const response = await api.get("/products/categories");

            return response.data;
        } catch (error) {
            return rejectWithValue("Kateqoriyalar yüklənmədi");
        }
    }
);

const initialState = {
    products: [],
    total: 0,
    skip: 0,
    limit: 9,

    categories: [],

    selectedProduct: null,

    loading: false,
    detailLoading: false,
    categoriesLoading: false,

    error: null,
    detailError: null,
    categoriesError: null,
};

const productSlice = createSlice({
    name: "products",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;

                state.products = action.payload.products;
                state.total = action.payload.total;
                state.skip = action.payload.skip;
                state.limit = action.payload.limit;
            })

            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchProductById.pending, (state) => {
                state.detailLoading = true;
                state.detailError = null;
            })

            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.detailLoading = false;
                state.selectedProduct = action.payload;
            })

            .addCase(fetchProductById.rejected, (state, action) => {
                state.detailLoading = false;
                state.detailError = action.payload;
            })

            .addCase(fetchCategories.pending, (state) => {
                state.categoriesLoading = true;
                state.categoriesError = null;
            })

            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categoriesLoading = false;
                state.categories = action.payload;
            })

            .addCase(fetchCategories.rejected, (state, action) => {
                state.categoriesLoading = false;
                state.categoriesError = action.payload;
            });
    },
});

export default productSlice.reducer;