import React, {useCallback, useEffect, useState} from "react";
import {BaseContainer} from "../../Components/Containers/BaseContainer";
import {useParams, useNavigate} from "react-router-dom";
import PROJECT_ITEMS from "../../data/projectsItems";
import {ProjectType} from "../Projects/types";
import {
    LogoImg,
    NavigationRoot,
    Content,
    LookAllPicturesButton,
    ProjectText,
    BackToProjectsLink, ArrowBackIosIconStyled, RootStyled
} from "./styled";
import NavigationBackHeader from "../../Components/NavigationBackHeader/NavigationBackHeader";
import {Typography} from "@mui/material";
import Spacer from "../../Components/Untils/Spacer";
import { Swiper, SwiperSlide } from "swiper/react";
import 'react-photo-view/dist/react-photo-view.css';
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import {EffectCoverflow} from "swiper";
import {PhotoProvider, PhotoSlider, PhotoView} from "react-photo-view";
import {DarkOpacityRectangle} from "../../Resources/Backgrounds/DarkOpacityRectangle";

type ProjectProps = {
    project: ProjectType
}


const RenderPhotoGallery = ({project}: ProjectProps) => {
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);

    return <PhotoProvider>
        <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 2,
                },
                920: {
                    slidesPerView: 3,
                },
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerGroupAuto={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow]}
            className="mySwiper"
        >
            {
                project.images.map( (src, key) => <SwiperSlide key={key} onClick={() => {
                    setIndex(key);
                    setVisible(true);
                }}>
                    <img src={src} alt={project.name} />
                </SwiperSlide>)
            }
        </Swiper>
        <Spacer height={15} />
        {
            project.images.slice(1, project.images.length).map( (src, key) => <PhotoView src={src} key={`ph_${key}`}>
                <img style={{display: "none"}} src={src} alt={project.name} />
            </PhotoView>)
        }
        <PhotoSlider
            images={project.images.map((item) => ({ src: item, key: item }))}
            visible={visible}
            onClose={() => setVisible(false)}
            index={index}
            onIndexChange={setIndex}
        />
        { !!project.images.length && <LookAllPicturesButton variant={"contained"}
                                                            onClick={() => { setVisible(true) }}>
            Look all pictures
        </LookAllPicturesButton>
        }
    </PhotoProvider>
}

const Root = ({project} : ProjectProps) => {
    if(project === undefined) {
        return <div>loading...</div>
    }

    return <RootStyled>
        <NavigationBackHeader>
            <NavigationRoot>
                <LogoImg src={project.logo} alt="bike.net logo" />
            </NavigationRoot>
        </NavigationBackHeader>
        <Content>
            <Spacer height={20} />
            <Typography variant={"h2"} >
                { project.title.en }
            </Typography>
            <Spacer height={20} />
            { project.url && <a href={project.url}>
                <Typography variant={'h3'}>
                    Visit site
                </Typography>
            </a> }
            <Spacer height={10} />
            <RenderPhotoGallery project={project} />

            { !project.images.length ? <Spacer height={0} /> : <Spacer height={30} /> }
            <ProjectText variant={"h3"} align={"left"}>
                { project.text.en }
            </ProjectText>
            <Spacer height={30} />
        </Content>
        <DarkOpacityRectangle height={50}>
            <BackToProjectsLink to={"/projects"}>
                <ArrowBackIosIconStyled />
                <Typography variant={'h4'}>
                    Back to the projects
                </Typography>
            </BackToProjectsLink>
        </DarkOpacityRectangle>
    </RootStyled>
}

export const Project = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const redirect = useCallback(
        (url: string) => navigate(url, { replace: true }),
           [navigate]
    );

    const [project, projectSet] = useState<ProjectType | undefined>();
    useEffect(() => {

        const project = PROJECT_ITEMS.filter( p => p.name === id)[0];
        if(project === undefined) {
            redirect("/projects");
        }

        projectSet(project);
    }, [id, redirect])



    return <BaseContainer>
        { project && <Root project={project} /> }
    </BaseContainer>
}


export default Project