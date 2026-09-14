import {
    Box,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {FilterLabel} from "@/components/app/Products/filter-label/FilterLabel.jsx";
import {
    sizes,
    colors,
} from "@/data/mockData.jsx";
import {
    toggleCategory,
    toggleColor,
    toggleSize,
} from "@/store/slices/productFilterSlice";
import {fetchCategories} from "@/store/slices/productSlice.js";
import {useEffect} from "react";


export function ProductFilter() {
    const dispatch = useDispatch();

    const {
        categories: selectedCategories,
        colors: selectedColors,
        sizes: selectedSizes,
    } = useSelector((state) => state.productFilter);

    const {
        categories,
        categoriesLoading,
        categoriesError,
    } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <Box
            sx={{
                border: "1px solid var(--neutral-b-100)",
                borderRadius: "6px",
                maxHeight: "800px",
                height: "800px",
                maxWidth: "300px",
                width: "280px",
            }}
        >
            {/* Categories */}
            <Box>
                <FilterLabel label="Categories"/>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "0 18px 18px",
                        overflowY: "auto",
                        maxHeight: "350px",
                        scrollbarWidth: 'none'
                    }}
                >
                    {!categoriesLoading &&
                        !categoriesError &&
                        categories.map((category) => {
                            const isSelected = selectedCategories.some(
                                (item) => item.slug === category.slug
                            );

                            return (
                                <FormControlLabel
                                    key={category.slug}
                                    control={
                                        <Checkbox
                                            size="small"
                                            checked={isSelected}
                                            onChange={() =>
                                                dispatch(
                                                    toggleCategory(category)
                                                )
                                            }
                                            sx={{
                                                padding: "4px",
                                            }}
                                        />
                                    }
                                    label={category.name}
                                    sx={{
                                        padding: "8px",
                                        borderBottom:
                                            "1px solid var(--neutral-w-200)",
                                        minHeight: "36px",
                                        color: "var(--neutral-b-600)",
                                        "& .MuiFormControlLabel-label": {
                                            fontSize: "14px",
                                        },
                                    }}
                                />
                            );
                        })}
                </Box>
            </Box>

            {/* Color */}
            <Box>
                <FilterLabel label="Color"/>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        padding: "0 18px 18px",
                    }}
                >
                    {colors.map((color) => {
                        const isSelected = selectedColors.some(
                            (item) => item.name === color.name
                        );

                        return (
                            <Box
                                key={color.name}
                                title={color.name}
                                onClick={() =>
                                    dispatch(toggleColor(color))
                                }
                                sx={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    backgroundColor: color.value,
                                    outline: isSelected
                                        ? "1px solid var(--neutral-b-900)"
                                        : "none",
                                    outlineOffset: "4px",
                                    cursor: "pointer",
                                }}
                            />
                        );
                    })}
                </Box>
            </Box>

            {/* Size */}
            <Box>
                <FilterLabel label="Size"/>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        padding: "0 18px 18px",
                    }}
                >
                    {sizes.map((size) => {
                        const isSelected = selectedSizes.some(
                            (item) => item.name === size.name
                        );

                        return (
                            <Box
                                key={size.name}
                                title={size.name}
                                onClick={() =>
                                    dispatch(toggleSize(size))
                                }
                                sx={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: "4px",
                                    border: isSelected
                                        ? "1px solid var(--neutral-b-900)"
                                        : "1px solid var(--neutral-b-100)",
                                    cursor: "pointer",
                                    color: isSelected
                                        ? "var(--neutral-b-900)"
                                        : "var(--neutral-b-500)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 12,
                                    fontWeight: 500,
                                }}
                            >
                                {size.name}
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
}