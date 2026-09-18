import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
    Box, Button,
    IconButton,
    Typography,
} from "@mui/material";

import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
    colors, sizes,
} from "@/data/mockData.jsx";
import {fetchProductById} from "@/store/slices/productSlice.js";
import {
    decreaseQuantity,
    increaseQuantity,
    toggleColor, toggleSize,

} from "@/store/slices/productDetailSlice.js";

export function Detail({
    product
                       }) {

    const {id} = useParams();
    const dispatch = useDispatch();

    const {
        selectedColor,
        selectedSize,
        quantity
    } = useSelector((state) => state.productDetail);

    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (product?.thumbnail) {
            setSelectedImage(product.thumbnail);
        }
    }, [product]);
    return (
        <>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    md: "1.15fr 0.85fr",
                },
                gap: {
                    xs: 5,
                    md: 8,
                },
                alignItems: "start",
            }}>

                <Box
                    sx={{
                        backgroundColor: "#f7f7f7",
                        minHeight: {
                            xs: 300,
                            md: 400,
                        },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: {
                            xs: 3,
                            md: 6,
                        },
                    }}
                >
                    <Box
                        component="img"
                        src={selectedImage}
                        alt={product?.title}
                        sx={{
                            width: "100%",
                            maxWidth: "430px",
                            height: "430px",
                            objectFit: "contain",
                        }}
                    />
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: "center"
                }}>
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: {
                                xs: 24,
                                md: 28,
                            },
                            fontWeight: 600,
                            color: "var(--neutral-b-900)",
                            mb: 1,
                        }}
                    >
                        {product?.title}
                    </Typography>

                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                            backgroundColor: "var(--neutral-w-100)",
                            color: "var(--neutral-b-500)",
                            fontSize: 12,
                            fontWeight: 500,
                            padding: "2px 12px",
                            borderRadius: "100px"
                        }}>
                            <StarIcon sx={{fontSize: 20}}/>
                            {product?.rating} — {product?.reviews?.length} Reviews
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid var(--neutral-w-100)",
                            color: "var(--neutral-b-500)",
                            fontSize: 12,
                            fontWeight: 500,
                            padding: "2px 16px",
                            borderRadius: "100px",
                            textTransform: "uppercase"
                        }}>
                            {product?.availabilityStatus}
                        </Box>
                    </Box>

                    <Typography sx={{
                        margin: "16px 0",
                        fontWeight: 600,
                        fontSize: 18,
                        color: "var(--neutral-b-900)",
                    }}>
                        $75.00
                    </Typography>

                    <Box>
                        <Typography sx={{
                            margin: "16px 0",
                            fontWeight: 500,
                            fontSize: 12,
                            color: "var(--neutral-b-500)",
                            textTransform: "uppercase",
                        }}>
                            Available Colors
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "10px",
                                padding: "0",
                            }}
                        >
                            {colors.map((color) => (
                                <Box
                                    key={color.name}
                                    onClick={() => dispatch(toggleColor(color))}
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: "50%",
                                        backgroundColor: color.value,
                                        cursor: "pointer",
                                        outline:
                                            selectedColor?.name === color.name
                                                ? "1px solid #111"
                                                : "none",

                                        outlineOffset: "2px",
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                margin: "16px 0",
                                fontWeight: 500,
                                fontSize: 12,
                                color: "var(--neutral-b-500)",
                                textTransform: "uppercase",
                            }}
                        >
                            Select Size
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "10px",
                                padding: 0,
                            }}
                        >
                            {sizes.map((size) => {
                                const isSelected = selectedSize?.name === size.name;

                                return (
                                    <Box
                                        key={size.name}
                                        title={size.name}
                                        onClick={() => dispatch(toggleSize(size))}
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: "4px",

                                            border: isSelected
                                                ? "1px solid var(--neutral-b-900)"
                                                : "1px solid var(--neutral-b-100)",

                                            backgroundColor: isSelected
                                                ? "var(--neutral-b-900)"
                                                : "transparent",

                                            color: isSelected
                                                ? "var(--neutral-w-100)"
                                                : "var(--neutral-b-500)",

                                            cursor: "pointer",

                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",

                                            fontSize: 12,
                                            fontWeight: 500,

                                            transition: "all 0.2s ease",

                                            "&:hover": {
                                                borderColor: "var(--neutral-b-900)",
                                            },
                                        }}
                                    >
                                        {size.name}
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>


                    <Box>
                        <Typography
                            sx={{
                                margin: "16px 0",
                                fontWeight: 500,
                                fontSize: 12,
                                color: "var(--neutral-b-500)",
                                textTransform: "uppercase",
                            }}
                        >
                            Quantity
                        </Typography>

                        <Box
                            sx={{
                                width: 140,
                                height: 42,
                                border: "1px solid #e5e7eb",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <IconButton
                                onClick={() => dispatch(decreaseQuantity())}
                                disabled={quantity === 1}
                                sx={{
                                    borderRadius: 0,
                                    width: 40,
                                    height: "100%",
                                }}
                            >
                                <RemoveIcon sx={{fontSize: 15}}/>
                            </IconButton>

                            <Typography
                                sx={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                }}
                            >
                                {quantity}
                            </Typography>

                            <IconButton
                                onClick={() => dispatch(increaseQuantity())}
                                sx={{
                                    borderRadius: 0,
                                    width: 40,
                                    height: "100%",
                                }}
                            >
                                <AddIcon sx={{fontSize: 15}}/>
                            </IconButton>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            mt: 4,
                            display: "flex",
                            gap: 1.5,
                        }}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                height: 44,
                                borderRadius: '4px',
                                textTransform: "none",
                                backgroundColor: "var(--neutral-b-900)",
                                fontWeight: 500,
                                fontSize: 14
                            }}
                        >
                            Add to cart
                        </Button>

                        <IconButton
                            sx={{
                                width: 44,
                                height: 44,
                                border: "1px solid var(--neutral-b-100)",
                                borderRadius: '4px',
                            }}
                        >
                            <FavoriteBorderIcon fontSize="small"/>
                        </IconButton>
                    </Box>

                    <Typography
                        sx={{
                            fontSize: 10,
                            color: "var(--neutral-b-500)",
                            mt: 1.5,
                            textTransform: "uppercase",
                        }}
                    >
                        Free shipping on orders $100+
                    </Typography>
                </Box>
            </Box>
        </>
    )

}