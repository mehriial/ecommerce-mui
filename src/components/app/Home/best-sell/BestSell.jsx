import { Box, Grid, Container, Typography } from "@mui/material";
import { products } from "@/data/mockData.jsx";
import ProductCard from "@/components/app/Products/product-card/ProductCard.jsx";
import {useTranslation} from "react-i18next";

export default function BestSell() {
    const {t} = useTranslation()
    return (
        <Container className="container">
            <Box className="container-box">
                <Typography
                    sx={{
                        fontSize: 12,
                        color: "var(--neutral-b-300)",
                        textAlign: "center",
                    }}
                >
                    {t("bestSell.span")}
                </Typography>

                <Typography
                    sx={{
                        fontSize: 24,
                        color: "var(--neutral-b-900)",
                        textAlign: "center",
                        fontWeight: 700,
                        my: 1,
                    }}
                >
                    {t("bestSell.header")}
                </Typography>

                <Grid container spacing={4}>
                    {products.slice(0, 4).map((item) => (
                        <Grid
                            key={item.id}
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 3,
                            }}
                        >
                            <ProductCard item={item} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}