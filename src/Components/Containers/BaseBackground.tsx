import React from "react";
import { styled } from '@mui/system';
//import useMediaQuery from '@mui/material/useMediaQuery';

const Content = styled('div')({
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto"
});

const GradientBackground = styled('div')({
    width: "100%",
    height: "100%",
    background: `linear-gradient(
    257.78deg,
     #EBB9FF 0.43%,
     #CF61E1 22.3%,
     #DA1B1B 60.64%,
     #FAA321 91.77%
     )`,
});

//#e9b4fe
// #FAA321


export const BaseBackground = (props: React.PropsWithChildren) => {
    return <div style={{height: "100%", width: "100%"}}>
        <div style={{width: "100%", height: "100%",}}>
            <GradientBackground />
        </div>
        <Content>
            { props.children }
        </Content>
    </div>
}