import React, {MutableRefObject, useRef} from "react";
import {BaseContainer} from "../../Containers/BaseContainer";
import {Typography} from "@mui/material";
import Spacer from "../../../Components/Untils/Spacer";
import {useGlobalContext} from "../../../common/globalContext";
import { Collapse } from '@mui/material';
import { BottomSheet } from "../../BottomSheet/BottomSheet";
import {SearchableLayoutProps} from "./types";
import {Children, Content} from "./styled";
import SearchInput from "../../../Components/SearchInput/SearchInput";



export const SearchableLayout = (props: SearchableLayoutProps) => {
    const { hideBecauseScroll } = useGlobalContext();
    const ref = (useRef<() => void>(null) as MutableRefObject<() => void>);
    const onFilterClick = (event: React.MouseEvent<HTMLElement>) => {
        ref.current()
    }

    return <BaseContainer>

        <BottomSheet openRef={ref} title={props.title}>
            { props.BottomSheet }
        </BottomSheet>

        <Content>
            <Spacer height={40} />
            <Typography variant="h1">
                { props.title }
            </Typography>
            { props.title && <Spacer height={15} /> }
            <Collapse in={!hideBecauseScroll}>
                <SearchInput value={props.searchString}
                             onChange={props.onSearchChange}
                             onFilterClick={onFilterClick}
                             filtersCount={props.filtersCount}
                             onClearClick={props.onClearClick}
                             filterBtn={props.filterBtn}
                />
                <Spacer height={10} />
            </Collapse>
            <Children>
                 { props.children }
            </Children>
            <Spacer height={15} />
        </Content>
    </BaseContainer>
}
