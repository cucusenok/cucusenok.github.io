import React from "react"
import {styled} from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Root = styled('div')({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
});

export const ArrowForwardIosIconStyled = styled(ArrowForwardIosIcon)({
    fill: "white"
})


type CardNavigationHeaderProps = { arrow?: boolean } & React.PropsWithChildren
export const CardNavigationHeader = ({ children, arrow = true }: CardNavigationHeaderProps) => {
    return <Root>
        { children }
        { arrow && <ArrowForwardIosIconStyled /> }
    </Root>

}

export default CardNavigationHeader;