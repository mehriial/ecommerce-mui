import {useState} from "react";
import {Box, Chip, Grid, Stack, Container} from "@mui/material";
import {products} from "@/data/mockData.jsx";
import ProductCard from "@/components/app/product/ProductCard.jsx";

export default function HomeProduct() {
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
                            label="Featured"
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
                            label="Latest"
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
                    {filteredProducts.map((item, index) => (
                        <ProductCard
                            key={index}
                            index={index}
                            item={item}
                        />
                    ))}
                </Grid>

            </Box>
        </Container>
    );
}