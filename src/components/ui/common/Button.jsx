import { Button as MUIButton } from "@mui/material";
import { colors } from "@/config";

const buttonStyles = {
    danger: {
        background: "#d8000061",
        color: "#d80000"
    },
    success: {
        background: "#39B54A61",
        color: "#39B54A"
    }
}

const Button = (props) => {
    const { sx = {} } = props;
    const styles = buttonStyles[props.type] || {
        background: colors.linearGradient,
        color: "#fff",
    }
    return <MUIButton {...props} sx={{ ...stylesheet.btn, ...sx, ...styles }} />
}

export default Button;

const stylesheet = {
    btn: {
        paddingX: 3,
        paddingY: 1
    },
}