import React, {CSSProperties, useEffect} from "react";
import {styled} from '@mui/system';
import ProfileIconSvg from "../../Resources/Icons/ProfileIconSvg";
import StackIcon from "../../Resources/Icons/StackIconSvg";
import ProjectsIcon from "../../Resources/Icons/ProjectsIconSvg";
import {Link, useLocation} from "react-router-dom";
import {Typography, useTheme} from "@mui/material";
import {useGlobalContext} from "../../common/globalContext";
import { Collapse } from '@mui/material';

type ChildrenProps = { css?: CSSProperties }
type LinkType = {
    icon: (props: React.SVGProps<any>) => JSX.Element,
    link: string,
    name: string,
}
const MENU_HEIGHT = 60;

const Content = styled('div')({
    height: `100%`,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
});

const Menu = styled('div')({
    height: `${MENU_HEIGHT}px`,
    width: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
});


const MENU_ITEMS: Array<LinkType> = [
    {
        icon: ProfileIconSvg,
        link: "/",
        name: "Profile",
    },
    {
        icon: StackIcon,
        link: "/stack",
        name: "Stack",
    },
    {
        icon: ProjectsIcon,
        link: "/projects",
        name: "Projects",
    },
];

const MenuItem = styled(Link)({
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "7px 15px",
})

const Children = styled('div')<ChildrenProps>(({theme, css}) => ({
    maxHeight: `100%`,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    overflowY: "auto",
    ...css
}));

export const RenderMenu = () => {
    const theme = useTheme();
    const location = useLocation();
    const { hideBecauseScroll, screenSize } = useGlobalContext();
    if(screenSize.width < theme.breakpoints.values.lg) {
        return <Collapse in={!hideBecauseScroll}>
            <Menu>
                {
                    MENU_ITEMS.map( i => {
                        const currColor = location.pathname === i.link ? 'white' : 'rgba(255,255,255,0.4)';
                        const icon = React.createElement(
                            i.icon,
                            { color: currColor,},
                        );

                        return <MenuItem to={i.link} key={i.link}>
                            {icon}
                            <Typography color={currColor} variant={"mobileMenu"} >{ i.name }</Typography>
                        </MenuItem>
                    } )
                }
            </Menu>
        </Collapse>
    }
    return null
}

/*
   Use this component as entrypoint for all pages
   until dependency `onLocationChanged` is removed
 */
export const BaseContainer = (props: React.PropsWithChildren) => {
    const location = useLocation();
    const { onLocationChanged } = useGlobalContext();

    useEffect(() => {
        onLocationChanged(location)
    }, [location, onLocationChanged])

    return <Content>
        <Children>
            {props.children}
        </Children>
        <RenderMenu />
    </Content>
}