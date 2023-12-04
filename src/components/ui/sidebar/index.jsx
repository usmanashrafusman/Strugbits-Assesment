import { colors } from "@/config";
import { Box, Grid } from "@mui/material";
import { APP_MODULES } from "@/config";
import SideBarItem from "./components/SideBarItem";
import Logo from "./components/Logo";

const Sidebar = () => {
    return <Box sx={stylesheet.main}>
        <Box width="60%" mt={2} mb={4}>
            <Logo />
        </Box>
        <Box sx={stylesheet.itemsWrapper}>
            {APP_MODULES.map((m) => {
                return <SideBarItem {...m} key={m.title} />
            })}
        </Box>
    </Box>
};

export default Sidebar;

const stylesheet = {
    main: {
        height: "100%",
        borderRadius: "0px 20px 20px 0px",
        background: colors.primary,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: 'auto'
    },
    itemsWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    }
}