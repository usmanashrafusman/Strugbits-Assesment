import { useMediaQuery } from "@mui/material";

const useMedia = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(min-width:600px) and (max-width:899px)');
    return {
        isMobile,
        isTablet
    }
}

export default useMedia;