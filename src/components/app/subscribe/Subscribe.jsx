import Box from "@mui/material/Box";
import styles from './Subscribe.module.css';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useTranslation} from "react-i18next";

function Subscribe() {
const {t} = useTranslation()
    return (
        <Container className={`${styles.hero_container} container`}>
            <Box className={styles.hero_bg}
                sx={{
                    fontFamily: "Inter",
                    display: "flex",
                    alignItems: {
                        xs: "flex-start",
                        sm: "center",
                    },
                    justifyContent: "space-between",
                    flexDirection: {
                        xs: "column",
                        sm: "row",
                    },
                    gap: {
                        xs: 3,
                        sm: 2,
                    },
                    p: 3,
                }}>
                <Box className={styles.hero_left_box}
                    sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <Typography variant='h5'>
                        {t("subscribe.header")}
                    </Typography>
                    <Typography variant='body2'>
                        {t("subscribe.desc")}
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
                            placeholder={t("subscribe.input")}
                        />
                        <Button
                            sx={{ textTransform: "capitalize", background: "#000", padding: "8px 16px", maxWidth: 180, borderRadius: "4px" }}
                            size='normal'
                            variant="contained"
                        >
                            {t("subscribe.button")}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Subscribe