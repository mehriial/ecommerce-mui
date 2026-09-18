import { Box, Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function ProductDetailTabMenu({
                                                 activeTab,
                                                 onChange,
                                             }) {
    const menuItems = [
        {
            id: "details",
            label: "Details",
            icon: <MoreHorizIcon />,
        },
        {
            id: "reviews",
            label: "Reviews",
            icon: <StarBorderIcon />,
        },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "row",
                    md: "column",
                },
                gap: 1.5,
            }}
        >
            {menuItems.map((item) => {
                const isActive = activeTab === item.id;

                return (
                    <Button
                        key={item.id}
                        onClick={() => onChange(item.id)}
                        startIcon={item.icon}
                        disableRipple
                        sx={{
                            width: {
                                xs: "auto",
                                md: "100%",
                            },
                            height: 42,
                            px: 2.5,
                            justifyContent: "flex-start",
                            color: isActive
                                ? "var(--neutral-b-900)"
                                : "var(--neutral-b-500)",
                            backgroundColor: isActive
                                ? "var(--neutral-w-100)"
                                : "transparent",
                            borderRadius: "8px",

                            fontSize: 14,
                            fontWeight: isActive ? 600 : 400,
                            textTransform: "none",
                        }}
                    >
                        {item.label}
                    </Button>
                );
            })}
        </Box>
    );
}