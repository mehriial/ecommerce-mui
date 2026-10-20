import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

export function FilterLabel({label, padding = '18px'}) {
    const {t} = useTranslation()
    return (
        <Typography
            sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--neutral-b-900)",
                padding: padding,
            }}
        >
            {t(label)}
        </Typography>
    )
}