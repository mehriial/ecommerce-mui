import {
    Box,
    Container,
    Grid,
    IconButton,
    Link,
    Stack,
    Typography,
} from "@mui/material";

import {
    FaGithub,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

import {
    FaCcVisa,
} from "react-icons/fa6";
import Subscribe from "@/components/app/subscribe/Subscribe.jsx";
import styles from './Footer.module.css'
import {RiMastercardFill} from "react-icons/ri";
import {GrAmex} from "react-icons/gr";

export default function Footer() {
    return (
        <>
            <Subscribe/>
            <Container className={`container`}>
                <Box
                    className={'container-box'}
                    component="footer"
                    sx={{
                        borderTop: "1px solid #f0f0f0",
                        backgroundColor: "#fff",
                        padding: '10px 20px',
                        paddingBottom:0
                    }}
                >
                    <Container
                        maxWidth={false}
                        className="container"
                        sx={{
                            maxWidth: "760px",
                            mx: "auto",
                        }}
                    >
                        <Grid
                            container
                            spacing={4}
                            sx={{
                                py: 7,
                            }}
                        >
                            <Grid size={{xs: 12, sm: 4}}>
                                <Stack spacing={1.5}>
                                    <Stack
                                        direction="row"
                                        spacing={1.25}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 44,
                                                height: 44,
                                            }}
                                        >
                                            <img src='/logo-footer.svg' alt='logo'/>
                                        </Box>

                                        <Typography
                                            sx={{
                                                fontSize: 20,
                                                fontWeight: 900,
                                                color: "var(--neutral-b-900)",
                                            }}
                                            className={styles.logo_name}
                                        >
                                            Ecommerce
                                        </Typography>
                                    </Stack>

                                    <Typography
                                        sx={{
                                            maxWidth: 250,
                                            fontSize: 14,
                                            color: "var(--neutral-b-500)",
                                        }}
                                    >
                                        DevCut is a YouTube channel for
                                        practical project-based learning.
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        spacing={0.5}
                                        sx={{pt: 0.5}}
                                    >
                                        <IconButton
                                            size="small"
                                            sx={{
                                                color: "var(--neutral-b-500)",
                                                p: 0.5,
                                            }}
                                        >
                                            <FaGithub size={20}/>
                                        </IconButton>

                                        <IconButton
                                            size="small"
                                            sx={{
                                                color: "var(--neutral-b-500)",
                                                p: 0.5,
                                            }}
                                        >
                                            <FaInstagram size={20}/>
                                        </IconButton>

                                        <IconButton
                                            size="small"
                                            sx={{
                                                color: "var(--neutral-b-500)",
                                                p: 0.5,
                                            }}
                                        >
                                            <FaYoutube size={20}/>
                                        </IconButton>
                                    </Stack>
                                </Stack>
                            </Grid>

                            <Grid size={{xs: 6, sm: 2}}>
                                <FooterColumn
                                    title="SUPPORT"
                                    links={[
                                        "FAQ",
                                        "Terms of use",
                                        "Privacy Policy",
                                    ]}
                                />
                            </Grid>

                            <Grid size={{xs: 6, sm: 2}}>
                                <FooterColumn
                                    title="COMPANY"
                                    links={[
                                        "About us",
                                        "Contact",
                                        "Careers",
                                    ]}
                                />
                            </Grid>

                            <Grid size={{xs: 6, sm: 2}}>
                                <FooterColumn
                                    title="SHOP"
                                    links={[
                                        "My Account",
                                        "Checkout",
                                        "Cart",
                                    ]}
                                />
                            </Grid>

                            <Grid size={{xs: 6, sm: 2}}>
                                <Stack spacing={2.5}>
                                    <Typography
                                        sx={{
                                            fontSize: 14,
                                            color: "var(--neutral-b-300)",
                                            fontWeight: 500,
                                            whiteSpace: "nowrap"
                                        }}
                                    >
                                        ACCEPTED PAYMENTS
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        spacing={1.5}
                                    >
                                        <RiMastercardFill
                                            size={27}
                                            color="var(--neutral-b-500)"/>

                                        <GrAmex
                                            size={27}
                                            color="var(--neutral-b-500)"
                                        />

                                        <FaCcVisa
                                            size={29}
                                            color="var(--neutral-b-500)"
                                        />
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>

                        <Box
                            sx={{
                                borderTop: "1px solid #f1f1f1",
                                py: 1,
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 10.5,
                                    color: "#696e77",
                                }}
                            >
                                © 2023 DevCut. All rights reserved.
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </>
    );
}

function FooterColumn({title, links}) {
    return (
        <Stack spacing={2.1}>
            <Typography
                sx={{
                    fontSize: 14,
                    color: "var(--neutral-b-300)",
                    fontWeight: 500,
                    textTransform: "uppercase"
                }}
            >
                {title}
            </Typography>

            <Stack spacing={1.4}>
                {links.map((link) => (
                    <Link
                        key={link}
                        href="#"
                        underline="none"
                        sx={{
                            fontSize: 14,
                            color:"var(--neutral-b-500)",
                            fontWeight: 500,
                        }}
                    >
                        {link}
                    </Link>
                ))}
            </Stack>
        </Stack>
    );
}