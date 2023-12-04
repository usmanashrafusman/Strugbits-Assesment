import { colors } from "@/config";
import { Box, Typography } from "@mui/material";

const SideBarItem = ({ icon, title }) => {
    return <Box sx={stylesheet.main}>
        <Box sx={stylesheet.itemWrapper}>
            <Box marginRight={3} ml={1}>
                <img src={icon} width={20} />
            </Box>
            <Box marginRight={1}>
                <Typography color="#fff">
                    {title}
                </Typography>
            </Box>
        </Box>
    </Box>
}

export default SideBarItem;


const stylesheet = {
    main: {
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        width: "100%",
    },
    itemWrapper: {
        boxShadow: "0px 5px 25px #00000040",
        borderRadius: "10px",
        cursor:"pointer",
        padding: 1.5,
        backgroundColor: colors.secondary,
        display: "flex",
        width: "auto"
    }
}