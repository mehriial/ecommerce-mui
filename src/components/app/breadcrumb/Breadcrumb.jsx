import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Link as RouterLink, useLocation } from "react-router-dom";

import styles from "./Breadcrumb.module.css";

function Breadcrumb() {
    const location = useLocation();

    const paths = location.pathname
        .split("/")
        .filter(Boolean);

    return (
        <Container className={`${styles.container} container`}>
            <Box
                sx={{
                    maxWidth: "1200px",
                    margin: "auto",
                    fontFamily: "Inter",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minHeight: "56px",
                }}
            >
                <Breadcrumbs
                    separator="/"
                    aria-label="breadcrumb"
                    sx={{
                        fontFamily: "Inter",
                        "& .MuiBreadcrumbs-separator": {
                            color: "var(--neutral-b-400)",
                        },
                    }}
                >
                    <Link
                        component={RouterLink}
                        to="/"
                        underline="hover"
                        sx={{
                            fontFamily: "Inter",
                            color: "var(--neutral-b-500)",
                            fontSize: "14px",
                        }}
                    >
                        Home
                    </Link>

                    {paths.map((path, index) => {
                        const isLast = index === paths.length - 1;
                        const href = `/${paths
                            .slice(0, index + 1)
                            .join("/")}`;

                        const label = path
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (char) => char.toUpperCase());

                        return isLast ? (
                            <Typography
                                key={href}
                                sx={{
                                    fontFamily: "Inter",
                                    color: "var(--neutral-b-900)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                }}
                            >
                                {label}
                            </Typography>
                        ) : (
                            <Link
                                key={href}
                                component={RouterLink}
                                to={href}
                                underline="hover"
                                sx={{
                                    fontFamily: "Inter",
                                    color: "var(--neutral-b-500)",
                                    fontSize: "14px",
                                }}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </Breadcrumbs>
            </Box>
        </Container>
    );
}

export default Breadcrumb;