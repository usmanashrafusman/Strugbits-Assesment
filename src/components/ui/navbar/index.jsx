import useMedia from "@/hooks/useMedia";
import { Box, Typography } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
    const { isMobile, isTablet } = useMedia();
    return <Box sx={stylesheet.main}>
        <Typography variant="h5" fontWeight={700} ml={2}>
            CUSTOMERS 
        </Typography>
        {isTablet || isMobile ? <Box mr={2} sx={{ cursor: "pointer" }}>
            <RxHamburgerMenu fontSize={22} />
        </Box> : null}
    </Box>
}

export default Navbar;

const stylesheet = {
    main: {
        boxShadow: "0px 3px 15px #6B6B6B1A",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
}