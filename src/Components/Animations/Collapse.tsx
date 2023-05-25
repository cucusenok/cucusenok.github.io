import React, {CSSProperties} from "react";
import {styled} from "@mui/system";


type CollapseContainerProps = {
    height?: string | number,
    borderRadius?: string | number,
    padding?: string | number,
    width?: string | number,
    css?: CSSProperties
}


const TRANSITION = "translateY(100%) 2000ms";
const CollapseRoot = styled('div')<CollapseContainerProps>(({ css }) => ({
    willChange: "transform",
    overflow: "hidden",
    maxHeight: "100%",
    transition: "max-height 1000ms ease-in-out",
     "@keyframes collapse-animation": {
         "100%": {
             maxHeight: "0%",
         }
     },
    "@keyframes uncollapse-animation": {
        "100%": {
            maxHeight: "auto",
        }
    },
    ...css,
}));


type CollapseType = {
    in?: boolean
} & CollapseContainerProps & React.PropsWithChildren;
export const Collapse = (props: CollapseType) => {
    const collapseIn: CSSProperties = {
        maxHeight: "0%",
    }
    const collapseOut: CSSProperties = {
        maxHeight: "100%",
    }
    return <CollapseRoot css={!props.in ? collapseOut : collapseIn}>
        { props.children }
    </CollapseRoot>
}

export default Collapse;
