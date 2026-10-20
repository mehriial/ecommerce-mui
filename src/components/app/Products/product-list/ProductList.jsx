
import {
    Box,
    Chip,
    Pagination,
    Typography,
    CircularProgress,
} from "@mui/material";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { useTranslation } from "react-i18next";

import { FilterLabel } from "@/components/app/Products/filter-label/FilterLabel.jsx";
import ProductCard from "@/components/app/Products/product-card/ProductCard.jsx";

import {
    removeCategory,
    removeColor,
    removeSize,
} from "@/store/slices/productFilterSlice";

import { fetchProducts } from "@/store/slices/productSlice.js";

const PRODUCTS_PER_PAGE = 9;

export function ProductList() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search")?.trim() || "";

    const pageParam = Number(searchParams.get("page"));
    const page =
        Number.isInteger(pageParam) && pageParam > 0
            ? pageParam
            : 1;

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

    const selectedCategory =
        categories.length > 0
            ? categories[0].slug
            : null;

    useEffect(() => {
        const skip = (page - 1) * PRODUCTS_PER_PAGE;

        dispatch(
            fetchProducts({
                skip,
                limit: PRODUCTS_PER_PAGE,
                category: selectedCategory,
                search,
            })
        );
    }, [dispatch, page, selectedCategory, search]);

    const updatePage = (value) => {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);

            if (value === 1) {
                params.delete("page");
            } else {
                params.set("page", String(value));
            }

            return params;
        });
    };

    const handlePageChange = (_, value) => {
        updatePage(value);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleRemoveSearch = () => {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);

            params.delete("search");
            params.delete("page");

            return params;
        });
    };

    const handleRemoveCategory = (id) => {
        dispatch(removeCategory(id));
        updatePage(1);
    };

    const appliedFilters = [
        ...(search
            ? [
                {
                    key: "search",
                    label: `Search: ${search}`,
                    onDelete: handleRemoveSearch,
                },
            ]
            : []),

        ...categories.map((item) => ({
            key: `category-${item.id}`,
            label: item.name,
            onDelete: () => handleRemoveCategory(item.id),
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

    const firstProduct =
        total === 0
            ? 0
            : (page - 1) * PRODUCTS_PER_PAGE + 1;

    const lastProduct = Math.min(
        page * PRODUCTS_PER_PAGE,
        total
    );

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
                    label="Applied Filters"
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

            {/* Results Header */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 3,
                    gap: 2,
                    color: "var(--neutral-b-500)",
                }}
            >
                <Typography
                    sx={{
                        fontSize: 12,
                    }}
                >
                    {t("products.results", {
                        first: firstProduct,
                        last: lastProduct,
                        total,
                    })}
                </Typography>

                <Typography
                    sx={{
                        fontSize: 12,
                    }}
                >
                    {t("product.sortBy")}
                </Typography>
            </Box>

            {/* Loading */}
            {loading && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                        py: 10,
                    }}
                >
                    <CircularProgress size={28} />

                    <Typography
                        sx={{
                            fontSize: 14,
                            color: "var(--neutral-b-500)",
                        }}
                    >
                        {t("products.loading")}
                    </Typography>
                </Box>
            )}

            {/* Error */}
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

            {/* Empty State */}
            {!loading && !error && products.length === 0 && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        py: 10,
                        gap: 1,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 18,
                            fontWeight: 600,
                        }}
                    >
                        {t("products.noProducts")}
                    </Typography>

                    {search && (
                        <Typography
                            sx={{
                                fontSize: 13,
                                color: "var(--neutral-b-500)",
                            }}
                        >
                            No results found for "{search}"
                        </Typography>
                    )}
                </Box>
            )}

            {/* Product Grid */}
            {!loading && !error && products.length > 0 && (
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
            {!loading && !error && totalPages > 1 && (
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
                        page={Math.min(page, totalPages)}
                        onChange={handlePageChange}
                    />
                </Box>
            )}
        </Box>
    );
}
