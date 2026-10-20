import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import styles from "./Header.module.css";
import Input from "@/components/ui/Input.jsx";
import { useNavigate } from "react-router";
import LanguageSwitcher from "@/components/app/language-switcher/LanguageSwitcher.jsx";
import {useTranslation} from "react-i18next";

const pages = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
];

const mobilePages = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
];

function Header() {
    const {t} = useTranslation()
    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();

        const query = search.trim();

        if (!query) return;

        navigate(`/products?search=${encodeURIComponent(query)}`);
    };

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMobileNavigate = (path) => {
        navigate(path);
        handleCloseNavMenu();
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;

        setSearch(value);

        if (value.trim() === "") {
            navigate("/products", { replace: true });
        }
    };

    return (
        <AppBar
            position="static"
            className={`${styles.header} container`}
        >
            <Container fixed>
                <Toolbar
                    disableGutters
                    className={styles.toolbar}
                >
                    <Box className={styles.logoContainer}>
                        <a href="/" className={styles.logoLink}>
                            <img
                                src="/logo.svg"
                                alt="Ecommerce"
                                className={styles.logo}
                            />

                            <Typography
                                component="span"
                                className={styles.logoText}
                            >
                                Ecommerce
                            </Typography>
                        </a>
                    </Box>

                    <Box className={styles.mobileMenu}>
                        <IconButton
                            onClick={handleOpenNavMenu}
                            className={styles.iconButton}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                        >
                            {mobilePages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    {page}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box className={styles.navigation}>
                        {pages.map((page) => {
                            return (
                                <Button
                                    key={page.label}
                                    href={page.path}
                                    className={styles.navItem}
                                >
                                    {t(page.label)}
                                </Button>
                            );
                        })}
                    </Box>

                    <Box className={styles.actions}>

                        <Box
                            component="form"
                            onSubmit={handleSearch}
                        >
                            <Input
                                placeholder={t("header.search_input")}
                                size="small"
                                className={styles.search}
                                value={search}
                                onChange={handleSearchChange}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <SearchIcon
                                                className={styles.searchIcon}
                                                sx={{ cursor: "pointer" }}
                                                onClick={handleSearch}
                                            />
                                        ),
                                    },
                                }}
                            />
                        </Box>


                        <LanguageSwitcher />
                        <IconButton
                            className={styles.iconButton}
                            aria-label="Shopping cart"
                        >
                            <ShoppingCartOutlinedIcon />
                        </IconButton>


                        <IconButton
                            className={styles.iconButton}
                            // onClick={handleOpenUserMenu}
                            aria-label="Account"
                        >
                            <PersonOutlineOutlinedIcon />
                        </IconButton>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;