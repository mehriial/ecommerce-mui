import {Box, Grid, Typography} from "@mui/material";


export default function FeatureCard({index, item}) {
    return (
        <Grid key={index} size={{xs: 12, md: 4}}>
            <Box>
                <Box
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "var(--neutral-w-100)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                    }}
                >
                    {item.icon}
                </Box>

                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 600,
                        mb: 1,
                        fontSize: 16,
                        color: "var(--neutral-b-800)"
                    }}
                >
                    {item.title}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: "var(--neutral-b-500)",
                        fontSize: 14,
                        lineHeight: 1.8,
                        maxWidth: 300,
                    }}
                >
                    {item.description}
                </Typography>
            </Box>
        </Grid>
    );
}