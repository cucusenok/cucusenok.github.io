import {styled} from "@mui/system";
import {TypographyOptions} from "@mui/material/styles/createTypography";
import {Typography} from "@mui/material";

/*
    Breakpoints just for Home component
 */
const MEDIA_MAX_WIDTH_330 = '@media (max-width: 330px)'
const MEDIA_MAX_WIDTH_340 = '@media (max-width: 340px)'
const MEDIA_MAX_WIDTH_370 = '@media (max-width: 370px)'
const MEDIA_MAX_WIDTH_550 = '@media (max-width: 550px)'
const MEDIA_MAX_HEIGHT_660 = '@media (max-height: 660px)'
const MEDIA_MAX_HEIGHT_550 = '@media (max-height: 550px)'


export const ProfileImg = styled('img')(({theme}) => ({
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    [theme.breakpoints.heightUp('smMobileHeight')]: {
        width: "90px",
        height: "90px"
    },
}));
export const AboutMeContainer = styled('div')(({theme}) => ({
    display: "flex",
    color: "white",
    gap: "25px",
    minHeight: "130px",
    [theme.breakpoints.heightUp('smMobileHeight')]: {
        minHeight: "110px",
    },
}));
export const TextContainer = styled('div')(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-between",
    color: "white",
    height: "100px",
    [theme.breakpoints.heightUp('smMobileHeight')]: {
        height: "90px",
    },
}));
export const HelloText = styled('h1')(({theme}) => ({
    ...(theme.typography as TypographyOptions).h2,
    position: "relative",
    display: "block",
    width: "fit-content",
    fontWeight: "bold",

    [theme.breakpoints.heightUp('lg')]: {
        fontSize: "3em",
    },
    [theme.breakpoints.heightUp('smMobileHeight')]: {
        fontSize: "1.5em",
    },
    [MEDIA_MAX_WIDTH_330]: {
        fontSize: "2em",
    },
    '&::after': {
        content: "''",
        position: "absolute",
        right: "-0.9rem",
        bottom: "1px",
        display: 'block',
        border: "2px solid white",
        height: 7,
        width: 7,
        borderRadius: "3px"
    },
}));
export const NameText = styled('h1')(({theme}) => ({
    ...(theme.typography as TypographyOptions).h1,
    [theme.breakpoints.heightUp('lg')]: {
        fontSize: "2.3em",
    },
    [theme.breakpoints.heightUp('smMobileHeight')]: {
        fontSize: "2em",
    },
    [MEDIA_MAX_WIDTH_330]: {
        fontSize: "1.8em",
    },
}));
export const PositionText = styled('h1')(({theme}) => ({
    ...(theme.typography as TypographyOptions).h4,
    [theme.breakpoints.heightUp('lg')]: {
        fontSize: "1.3em",
    },
    [MEDIA_MAX_WIDTH_370]: {
        fontSize: "1.1em",
    },
}));
export const BioContainer = styled('div')(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    height: "100px",

}));
export const Root = styled('div')({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
})
export const HomeLayout = styled('div')( ({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    [theme.breakpoints.up('lg')]: {
        maxHeight: "800px",
    }
}));
export const ContactsContainer = styled('div')(({theme}) => ({
    width: "100%",
    height: "230px",
    position: "relative",

    [theme.breakpoints.heightUp('smMobileHeight')]: {
        height: "180px",
    },
    [theme.breakpoints.heightUp('xsMobileHeight')]: {
        height: "120px",
    },
}));
export const ContactIconsContainer = styled('div')({
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    alignItems: "center"
});
export const ContactsSvgBgObject = styled('object')( ({theme}) => ({
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    [theme.breakpoints.up('lg')]: {
        display: "none"
    }
}));
export const ContactIcon = styled('object')(({theme}) => ({
    width: "50px",
    height: "50px",
    pointerEvents: "none",

    [theme.breakpoints.heightUp('smMobileHeight')]: {
        width: "40px",
        height: "40px",
    },
    [MEDIA_MAX_WIDTH_340]: {
        width: "35px",
        height: "35px",
    },
}))
export const ContactLink = styled('a')({})
export const ContactsContent = styled('div')( ({theme}) => ({
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    [theme.breakpoints.up('lg')]: {
        position: "inherit"
    }
}));
export const DescriptionLayout = styled('div')(({theme}) => ({
    width: "calc(100% - 40)",
    padding: "40px 20px 0 20px",
    height: "calc(100% - 180px)",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.heightUp('xsMobileHeight')]: {
        padding: "10px 20px 0 20px",
    }
}))
export const AboutMeText = styled(Typography)(({theme}) => ({
    ...(theme.typography as TypographyOptions).h5,
    [theme.breakpoints.heightUp('lg')]: {
        fontSize: "1.1em",
    },
    [theme.breakpoints.heightUp('xsMobileHeight')]: {
        fontSize: "12px",
    },
    [MEDIA_MAX_WIDTH_550]: {
        fontSize: "0.9em",
        [MEDIA_MAX_HEIGHT_660]: {
            fontSize: "0.8em",
        },
        [MEDIA_MAX_HEIGHT_550]: {
            fontSize: "0.7em",
        }
    },
    [MEDIA_MAX_WIDTH_370]: {
        fontSize: "12px",
    },
}));