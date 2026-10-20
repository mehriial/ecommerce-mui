import {Box, Container, Link, Typography} from "@mui/material";
import styles from './NotificationBar.module.css'
import {useTranslation} from "react-i18next";


function NotificationBar() {
    const {t} = useTranslation()
    return (
        <Container
            maxWidth={false}
            className='container'>
            <Box sx={{flexGrow: 1}} className={styles.notification_bar}>
                <Typography variant="body2">
                    {t("notificationbar.header")}
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener"
                        className={styles.order_now}
                    >
                        {t("notificationbar.link")}
                    </Link>
                </Typography>
            </Box>
        </Container>

    )
}

export default NotificationBar