import Box from "@mui/material/Box";
import styles from './Subscribe.module.css';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Subscribe() {

    return (
        <Container className={`${styles.hero_container} container`}>
            <Box className={styles.hero_bg}
                 sx={{fontFamily: "Inter", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <Box className={styles.hero_left_box}
                     sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    <Typography variant='h5'>
                        Join Our Newsletter
                    </Typography>
                    <Typography variant='body2'>
                        We love to surprise our subscribers with occasional gifts.
                    </Typography>
                </Box>

                <Box className={styles.hero_right_box}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <TextField
                            size='small'
                            className={styles.input}
                            placeholder='Your email address'
                        />
                        <Button
                            sx={{textTransform: "capitalize", background: "#000", padding: "8px 16px", maxWidth: 180, borderRadius: "4px"}}
                            size='normal'
                            variant="contained"
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Subscribe