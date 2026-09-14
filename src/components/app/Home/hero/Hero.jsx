import Box from "@mui/material/Box";
import styles from './Hero.module.css';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import heroImage from '@/assets/images/hero_image.png'

function Hero() {

    return (
        <Container className={`${styles.hero_container} container`}>
            <Box className={styles.hero_bg}
                 sx={{fontFamily: "Inter", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <Box className={styles.hero_left_box}
                     sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    <Typography variant='h5'>
                        Fresh Arrivals Online
                    </Typography>
                    <Typography variant='body2' sx={{marginBottom: "50px"}}>
                        Discover Our Newest Collection Today.
                    </Typography>
                    <Button
                        sx={{textTransform: "capitalize", background: "#000", padding: "8px 16px"}}
                        size='small'
                        variant="contained"
                    >
                        View Collection
                        <ArrowForwardIcon/>
                    </Button>
                </Box>

                <Box className={styles.hero_right_box}>
                    <Box className={styles.hero_img_bg}></Box>
                    <img src={heroImage} alt='hero image' className={styles.hero_img}/>
                </Box>
            </Box>
        </Container>
    )
}

export default Hero