import {styled} from "@mui/system";
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


export const RootStyled = styled('div')({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    height: "100%",
    flex: 1,
});

export const LogoImg = styled('img')({
    width: "120px",
    maxHeight: "80px",
    objectFit: "cover",
    objectPosition: "top",

});

export const NavigationRoot = styled('div')({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
});

export const Content = styled('div')({
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 40px)",
    margin: "auto",
});


export const PhotoGallery = styled('div')({
    height: "400px",
    width: "100%",
    position: "relative",
    display: "flex"
});

export const LookAllPicturesButton = styled(Button)({
    margin: "auto",
    width: "100%",
    maxWidth: "500px !important",
});

export const ProjectText = styled(Typography)({
    margin: "auto",
    maxWidth: "1200px",
});


export const BackToProjectsLink = styled(Link)({
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: "100%"
})

const BACK_ICON_SIZE = 30;

export const ArrowBackIosIconStyled = styled(ArrowBackIosIcon)({
    position: "absolute",
    width: "auto",
    height: `${BACK_ICON_SIZE}px`,
    color: "white",
    left: "20px",
    top: `calc(50% - ${BACK_ICON_SIZE / 2}px)`
});

