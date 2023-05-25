import React, {CSSProperties, ReactNode} from "react";

export type StackType = {
    name: string,
    experience: string,
    logo: string,
    description: string
}

export type ScrollableListContainerProps = {
    css?: CSSProperties
}

export type StackListProps = {
    searchString: string
}

export type SearchableLayoutProps = {
    filtersCount?: number,
    onClearClick?: (event: React.MouseEvent<HTMLElement>) => void,
    onSearchChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    searchString?: string,
    title?: string,
    filterBtn?: boolean,
    BottomSheet?: ReactNode,
} & StackListProps & React.PropsWithChildren


