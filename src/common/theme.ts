import {createTheme} from "@mui/material/styles";
import React from "react";
import {Breakpoint} from "@mui/material";



declare module '@mui/material/styles' {
    interface TypographyVariants {
        // if will more typography keys create type TypographyKey = 'k1' | 'k2' and use [key in] for DRY
        mobileMenu: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        mobileMenu?: React.CSSProperties;
    }

    interface BreakpointOverrides {
        xsMobileHeight: true,
        smMobileHeight: true,
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        mobileMenu: true;
    }
}

declare module '@mui/system/createTheme/createBreakpoints' {
    interface Breakpoints {
        heightUp: (key: Breakpoint | number) => string,
    }
}

export const BreakpointValues: {[key in Breakpoint]: number} = {
    xs: 370,
    sm: 660,
    md: 900,
    lg: 1200,
    xl: 1536,

    // -> after, declare new props
    xsMobileHeight: 600,
    smMobileHeight: 700,
}
export const theme = createTheme({
    breakpoints: {
        values: BreakpointValues,
        heightUp: (key: Breakpoint | number) => `@media (max-height: ${ typeof key === "number" ? key : BreakpointValues[key]}px)`,
    },
    components: {
        MuiCheckbox: {
            styleOverrides: {
                colorPrimary: "red",
                colorSecondary: "red",
                root: {
                    transform: "scale(1.2)",
                    color: "white",
                    "&, & + .MuiFormControlLabel-label": {
                        color: "rgba(255, 255, 255, 0.6)"
                    },
                    "&.Mui-checked": {
                        "&, & + .MuiFormControlLabel-label": {
                            color: "white"
                        }
                    }
                },
            }
        },
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    //color: "white",
                },
            }
        }
    },

    palette: {
        primary: {
            main: '#ffffff',
        },

    },

    typography: {
        fontFamily: 'Nunito',
        mobileMenu: {
            color: 'white',
            fontSize: "10px",
        },
        body1: {
            fontSize: "1rem",
            color: "white",
        },
        body2: {
            fontSize: "0.8rem",
            color: "white",
        },
        h1: {
            fontSize: "2.5rem",
            color: "white",
            fontWeight: "bold",
            padding: "0px",
            margin: "0px",
            lineHeight: "2.5rem"
        },
        h2: {
            fontSize: "2rem",
            lineHeight: "2rem",
            color: "white",
            fontWeight: "bold",
            padding: "0px",
            margin: "0px"
        },
        h3: {
            fontSize: "1.3rem",
            lineHeight: "2rem",
            color: "white",
            fontWeight: "bold",
            padding: "0px",
            margin: "0px"
        },
        h4: {
            fontSize: "1rem",
            color: "white",
            fontWeight: "bold",
            padding: "0px",
            margin: "0px"
        },
        h5: {
            fontSize: "0.8rem",
            color: "white",
            fontWeight: "bold",
            padding: "0px",
            margin: "0px"
        },

    },
});