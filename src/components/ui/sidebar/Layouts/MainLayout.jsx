import Sidebar from "@/components/ui/sidebar";
import { Grid, Box } from "@mui/material";
import Navbar from "@/components/ui/navbar";
import { colors } from "@/config";
import useMedia from "@/hooks/useMedia";

const MainLayout = ({ children }) => {
    const { isMobile, isTablet } = useMedia();

    return <Grid container sx={stylesheet.main}>
        {!isTablet && !isMobile ? <Grid item md={3} height="100%">
            <Sidebar />
        </Grid> : null}
        <Grid item xm={12} sm={12} md={9} lg={9}>
            <Navbar />
            <Box sx={stylesheet.content}>
                {children}
            </Box>
        </Grid>
    </Grid>

}

export default MainLayout;

const stylesheet = {
    main: {
        height: "100%",
        width: "100%",
        background: colors.body,
    },
    content: {
        paddingX: 5,
        paddingY: 3
    }
}
