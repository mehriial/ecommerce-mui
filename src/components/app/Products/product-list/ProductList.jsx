import {
    Box,
    Chip,
    Pagination,
    Typography,
} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {FilterLabel} from "@/components/app/Products/filter-label/FilterLabel.jsx";
import ProductCard from "@/components/app/Products/product-card/ProductCard.jsx";

import {
    removeCategory,
    removeColor,
    removeSize,
} from "@/store/slices/productFilterSlice";

import {fetchProducts} from "@/store/slices/productSlice.js";

const PRODUCTS_PER_PAGE = 9;

export function ProductList() {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    const {
        categories,
        colors,
        sizes,
    } = useSelector((state) => state.productFilter);

    const {
        products,
        total,
        loading,
        error,
    } = useSelector((state) => state.products);

    useEffect(() => {
        const skip = (page - 1) * PRODUCTS_PER_PAGE;

        const selectedCategory =
            categories.length > 0
                ? categories[0].slug
                : null;

        dispatch(
            fetchProducts({
                skip,
                limit: PRODUCTS_PER_PAGE,
                category: selectedCategory,
            })
        );
    }, [dispatch, page, categories]);

    const appliedFilters = [
        ...categories.map((item) => ({
            key: `category-${item.id}`,
            label: item.name,
            onDelete: () => dispatch(removeCategory(item.id)),
        })),

        ...colors.map((item) => ({
            key: `color-${item.name}`,
            label: item.name,
            onDelete: () => dispatch(removeColor(item.name)),
        })),

        ...sizes.map((item) => ({
            key: `size-${item.name}`,
            label: item.name,
            onDelete: () => dispatch(removeSize(item.name)),
        })),
    ];

    const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);

    const firstProduct = total === 0
        ? 0
        : (page - 1) * PRODUCTS_PER_PAGE + 1;

    const lastProduct = Math.min(
        page * PRODUCTS_PER_PAGE,
        total
    );

    const handlePageChange = (_, value) => {
        setPage(value);
    };

    return (
        <Box
            sx={{
                width: "100%",
                minWidth: 0,
            }}
        >
            {/* Applied Filters */}
            <Box>
                <FilterLabel
                    label="Applied Filters:"
                    padding="4px"
                />

                {appliedFilters.length > 0 && (
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                            mt: 1.5,
                        }}
                    >
                        {appliedFilters.map((filter) => (
                            <Chip
                                key={filter.key}
                                label={filter.label}
                                variant="outlined"
                                size="small"
                                onDelete={filter.onDelete}
                            />
                        ))}
                    </Box>
                )}
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 3,
                    color: "var(--neutral-b-500)",
                }}
            >
                <Typography
                    sx={{
                        fontSize: 12,
                    }}
                >
                    Showing {firstProduct}-{lastProduct} of {total} results.
                </Typography>

                <Typography
                    sx={{
                        fontSize: 12,
                    }}
                >
                    Sort by
                </Typography>
            </Box>

            {loading && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        py: 8,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 14,
                            color: "var(--neutral-b-500)",
                        }}
                    >
                        Loading products...
                    </Typography>
                </Box>
            )}

            {!loading && error && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        py: 8,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 14,
                            color: "error.main",
                        }}
                    >
                        {error}
                    </Typography>
                </Box>
            )}

            {!loading && !error && (
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                        },
                        gap: 2,
                        mt: 3,
                    }}
                >
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            item={product}
                        />
                    ))}
                </Box>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <Box
                    sx={{
                        margin: "80px 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                    />
                </Box>
            )}
        </Box>
    );
}