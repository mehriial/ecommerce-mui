import {Box, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

export default function ProductDetails({
                                           product
                                       }) {

    const {t} = useTranslation()

    return (
        <Box>
            <Typography
                component="h2"
                sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--neutral-b-900)",
                    mb: 3,
                }}
            >
                {t("productDetail.header")}
            </Typography>

            <Typography
                sx={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--neutral-b-500)",
                    maxWidth: "850px",
                }}
            >
                {product?.description}
            </Typography>

        </Box>
    );
}