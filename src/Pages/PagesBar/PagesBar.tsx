import React from "react"
import {Root, SubContainer, TabStyled} from "./styled";
import {Home} from "../Home/Home";
import {Stack} from "../Stack/Stack";
import {Projects} from "../Projects/Projects";
import Tabs from "@mui/material/Tabs";
import Spacer from "../../Components/Untils/Spacer";
import { useLocation, useNavigate, Route, Routes, Navigate} from "react-router-dom";

export const PagesBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const activePageTab = location.pathname !== '/projects' ? 0 : 1;
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        navigate(  newValue === 0 ?'/' : '/projects')
    };
    return <Root>
        <Home />
        <SubContainer>
            <Spacer height={15} />
            <Tabs style={{padding: "0 20px",}} variant={"fullWidth"} value={activePageTab} onChange={handleChange} aria-label="basic tabs example">
                <TabStyled label="Stack" />
                <TabStyled label="Projects" />
            </Tabs>
            <div style={{
                overflowY: "hidden",
                maxHeight: "100%",
            }}>
                <Routes>
                    <Route path="projects" element={<Projects showTitle={false} />} />
                    <Route path="stack" element={<Projects showTitle={false} />} />
                    <Route path="/" element={ <Stack showTitle={false} />} />
                    <Route path="*" element={ <Navigate to={'/404'} />} />
                </Routes>
            </div>
        </SubContainer>
    </Root>
}

export default PagesBar;