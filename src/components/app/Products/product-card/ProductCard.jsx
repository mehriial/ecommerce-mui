import {
    Box,
    Chip,
    Typography,
} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function ProductCard({item}) {
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <Box onClick={() => handleNavigate(item.id)}
             sx={{
                 cursor: 'pointer'
             }}>
            <Box
                sx={{
                    width: "100%",
                    height: 300,
                    backgroundColor: "var(--neutral-w-100)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 1.5,
                    overflow: "hidden",
                }}
            >
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </Box>

            <Typography
                variant="body2"
                sx={{
                    fontWeight: 500,
                    fontSize: 14,
                    color: "var(--neutral-b-900)",
                    mb: 1,
                    mt: 2,
                }}
            >
                {item.title}
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <Chip
                    label={item.stock}
                    size="small"
                    variant="outlined"
                    sx={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: "var(--neutral-b-900)",
                        px: 1,
                    }}
                />

                <Typography
                    sx={{
                        fontSize: 14,
                        color: "var(--neutral-b-600)",
                    }}
                >
                    ${item.price}
                </Typography>
            </Box>
        </Box>
    );
}