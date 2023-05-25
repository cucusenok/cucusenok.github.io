import React, {CSSProperties} from "react";
import {styled} from "@mui/system";
import {stringOrNumberCssPropertyTransform} from "../../library/componentsUntils";
import {Breakpoint} from "@mui/material";
import {BreakpointsExtender} from "../../common/types";


type SpacerStyledProps = {
    height?: string | number,
    width?: string | number,
    breakpoints?: BreakpointsExtender<SpacerStyledProps>
}

const StyleConstructor = ({height, width}: SpacerStyledProps): CSSProperties => ({
    height: stringOrNumberCssPropertyTransform(height, "50px"),
    minHeight: stringOrNumberCssPropertyTransform(height, "50px"),
    width: stringOrNumberCssPropertyTransform(width, "100%"),
    maxWidth: stringOrNumberCssPropertyTransform(width, "100%"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

const SpacerStyled = styled('div')<SpacerStyledProps>(props => {
    const breakpoints: { [key in Breakpoint]?: CSSProperties } | {} = {};
    props.breakpoints && Object.keys(props.breakpoints).forEach( (b) => {
        // @ts-ignore
        breakpoints[b] = StyleConstructor(props.breakpoints[b]);
    });
    return ({
        ...StyleConstructor(props),
        ...breakpoints
    })
});



type SpacerType = SpacerStyledProps & React.PropsWithChildren


export const Spacer = (props: SpacerType) => {
    return <SpacerStyled {...{...props}} >
        { props.children }
    </SpacerStyled>
}

export default Spacer;

