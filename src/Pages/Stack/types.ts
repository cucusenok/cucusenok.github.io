import {LocaleStringsType} from "../../common/types";
import React from "react";

export enum STACK_TAGS {
    FrontEnd,
    BackEnd,
    Mobile,
    Utilities,
}

export type FormControlStyledProps = { inFocus?: boolean }

export type StackType = {
    name: string,
    experience: string,
    logo: string,
    description: LocaleStringsType,
    tags?: Array<STACK_TAGS>,
}

export type StackListContainerProps = {
    height?: string | number,
}

export type StackListProps = {
    searchList: Array<StackType>
}
export type CheckboxListProps = {
    values?: Array<string>,
    checkList?: Array<string>,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export type BottomSheetProps = {
    tab: STACK_TAGS,
    onTabChange: (event: React.SyntheticEvent, newValue: number) => void,
    onClearFilters: () => void
    onClearAll: () => void
} & CheckboxListProps

export type StackProps = {
    showTitle?: boolean,
}