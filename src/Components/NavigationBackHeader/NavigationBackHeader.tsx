import React from "react"
import {styled} from "@mui/system";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";

const BACK_ICON_SIZE = 60;

export const Root = styled('div')({
    width: "100%",
    height: "80px",
    position: "relative",
});


export const IconButtonStyled = styled(IconButton)({
    position: "absolute",
    width: "auto",
    height: `${BACK_ICON_SIZE}px`,
    color: "white",
    left: "20px",
    top: `calc(50% - ${BACK_ICON_SIZE / 2}px)`
});



export const  NavigationBackHeader = (props: React.PropsWithChildren) => {
    const navigate = useNavigate();

    const onBackClick = () => {
        navigate(-1);
    }

    return <Root>
        <IconButtonStyled onClick={onBackClick}>
            <ArrowBackIosIcon />
        </IconButtonStyled>
        { props.children }
    </Root>
}

export default NavigationBackHeader;