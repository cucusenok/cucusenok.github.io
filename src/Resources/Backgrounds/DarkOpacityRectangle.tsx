import React from "react"
import {styled} from "@mui/system";
import {stringOrNumberCssPropertyTransform} from "../../library/componentsUntils"

type RectangleProps = {
    height?: string | number,
    borderRadius?: string | number,
    padding?: string | number,
    width?: string | number,
}

const Rectangle = styled('div')<RectangleProps>(({ height, borderRadius, padding, width}) => ({
    background: "rgba(0,0,0,.6)",
    height: stringOrNumberCssPropertyTransform(height, "none"),
    minHeight: stringOrNumberCssPropertyTransform(height, "none"),
    borderRadius: stringOrNumberCssPropertyTransform(borderRadius, "0px"),
    padding: stringOrNumberCssPropertyTransform(padding, "0px"),
    width: stringOrNumberCssPropertyTransform(width, "100%"),
}));

type DarkOpacityRectangleProps = RectangleProps & React.PropsWithChildren


export const DarkOpacityRectangle = (props: DarkOpacityRectangleProps) => {
    return <Rectangle {...props} >
        { props.children }
    </Rectangle>
}