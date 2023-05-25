import {styled} from "@mui/system";
import Tab from "@mui/material/Tab";

export const Root = styled('div')({
    display: "flex",
    height: "100%",
    width: "100%",
    '& > div:first-child': {
        width: "35%"
    }
});


export const SubContainer = styled('div')({
    display: "flex",
    width: "70%",
    height: "100%",
    flexDirection: "column",
});

export const TabStyled = styled(Tab)({
    color: "rgba(255,255,255,0.8)",
    fontSize: "1.3em",
});


