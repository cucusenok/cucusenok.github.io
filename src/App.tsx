import React, {useCallback, useState} from 'react';
import './App.css';
import {
  createHashRouter,
  RouterProvider, Location,
} from "react-router-dom";
import {BaseBackground} from "./Components/Containers/BaseBackground";
import { ThemeProvider } from '@mui/material/styles';
import debounce from "lodash/debounce"
import {useTheme} from "@mui/material";
import {BreakpointValues, theme} from "./common/theme";
import {DESKTOP_ROUTES, MOBILE_ROUTES} from "./common/routes";
import {GlobalContext, GlobalContextDefault} from "./common/globalContext";


let currentResizeTimeOut: ReturnType<typeof setTimeout>;

const updateAppHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);

  currentResizeTimeOut = setTimeout( () => {
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  }, 500)
}

const resizeDebounce = debounce(updateAppHeight, 500)

let lastResizeValue = window.innerWidth;

window.addEventListener('orientationchange', (event) => {
  /*
    It`s not better solution, I know
    This must execute just on tablets
    for update routes
    check createBrowserRouter method
 */
  if((window.innerWidth >= BreakpointValues.lg && lastResizeValue < BreakpointValues.lg)
      || (window.innerWidth < BreakpointValues.lg && lastResizeValue >= BreakpointValues.lg)) {
    window.location.reload();
  }
  lastResizeValue = window.innerWidth;
});


const onResize = () => {
  if(currentResizeTimeOut) { clearTimeout(currentResizeTimeOut) }
  resizeDebounce();
}

const init = () => {
  window.addEventListener('resize', onResize)
  onResize();
}


let lastChangePosition = 0;

function App() {
  init();
  const them = useTheme();
  const appWidth = window.innerWidth;

  const isLgBreakpoint = appWidth >= them.breakpoints.values.lg;
  const router = createHashRouter(isLgBreakpoint ? DESKTOP_ROUTES : MOBILE_ROUTES);

  const [hideBecauseScroll, hideBecauseScrollSet] = useState(false);

  /*
    This function can be callback for any scrollable component
    if u want hide menu or other UI elements. Use `useGlobalContext` + hideBecauseScroll
    for conditional rendering
   */
  const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    if(window.innerWidth >= them.breakpoints.values.lg) {
      return;
    }
    const target = e.target as HTMLDivElement;
    const scrollTop = target.scrollTop;
    if (scrollTop < 0) {
      lastChangePosition = 0;
      return;
    } else if ((target.clientHeight + scrollTop) >= target.scrollHeight) {
      return;
    }
    else if(scrollTop > lastChangePosition) {
      hideBecauseScrollSet(true);
    } else {
      hideBecauseScrollSet(false);
    }
    lastChangePosition = scrollTop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /*
      workaround, reason - the react-router-dom context
      callback have attached to BaseContainer component, this component must be
      entry point for every page.
   */
  const onLocationChanged = useCallback((location: Location) => {
    console.log('onLocationChanged')
    // return menu if it was hidden
    hideBecauseScrollSet(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <BaseBackground>
            <GlobalContext.Provider value= {{...GlobalContextDefault, hideBecauseScroll, onScroll, onLocationChanged }}>
              <RouterProvider router={router} />
            </GlobalContext.Provider>
          </BaseBackground>
        </ThemeProvider>
    </div>
  );
}

export default App;
