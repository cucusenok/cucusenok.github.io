import React from "react";

export type SearchInputProps = {
    value?: string,
    onFilterClick?: (event: React.MouseEvent<HTMLElement>) => void,
    filtersCount?: number,
    filterBtn?: boolean,
    onClearClick?: (event: React.MouseEvent<HTMLElement>) => void,
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
}