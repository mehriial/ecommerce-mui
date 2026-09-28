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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import styles from "./Header.module.css";
import Input from "@/components/ui/Input.jsx";

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
    const navigate = useNavigate();

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