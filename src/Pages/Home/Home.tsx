import React, {MutableRefObject, useRef} from "react";
import {BaseContainer} from "../../Components/Containers/BaseContainer";
import {DarkOpacityRectangle} from "../../Resources/Backgrounds/DarkOpacityRectangle";
import {List, ListItemText, Typography, ListItemButton, ListItemIcon, useTheme} from "@mui/material";
import ContactWaveBackground from "../../Resources/Backgrounds/ContactWaveBackground.svg";
import Button from '@mui/material/Button';
import TelegramIcon from "../../Resources/Icons/TelegramIcon.svg";
import GitHubIcon from "../../Resources/Icons/GitHubIcon.svg";
import InstagramIcon from "../../Resources/Icons/InstagramIcon.svg";
import LinkedInIcon from "../../Resources/Icons/LinkedInIcon.svg";
import MailIcon from "../../Resources/Icons/MailIcon.svg";
import Spacer from "../../Components/Untils/Spacer";
import {BottomSheet} from "../../Components/BottomSheet/BottomSheet";
import SendIcon from '@mui/icons-material/Send';
import LinkIcon from '@mui/icons-material/Link';
import {LinkWrapper} from "../../Components/Link/Link";
import {ClipboardSnackbar, useCopyToClipboard} from "../../hooks/useCopyToClipboard";
import DownloadIcon from '@mui/icons-material/Download';
import {ProfileImg, AboutMeContainer, TextContainer, HelloText, NameText,
    PositionText, BioContainer, Root, HomeLayout, ContactsContainer, ContactIconsContainer,
    ContactsSvgBgObject, ContactIcon, ContactLink, ContactsContent, DescriptionLayout, AboutMeText
} from "./styled"
import {styled} from "@mui/system";

type ContactType = {
    icon: string,
    link: string,
    isDialog?: boolean,
}
type ContactsProps = {
    className?: string,
}
const EMAIL = 'cucusenok.work@gmail.com';
export const Contacts = (props: ContactsProps) => {
    const theme = useTheme();

    const contacts: Array<ContactType> = [
        {
            icon: TelegramIcon,
            link: "https://t.me/cucusenok",
        },
        {
            icon: GitHubIcon,
            link: "https://github.com/cucusenok",
        },
        {
            icon: InstagramIcon,
            link: "https://www.instagram.com/cucusenok",
        },
        {
            icon: LinkedInIcon,
            link: "https://www.linkedin.com/in/cucusenok",
        },
        {
            icon: MailIcon,
            link: "cucusenok.work@gmail.com",
            isDialog: true,
        },
    ];

    const ref = (useRef<() => void>(null) as MutableRefObject<() => void>);
    const onDialogContactClick = (event: React.MouseEvent<HTMLElement>) => {
        ref.current()
    }


  const { copyToClipboard, handleClose, clipboardStatusEnum, clipboardSnackbarOpen } = useCopyToClipboard()

    const onCopyToClipboard = () => {
        copyToClipboard(EMAIL);
    }

    return <ContactsContainer className={props.className}>
        <ClipboardSnackbar clipboardStatusEnum={clipboardStatusEnum} clipboardSnackbarOpen={clipboardSnackbarOpen} handleClose={handleClose} />
        <BottomSheet openRef={ref} title={"Email"} maxHeight={80} >
            <List
                sx={{ width: '100%', height: "100%", }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={onCopyToClipboard}>
                    <ListItemIcon>
                        <LinkIcon color={"primary"} />
                    </ListItemIcon>
                    <ListItemText primary="Copy to Clipboard" />
                </ListItemButton>
                <LinkWrapper href={`mailto:${EMAIL}`}>
                    <ListItemButton>
                        <ListItemIcon>
                            <SendIcon color={"primary"} />
                        </ListItemIcon>
                        <ListItemText primary="Send mail" />
                    </ListItemButton>
                </LinkWrapper>
            </List>
        </BottomSheet>
        <ContactsSvgBgObject type="image/svg+xml" data={ContactWaveBackground}/>
        <ContactsContent>
            <Spacer height={55} breakpoints={ {
                [theme.breakpoints.heightUp(theme.breakpoints.values.xsMobileHeight)]: { height: 25, },
            }} />
            <Typography variant="h2" >Contact me</Typography>
            <Spacer height={25} breakpoints={ {
                [theme.breakpoints.heightUp(theme.breakpoints.values.xsMobileHeight)]: { height: 10, }
            }} />
            <ContactIconsContainer>
                {contacts.map((c, idx) => {
                    if(c.isDialog) {
                        // if we can't save to clipboard - not show a button
                        if(navigator.clipboard) {
                            return <div key={idx} onClick={onDialogContactClick} style={{cursor: "pointer"}}>
                                <ContactIcon key={c.link} type="image/svg+xml" data={c.icon}/>
                            </div>
                        } else {
                            return <LinkWrapper key={idx} href={`mailto:${c.link}`} target="_blank">
                                <ContactIcon key={c.link} type="image/svg+xml" data={c.icon}/>
                            </LinkWrapper>
                        }
                    } else {
                        return <ContactLink key={idx} href={c.link} target="_blank">
                            <ContactIcon key={c.link} type="image/svg+xml" data={c.icon}/>
                        </ContactLink>
                    }
                })}

            </ContactIconsContainer>
        </ContactsContent>
    </ContactsContainer>
}

export const ContactsMobile = styled(Contacts)(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        display: "none"
    }
}));
export const ContactsDesktop = styled(Contacts)(({theme}) => ({
    display: "none",
    [theme.breakpoints.up('lg')]: {
        display: "block"
    }
}));

export const Home = () => {
    const theme = useTheme();
    return <BaseContainer>
        <Root>
            <HomeLayout>
                <DescriptionLayout style={{ maxWidth: "700px", margin: "auto"}}>
                    <AboutMeContainer>
                        <ProfileImg src={"/profile.png"}/>
                        <TextContainer>
                            <BioContainer>
                                <HelloText>Hello</HelloText>
                                <NameText>I am Alex</NameText>
                            </BioContainer>
                            <PositionText>Software Engineer</PositionText>
                        </TextContainer>
                    </AboutMeContainer>
                    <DarkOpacityRectangle width={"calc(100% - 20px)"} borderRadius={15} padding={10}>
                        <AboutMeText variant="h5" textAlign={"start"}>
                            I am software engineer with over 7 years of experience in the industry.
                            My expertise lies in languages such as Python, JavaScript, GoLang,
                            Dart,
                            as well as frameworks such as React, Flatter, Django, and Angular.
                            I am highly skilled in developing and maintaining RESTful APIs,
                            and have a strong understanding of database design, management an UX/UI Design.
                        </AboutMeText>
                        <Typography marginTop={"10px"} variant="h5" textAlign={"end"}>@cucusenok</Typography>
                    </DarkOpacityRectangle>
                    <ContactsDesktop />
                    <Spacer height={"25%"} breakpoints={ {
                        [theme.breakpoints.up(theme.breakpoints.values.lg)]: { height: "20px", },
                    }}>
                        <Button href={'cucusenok_cv.pdf'} variant="contained" endIcon={<DownloadIcon />} fullWidth download>
                            Download my CV
                        </Button>
                    </Spacer>
                </DescriptionLayout>
                <ContactsMobile/>
            </HomeLayout>
        </Root>
    </BaseContainer>

}