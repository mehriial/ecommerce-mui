import Box from "@mui/material/Box";
import styles from './Browsing.module.css';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import brImage from '@/assets/images/br-img.png'

function Browsing() {

    return (
        <Container className={`${styles.hero_container} container`}>
            <Box className={styles.hero_bg}
                 sx={{fontFamily: "Inter", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <Box className={styles.hero_left_box}
                     sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    <Typography variant='h5'>
                        Browse Our Fashion Paradise!
                    </Typography>
                    <Typography variant='body2' sx={{marginBottom: "50px"}}>
                        Step into a world of style and explore our diverse collection of clothing categories.
                    </Typography>
                    <Button
                        sx={{textTransform: "capitalize", background: "#000", padding: "8px 16px", maxWidth: 180}}
                        size='small'
                        variant="contained"
                    >
                        Start Browsing
                        <ArrowForwardIcon/>
                    </Button>
                </Box>

                <Box className={styles.hero_right_box}>
                    <img src={brImage} alt='browsing image' className={styles.hero_img}/>
                </Box>
            </Box>
        </Container>
    )
}

export default Browsing