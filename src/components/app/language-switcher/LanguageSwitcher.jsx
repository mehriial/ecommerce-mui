import { useTranslation } from "react-i18next";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

const languages = [
    { code: "az", label: "AZ" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = async (event) => {
        const language = event.target.value;

        await i18n.changeLanguage(language);
        localStorage.setItem("language", language);
    };

    return (
        <Box>
            <Select
                value={i18n.resolvedLanguage || "az"}
                onChange={changeLanguage}
                size="small"
                variant="outlined"
                sx={{
                    minWidth: 75,
                    height: 36,
                    fontSize: 13,
                    fontWeight: 600,
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e5e7eb",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#9ca3af",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#111827",
                        borderWidth: 1,
                    },
                    "& .MuiSelect-select": {
                        py: 0.8,
                        pl: 1.5,
                    },
                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            mt: 1,
                            borderRadius: 2,
                            minWidth: 100,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                        },
                    },
                }}
            >
                {languages.map((language) => (
                    <MenuItem
                        key={language.code}
                        value={language.code}
                        sx={{
                            fontSize: 13,
                            fontWeight: 500,
                        }}
                    >
                        {language.label}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
}