import {
    Avatar,
    Box,
    Button,
    Typography,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function ProductReviews({product}) {

    const getInitials = (name = "") => {
        return name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "700px",
            }}
        >
            <Typography
                component="h2"
                sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--neutral-b-900)",
                    mb: 1.5,
                }}
            >
                Reviews
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 3,
                }}
            >
                <Typography
                    sx={{
                        fontSize: 32,
                        lineHeight: 1,
                        color: "var(--neutral-b-900)",
                        fontWeight: 700,
                    }}
                >
                    {product?.rating ?? 0}
                </Typography>

                <Typography
                    sx={{
                        fontSize: 14,
                        color: "var(--neutral-b-400)",
                    }}
                >
                    — {product?.reviews?.length} Reviews
                </Typography>
            </Box>

            <Button
                type="button"
                variant="outlined"
                sx={{
                    textTransform: "none",
                    border: "1px solid var(--neutral-b-900)",
                    color: "var(--neutral-b-900)",
                    borderRadius: "4px",
                    fontSize: 14,
                    px: 3,
                    py: 1,
                    mb: 4,
                }}
            >
                Write a review
            </Button>

            {product?.reviews?.length > 0 && (
                <>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            borderBottom: "1px solid var(--neutral-w-200)",
                            pb: 2,
                            mb: 1,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 11,
                                color: "var(--neutral-b-500)",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                mr: 0.5,
                            }}
                        >
                            Sort by
                        </Typography>
                    </Box>

                    <Box>
                        {product?.reviews?.map((review, index) => (
                            <Box
                                key={review.id ?? index}
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "50px 1fr",
                                    gap: 2.5,
                                    py: 3,
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: 44,
                                        height: 44,
                                        fontSize: 12,
                                        background: "var(--primary-b-100)",
                                        color: "var(--semantic-bl-900)",
                                    }}
                                >
                                    {getInitials(
                                        review.reviewerName ??
                                        review.name ??
                                        review.user?.name
                                    )}
                                </Avatar>

                                <Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            justifyContent: "space-between",
                                            gap: 2,
                                        }}
                                    >
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    color: "var(--neutral-b-900)",
                                                }}
                                            >
                                                {review.reviewerName ??
                                                    "Anonymous"}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    mt: 1,
                                                    fontSize: 12,
                                                    color: "var(--neutral-b-500)",
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                {review.date}
                                            </Typography>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            {Array.from({length: 5}).map(
                                                (_, starIndex) => {
                                                    const active =
                                                        starIndex <
                                                        review.rating;

                                                    return active ? (
                                                        <StarIcon
                                                            key={starIndex}
                                                            sx={{
                                                                fontSize: 16,
                                                                color: "var(--neutral-b-500)",
                                                            }}
                                                        />
                                                    ) : (
                                                        <StarBorderIcon
                                                            key={starIndex}
                                                            sx={{
                                                                fontSize: 16,
                                                                color: "var(--neutral-b-500)",
                                                            }}
                                                        />
                                                    );
                                                }
                                            )}
                                        </Box>
                                    </Box>

                                    <Typography
                                        sx={{
                                            mt: 2.5,
                                            fontSize: 14,
                                            color: "var(--neutral-b-500)",
                                        }}
                                    >
                                        {review.comment ?? ""}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    {product?.reviews?.length && (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 3,
                            }}
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: "none",
                                    color: "var(--neutral-b-500)",
                                    borderColor: "var(--neutral-b-200)",
                                    borderRadius: "4px",
                                    px: 3,
                                    py: 1,
                                }}
                            >
                                Load more reviews
                            </Button>
                        </Box>
                    )}
                </>
            )}
        </Box>
    );
}