import React, { useEffect, useState } from "react";
import {useGlobalContext} from "../../common/globalContext";
import {DarkOpacityRectangle} from "../../Resources/Backgrounds/DarkOpacityRectangle";
import SearchableTypography from "../../Components/Typography/SearchableTypography";
import {StackType, StackListProps, STACK_TAGS, BottomSheetProps, CheckboxListProps, StackProps} from "./types";
import STACKS_ITEMS, {STACK_BY_GROUPS} from "../../data/stackItems"
import {
    StackItemContainer,
    StackItemLogo,
    StackItemTitleContainer,
    ContentVerticalSeparator,
    CheckboxListRoot,
    ClearFilterButton,
    BottomSheetRoot,
    BottomSheetStyledRoot,
    FormGroupListStyled
} from "./styled";
import {SearchableLayout} from "../../Components/Layouts/SearchableLayout/SearchableLayout";
import CardNavigationHeader from "../../Components/Cards/CardNavigationHeader/CardNavigationHeader";
import {Checkbox, FormControlLabel, Typography} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import {ScrollableListContainer, TabStyled} from "../../Components/Layouts/SearchableLayout/styled";
import {CalculateLogoImageSize} from "../../library/componentsUntils";

const StackItem = ({item} : { item: StackType }) => {
    return <StackItemContainer>
        <DarkOpacityRectangle width={"100"} borderRadius={10} padding={10}>
            <CardNavigationHeader arrow={false}>
                <StackItemTitleContainer>
                    <StackItemLogo src={item.logo} {...CalculateLogoImageSize(item.logo)} />
                    <SearchableTypography variant={"h4"} text={item.name} field={"name"}/>
                    <ContentVerticalSeparator />
                    <Typography variant={"body2"}
                                textAlign={"start"}
                                whiteSpace={"nowrap"}
                    >
                        {item.experience}
                    </Typography>
                </StackItemTitleContainer>
            </CardNavigationHeader>
            <Typography variant={"body2"}
                        textAlign={"start"}>
                {item.description.en}
            </Typography>
        </DarkOpacityRectangle>
    </StackItemContainer>
}

const StackList = ({searchList}: StackListProps) => {
    const { onScroll } = useGlobalContext();
    return <ScrollableListContainer onScroll={onScroll}>
        {
            searchList.map( si => <StackItem key={si.name} item={si} /> )
        }
    </ScrollableListContainer>
}

const CheckboxList = ({values, onChange, checkList} : CheckboxListProps) => {
    return <CheckboxListRoot onChange={onChange}>
        <FormGroupListStyled>
            { values?.map( v => <FormControlLabel
                    key={v}
                    control={
                        <Checkbox name={v} defaultChecked size={"medium"} checked={checkList?.includes(v)} />
                    }
                    label={v}
                />
            ) }
        </FormGroupListStyled>
    </CheckboxListRoot>
}

const TabNames: { [key in STACK_TAGS]: string } = {
    [STACK_TAGS.FrontEnd]: "Frontend",
    [STACK_TAGS.BackEnd]: "Backend",
    [STACK_TAGS.Mobile]: "Mobile",
    [STACK_TAGS.Utilities]: "Utilities",
}
const BottomSheet = (props: BottomSheetProps) => {
    return <BottomSheetStyledRoot>
        <Tabs variant={"fullWidth"} value={props.tab} onChange={props.onTabChange} aria-label="basic tabs example">
            <TabStyled label="Frontend" />
            <TabStyled label="Backend" />
            <TabStyled label="Mobile" />
            <TabStyled label="Utilities" />
        </Tabs>
        <BottomSheetRoot>
            <CheckboxList onChange={props.onChange} values={STACK_BY_GROUPS[props.tab]} checkList={props.checkList} />

            <div style={{display: "flex", gap: "20px"}} >
                <ClearFilterButton onClick={props.onClearAll} variant={"outlined"} fullWidth>
                    Clear All
                </ClearFilterButton>
                <ClearFilterButton onClick={props.onClearFilters} variant={"outlined"} fullWidth>
                    Clear { TabNames[props.tab] }
                </ClearFilterButton>
            </div>
        </BottomSheetRoot>
    </BottomSheetStyledRoot>
}

export const Stack = ({ showTitle=true }: StackProps) => {
    const [searchString, searchStringSet] = useState("");


    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        searchStringSet(event.target.value)
    }
    const onClearClick = (event: React.MouseEvent<HTMLElement>) => {
        searchStringSet("");
    }

    const [tab, tabSet] = React.useState<STACK_TAGS>(0);


    const [checkList, checkListSet] = useState<Array<string>>([
        ...STACK_BY_GROUPS[0],
        ...STACK_BY_GROUPS[1],
        ...STACK_BY_GROUPS[2],
        ...STACK_BY_GROUPS[3],
    ]);

    //results of filtering by tags
    const [searchList, searchListSet] = useState<Array<StackType>>(STACKS_ITEMS);

    useEffect( () => {

        const filteredByChecked = checkList.length
            ? STACKS_ITEMS.filter( si => checkList.includes(si.name))
            : STACKS_ITEMS
        const searchResult = filteredByChecked.filter( sl =>
            sl.description.en.toLowerCase().includes(searchString.toLowerCase())
            || sl.name.toLowerCase().includes(searchString.toLowerCase())
        )
        searchListSet(searchResult);
    }, [searchString, checkList])


    const onClearFilters = () => {
        let newCheckList = [...checkList]
        newCheckList = checkList.filter( sbg => !STACK_BY_GROUPS[tab].includes(sbg));
        checkListSet(newCheckList)
    }
    const onClearAll = () => {
        checkListSet([])
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        tabSet(newValue);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newCheckList = [...checkList]
        if(event.target.checked) {
            newCheckList.push(event.target.name);
        } else {
            newCheckList = checkList.filter( sbg => sbg !== event.target.name);
        }
        checkListSet(newCheckList)
    };

    return <SearchableLayout
        title={ showTitle ? "Stack" : ""}
        onSearchChange={onChange}
        searchString={searchString}
        onClearClick={onClearClick}
        filtersCount={checkList.length !== STACKS_ITEMS.length ? checkList.length : 0}
        BottomSheet={<BottomSheet
            checkList={checkList}
            tab={tab}
            onChange={handleCheckboxChange}
            onTabChange={handleChange}
            onClearFilters={onClearFilters}
            onClearAll={onClearAll}
        />}
    >
        <StackList searchList={searchList} key={searchString} />
    </SearchableLayout>

}