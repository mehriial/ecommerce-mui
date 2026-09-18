import {useState} from "react";
import {Box} from "@mui/material";
import ProductDetailTabMenu from "./ProductDetailTabMenu.jsx";
import ProductDetails from "./ProductDetails.jsx";
import ProductReviews from "./ProductReviews.jsx";

export default function ProductDetailTabs({
                                              product
                                          }) {
    const [activeTab, setActiveTab] = useState("details");

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1200px",
                mx: "auto",
                my: {xs: 6, md: 10},
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    md: "220px 1fr",
                },
                gap: {
                    xs: 4,
                    md: 6,
                },
            }}
        >
            <ProductDetailTabMenu
                activeTab={activeTab}
                onChange={setActiveTab}
            />

            <Box>
                {activeTab === "details" && <ProductDetails product={product}/>}

                {activeTab === "reviews" && <ProductReviews product={product}/>}
            </Box>
        </Box>
    );
}