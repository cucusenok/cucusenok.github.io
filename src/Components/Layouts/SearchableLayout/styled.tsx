import {styled} from "@mui/system";
import {ScrollableListContainerProps} from "./types";
import Tab from "@mui/material/Tab";

export const Content = styled('div')({
    padding: "0 20px 0 20px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
});

export const Children = styled('div')({
    flex: 1,
    overflowY: "scroll",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
});


export const StackItemContainer = styled('div')({})

export const TabStyled = styled(Tab)({
    color: "rgba(255,255,255,0.4)",
});


export const ScrollableListContainer = styled('div')<ScrollableListContainerProps>((
    {
        theme,
        css,
    }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    overflowY: "auto",
    maxHeight: `100%`,
    [theme.breakpoints.up('lg')]: {
        height: '100%',
        //maxHeight: 'calc(var(--app-height) - 190px) !important',
    },
    ...css
}));

export const ScrollBottomSpacer = styled('div')(({theme}) => ({
    width: "100%",
    minHeight: "80px",
    [theme.breakpoints.up('lg')]: {
        display: "none"
    }
}));
