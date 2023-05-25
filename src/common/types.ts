import {Breakpoint} from "@mui/material";

// Add new locale here
export enum LanguagesEnum {
    ru= "ru",
    en="en"
}

/**
    Use this type when u have struct as
    name: { en: 'Joe', ru: 'Джо' }
 */
export type LocaleStringsType = { [key in LanguagesEnum]: string }

/**
 Use this type when u have struct as
 name: { en: any, ru: any }
 */
export type LocaleStringsGeneric<T> = { [key in LanguagesEnum]: T }

/**
 * Use this type for situation when u want to add breakpoints reaction into component
 *
 * @example
 * type ExampleProps = {
 *     height?: string | number,
 *     width?: string | number,
 *     breakpoints?: { [key in Breakpoint]?: SpacerStyledProps }
 * }
 * ...
 * const ExampleStyled = styled('div')<ExampleProps>(props => {
 *     const breakpoints: { [key in Breakpoint]?: CSSProperties } | {} = {};
 *     props.breakpoints && Object.keys(props.breakpoints).forEach( (b) => {
 *         breakpoints[b] = StyleConstructor(props.breakpoints[b]);
 *     });
 *     return ({
 *         ...ExampleConstructor(props),
 *         ...breakpoints
 *     })
 *...
 * <Example height={25} breakpoints={{
 *      theme.breakpoints.heightUp(theme.breakpoints.values.xsMobileHeight)]: { height: 10, }
 * }}/>
 */
export type BreakpointsExtender<T> = { [key in Breakpoint]?: T };