import * as React from "react";

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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import styles from "./Header.module.css";
import Input from "@/components/ui/Input.jsx";

const pages = [
    { label: "Home", path: "/" },
    { label: "Categories", path: "/categories", dropdown: true },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
];

const categories = [
    "Electronics",
    "Clothing",
    "Home & Living",
    "Sports",
];

const mobilePages = [
    "Home",
    "Categories",
    "About",
    "Contact",
];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElCategories, setAnchorElCategories] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenCategories = (event) => {
        setAnchorElCategories(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseCategories = () => {
        setAnchorElCategories(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
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
                            if (page.dropdown) {
                                return (
                                    <React.Fragment key={page.label}>
                                        <Button
                                            onClick={handleOpenCategories}
                                            className={styles.navItem}
                                            endIcon={
                                                <KeyboardArrowDownIcon
                                                    className={
                                                        styles.dropdownIcon
                                                    }
                                                />
                                            }
                                        >
                                            {page.label}
                                        </Button>

                                        <Menu
                                            anchorEl={anchorElCategories}
                                            open={Boolean(
                                                anchorElCategories
                                            )}
                                            onClose={
                                                handleCloseCategories
                                            }
                                            anchorOrigin={{
                                                vertical: "bottom",
                                                horizontal: "left",
                                            }}
                                            transformOrigin={{
                                                vertical: "top",
                                                horizontal: "left",
                                            }}
                                        >
                                            {categories.map(
                                                (category) => (
                                                    <MenuItem
                                                        key={category}
                                                        onClick={
                                                            handleCloseCategories
                                                        }
                                                    >
                                                        {category}
                                                    </MenuItem>
                                                )
                                            )}
                                        </Menu>
                                    </React.Fragment>
                                );
                            }

                            return (
                                <Button
                                    key={page.label}
                                    href={page.path}
                                    className={styles.navItem}
                                >
                                    {page.label}
                                </Button>
                            );
                        })}
                    </Box>

                    <Box className={styles.actions}>
                        <Input
                            placeholder="Search products"
                            size="small"
                            className={styles.search}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <SearchIcon className={styles.searchIcon} />
                                    ),
                                },
                            }}
                        />

                        <IconButton
                            className={styles.iconButton}
                            aria-label="Shopping cart"
                        >
                            <ShoppingCartOutlinedIcon />
                        </IconButton>

                        <IconButton
                            className={styles.iconButton}
                            onClick={handleOpenUserMenu}
                            aria-label="Account"
                        >
                            <PersonOutlineOutlinedIcon />
                        </IconButton>

                        <Menu
                            anchorEl={anchorElUser}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                Profile
                            </MenuItem>

                            <MenuItem onClick={handleCloseUserMenu}>
                                Orders
                            </MenuItem>

                            <MenuItem onClick={handleCloseUserMenu}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;