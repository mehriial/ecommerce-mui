import {Typography} from "@mui/material";

export function FilterLabel({label, padding = '18px'}) {
    return (
        <Typography
            sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--neutral-b-900)",
                padding: padding,
            }}
        >
            {label}
        </Typography>
    )
}