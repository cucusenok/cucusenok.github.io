import React, { useEffect, useState} from "react";
import {useGlobalContext} from "../../common/globalContext";
import {DarkOpacityRectangle} from "../../Resources/Backgrounds/DarkOpacityRectangle";
import {ProjectType, ProjectListProps} from "./types";
import PROJECT_ITEMS from "../../data/projectsItems"
import {
    ProjectItemLogo,
    ProjectItemCommonContainer,
    ProjectTitleContainer, ProjectLink
} from "./styled";
import {SearchableLayout} from "../../Components/Layouts/SearchableLayout/SearchableLayout";
import CardNavigationHeader from "../../Components/Cards/CardNavigationHeader/CardNavigationHeader";
import {ScrollableListContainer} from "../../Components/Layouts/SearchableLayout/styled";
import {CalculateLogoImageSize} from "../../library/componentsUntils";
import {Typography} from "@mui/material";

const ProjectItem = ({item} : { item: ProjectType }) => {
    return <ProjectLink to={`/projects/${item.name}`}>
        <DarkOpacityRectangle width={"100"} borderRadius={10} padding={10}>
            <CardNavigationHeader>
                <ProjectTitleContainer>
                    <ProjectItemLogo {...CalculateLogoImageSize(item.logo)} src={item.logo} />
                    <Typography variant={"h3"}>
                        {item.name}
                    </Typography>
                </ProjectTitleContainer>
            </CardNavigationHeader>
            <ProjectItemCommonContainer>
                <Typography variant={"h3"} textAlign={"left"} >
                    {item.description.en}
                </Typography>
            </ProjectItemCommonContainer>
        </DarkOpacityRectangle>
    </ProjectLink>
}

const ProjectList = ({searchList}: ProjectListProps) => {
    const { onScroll } = useGlobalContext();
    return <ScrollableListContainer onScroll={onScroll}>
        {
            searchList.map( si => <ProjectItem key={si.name} item={si} /> )
        }
    </ScrollableListContainer>
}

export type ProjectsProps = {
    showTitle?: boolean,
}
export const Projects = ({ showTitle=true }: ProjectsProps) => {
    const [searchString, searchStringSet] = useState("");
    const [searchList, searchListSet] = useState<Array<ProjectType>>(PROJECT_ITEMS);

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        searchStringSet(event.target.value)
    }
    const onClearClick = (event: React.MouseEvent<HTMLElement>) => {
        searchStringSet("");
    }

    useEffect( () => {
        const searchStr = searchString.toLowerCase();
        const searchResult = PROJECT_ITEMS.filter( sl =>
            sl.description.en.toLowerCase().includes(searchStr)
            || sl.title.en.toLowerCase().includes(searchStr)
            || sl.name.toLowerCase().includes(searchStr)
        )
        searchListSet(searchResult);
    }, [searchString])

    return <SearchableLayout
        title={showTitle ? "Projects" : ""}
        onSearchChange={onChange}
        searchString={searchString}
        onClearClick={onClearClick}
        filterBtn={false}
    >
        <ProjectList searchList={searchList} key={searchString} />
    </SearchableLayout>

}