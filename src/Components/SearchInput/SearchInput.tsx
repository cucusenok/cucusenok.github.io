import React from "react"
import {SearchInputProps} from "./types";
import {useState} from "react";
import {
    CollapseSearchIcon, FilledInputStyled, FilterButton,
    FormControlStyled, InputLabelStyled,
    SearchInputContainerStyled,
    SearchInputIconContainerStyled
} from "./styled";
import SearchIconSvg from "../../Resources/Icons/SearchIconSvg";
import InputAdornment from "@mui/material/InputAdornment";
import {Collapse, IconButton} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TuneIcon from "@mui/icons-material/Tune";
import Badge from '@mui/material/Badge';

const SearchInputComponent = (props: SearchInputProps) => {
    const [inFocus, inFocusSet] = useState(false);
    const [animationEnd, animationEndSet] = useState(false);
    const onFocusChange = (val: boolean) => {
        inFocusSet(val)
    }

    return <SearchInputContainerStyled>
        <CollapseSearchIcon onExited={() => animationEndSet(true)}
                            onEntered={() => animationEndSet(false)}
                            orientation="horizontal" in={!inFocus}>
            <SearchInputIconContainerStyled>
                <SearchIconSvg/>
            </SearchInputIconContainerStyled>
        </CollapseSearchIcon>
        <FormControlStyled inFocus={inFocus && animationEnd} variant="filled">

            <InputLabelStyled>Search in stack...</InputLabelStyled>

            <FilledInputStyled
                onFocus={() => onFocusChange(true)}
                onBlur={() => onFocusChange(false)}
                value={props.value}
                type={'text'}
                onChange={props.onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <Collapse in={inFocus}>
                            <IconButton onClick={props.onClearClick} >
                                    <HighlightOffIcon style={{ color: "rgba(255, 255, 255, 0.6)" }}/>
                            </IconButton>
                        </Collapse>
                    </InputAdornment>
                }
                hiddenLabel={false}
            />
        </FormControlStyled>

        {
            (props.filterBtn || props.filterBtn === undefined) && <Badge badgeContent={props.filtersCount} color="primary">
                <FilterButton onClick={props.onFilterClick}>
                    <TuneIcon />
                </FilterButton>
            </Badge>
        }

    </SearchInputContainerStyled>
}
export const SearchInput = React.memo(SearchInputComponent);

export default SearchInput