import {useState} from "react";
import {Box, Chip, Grid, Stack, Container} from "@mui/material";
import {products} from "@/data/mockData.jsx";
import ProductCard from "@/components/app/Products/product-card/ProductCard.jsx";
import {useTranslation} from "react-i18next";

export default function HomeProduct() {
    const {t} = useTranslation()
    const [activeTab, setActiveTab] = useState("featured");

    const filteredProducts = products.filter((item) =>
        activeTab === "featured"
            ? item.type === "featured"
            : item.type === "latest"
    );

    return (
        <Container className="container">
            <Box className="container-box">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{mb: 2}}
                    >
                        <Chip
                            label={t("Featured")}
                            clickable
                            variant={activeTab === "featured" ? "filled" : "outlined"}
                            onClick={() => setActiveTab("featured")}
                            sx={{
                                backgroundColor:
                                    activeTab === "featured"
                                        ? "var(--neutral-b-900)"
                                        : "transparent",
                                color:
                                    activeTab === "featured"
                                        ? "var(--neutral-w-100)"
                                        : "var(--neutral-b-900)",
                                borderColor: "var(--neutral-w-200)",
                            }}
                        />

                        <Chip
                            label={t("Latest")}
                            clickable
                            variant={activeTab === "latest" ? "filled" : "outlined"}
                            onClick={() => setActiveTab("latest")}
                            sx={{
                                backgroundColor:
                                    activeTab === "latest"
                                        ? "var(--neutral-b-900)"
                                        : "transparent",
                                color:
                                    activeTab === "latest"
                                        ? "var(--neutral-w-100)"
                                        : "var(--neutral-b-900)",
                                borderColor: "var(--neutral-w-200)",
                            }}
                        />
                    </Stack>
                </Box>

                <Grid container spacing={4}>
                    {filteredProducts.slice(0, 4).map((item) => (
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