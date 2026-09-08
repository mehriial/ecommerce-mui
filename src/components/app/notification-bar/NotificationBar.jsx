import {Box, Container, Link, Typography} from "@mui/material";
import styles from './NotificationBar.module.css'


function NotificationBar() {

    return (
        <Container
            maxWidth={false}
            className='container'>
            <Box sx={{flexGrow: 1}} className={styles.notification_bar}>
                <Typography variant="body2">
                    Get 25% OFF on your first order.
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener"
                        className={styles.order_now}
                    >
                        Order now</Link>
                </Typography>
            </Box>
        </Container>

    )
}

export default NotificationBar