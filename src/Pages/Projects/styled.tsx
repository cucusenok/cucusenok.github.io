import {styled} from "@mui/system";
import {StackListContainerProps} from "./types";
import Tab from "@mui/material/Tab";
import {Link} from "react-router-dom";

export const Content = styled('div')({
    padding: "40px 20px 0 20px",
});

export const ProjectTitleContainer = styled('div')({
    display: "flex",
    alignItems: "center",
    padding: "0 5px 10px 5px",
    gap: "20px",
})


export const ProjectLink = styled(Link)({
    textDecoration: "none",
})

export const ProjectItemLogo = styled('img')({
    width: "60px",
    minWidth: "60px",
    float: "right",
})

export const ProjectItemCommonContainer = styled('div')({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
    padding: "0 5px"

})

export const StackListContainer = styled('div')<StackListContainerProps>(({ height }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    overflowY: "auto",
    maxHeight: height,
    height: height,
}));

export const TabStyled = styled(Tab)({
    color: "rgba(255,255,255,0.4)",
});