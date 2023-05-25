import {Home} from "../Pages/Home/Home";
import {Stack} from "../Pages/Stack/Stack";
import {Projects} from "../Pages/Projects/Projects";
import Project from "../Pages/Project/Project";
import PagesBar from "../Pages/PagesBar/PagesBar";
import Articles from "../Pages/Articles/Articles";
import React from "react";
import {PageNotFound404} from "../Pages/Errors/PageNotFound404";

export const MOBILE_ROUTES = [
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/articles",
        element: <Articles />,
    },
    {
        path: "/stack",
        element: <Stack />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/projects/:id",
        element: <Project />,
    },
];

export const DESKTOP_ROUTES = [
    {
        path: "/*",
        element: <PagesBar />,
    },
    {
        path: "/articles",
        element: <Articles />,
    },
    {
        path: "/projects/:id",
        element: <Project />,
    },
    {
        path: "404",
        element: <PageNotFound404 />,
    },
];
