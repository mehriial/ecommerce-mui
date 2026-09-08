import TextField from "@mui/material/TextField";

function Input({ className, sx, variant='outlined', ...props }) {
    return (
        <TextField
            {...props}
            variant={variant}
            className={className}
            sx={sx}
        />
    );
}

export default Input;
