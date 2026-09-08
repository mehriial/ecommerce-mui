import {Box, Chip, Grid, Typography} from "@mui/material";

export default function ProductCard({index, item}) {
    return (
        <Grid key={index} size={{xs: 12, sm: 6, md: 3}} sx={{mt: 3}}>
            <Box>
                <Box
                    sx={{
                        width: "100%",
                        height: 300,
                        backgroundColor: "var(--neutral-w-100)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 1.5,
                    }}
                >
                    <img
                        src={item.image}
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
                        marginTop: 4
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
                        size='small'
                        variant="outlined"
                        sx={{
                            fontSize: 12,
                            fontWeight: 500,
                            color: "var(--neutral-b-900)",
                            px: 1
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
        </Grid>
    );
}