import React, {createContext, useContext} from "react";
import { Location } from "react-router-dom"

export type GlobalContextProps = {
    onScroll:(e: React.UIEvent<HTMLDivElement>) => void,
    onLocationChanged: (location: Location) => void,
    hideBecauseScroll: boolean,
    screenSize: {
        width: number,
        height: number,
    },
}

export const GlobalContextDefault = {
    onScroll:(e: React.UIEvent<HTMLDivElement>) => {},
    onLocationChanged:(location: Location) => {},
    hideBecauseScroll: false,
    screenSize: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
}


export const GlobalContext = createContext<GlobalContextProps>(GlobalContextDefault)
export const useGlobalContext = () => useContext(GlobalContext)