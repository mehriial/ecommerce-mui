import Box from "@mui/material/Box";
import styles from "./Hero.module.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import heroImage from "@/assets/images/hero_image.png";

function Hero() {
    return (
        <Container className={`${styles.hero_container} container`}>
            <Box
                className={styles.hero_bg}
                sx={{
                    fontFamily: "Inter",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: {
                        xs: 2,
                        sm: 4,
                        md: 6,
                    },
                }}
            >
                <Box
                    className={styles.hero_left_box}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: {
                            xs: "flex-start",
                            sm: "flex-start",
                        },
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: {
                                xs: "18px",
                                sm: "22px",
                                md: "24px",
                            },
                        }}
                    >
                        Fresh Arrivals Online
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            mb: {
                                xs: 3,
                                sm: 4,
                                md: "50px",
                            },
                            fontSize: {
                                xs: "12px",
                                sm: "14px",
                            },
                        }}
                    >
                        Discover Our Newest Collection Today.
                    </Typography>

                    <Button
                        sx={{
                            textTransform: "capitalize",
                            background: "black",
                            padding: {
                                xs: "6px 12px",
                                sm: "8px 16px",
                            },
                            fontSize: {
                                xs: "12px",
                                sm: "14px",
                            },
                        }}
                        size="small"
                        variant="contained"
                    >
                        View Collection

                        <ArrowForwardIcon
                            sx={{
                                ml: 1,
                                fontSize: {
                                    xs: 16,
                                    sm: 20,
                                },
                            }}
                        />
                    </Button>
                </Box>

                <Box className={styles.hero_right_box}>
                    <Box
                        className={styles.hero_img_bg}
                        sx={{
                            width: {
                                xs: "130px",
                                sm: "220px",
                                md: "340px",
                            },
                            height: {
                                xs: "130px",
                                sm: "220px",
                                md: "340px",
                            },
                        }}
                    />

                    <Box
                        component="img"
                        src={heroImage}
                        alt="hero image"
                        className={styles.hero_img}
                        sx={{
                            width: {
                                xs: "110px",
                                sm: "180px",
                                md: "250px",
                            },
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default Hero;