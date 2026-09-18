import {Box, Grid, Typography} from "@mui/material";
import ProductCard from "@/components/app/Products/product-card/ProductCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "@/store/slices/productSlice.js";

export default function SimilarProduct(
    {
        category
    }
) {
    const dispatch = useDispatch();
    const {
        products,
    } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(
            fetchProducts({
                limit: 4,
                category: category,
            })
        );
    })
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1200px",
                mx: "auto",
                my: {xs: 6, md: 12},
                px: {xs: 2, md: 0},
            }}
        >
            <Box sx={{mb: 6}}>
                <Typography
                    sx={{
                        fontSize: {xs: 20, md: 24},
                        color: "var(--neutral-b-900)",
                        fontWeight: 700,
                        lineHeight: 1.2,
                        mb: 1,
                    }}
                >
                    You might also like
                </Typography>

                <Typography
                    sx={{
                        fontSize: 11,
                        color: "var(--neutral-b-300)",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                    }}
                >
                    Similar products
                </Typography>
            </Box>

            <Grid
                container
                spacing={{
                    xs: 2,
                    sm: 3,
                    md: 4,
                }}
            >
                {products.slice(0, 4).map((item, index) => (
                    <Grid
                        key={item.id ?? index}
                        size={{
                            xs: 12,
                            sm: 6,
                            md: 3,
                        }}
                    >
                        <ProductCard
                            index={index}
                            item={item}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}