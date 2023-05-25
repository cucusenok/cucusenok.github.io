import {LocaleStringsType} from "../../common/types";

export type FormControlStyledProps = { inFocus?: boolean }

export type ProjectType = {
    name: string,
    title: LocaleStringsType,
    position: string,
    url: string,
    logo: string,
    description: LocaleStringsType,
    text: LocaleStringsType,
    images: Array<string>,
}

export type StackListContainerProps = {
    height?: string | number,
}

export type ProjectListProps = {
    searchList: Array<ProjectType>
}