import React, {MutableRefObject, ReactNode, useCallback, useEffect, useRef} from "react"
import {useDrag} from "react-use-gesture";
import { useSpring, animated, config } from '@react-spring/web'
import {styled} from "@mui/system";
import styles from './styles.module.css'
import {Typography} from "@mui/material";
import { IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import useClickOutside from "../../hooks/useClickOutside";

const Background = styled('div')({
    width: "100%",
    height: "100%",
    background: 'rgba(0,0,0,0.8)',
    backdropFilter: 'blur(10px)',
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 100,
});

const Content = styled('div')({
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 101,
});

const Header = styled('div')({
    position: "relative",
    display: "flex",
    height: '40px',
    justifyContent: "space-between",
    padding: "10px 20px",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
    "&::after": {
        content: '""',
        position: "absolute",
        left: "calc(50% - 20px)",
        top: "10px",
        borderRadius: "1px",
        width: "40px",
        height: "1px",
        background: "rgba(255,255,255,0.6)",
        zIndex: 100000,
    }
});


type AnimatedRootProps = {
    height: number,
    maxheight?: number,
}
const AnimatedRoot = styled(animated.div)<AnimatedRootProps>(({theme, height, maxheight}) => ({
    background: "transparent",
    bottom: `calc(-100vh + ${height - (maxheight ? 0 : 100)}px)`,

    [theme.breakpoints.up('lg')]: {
        bottom: `calc(-100vh + ${height - (maxheight ? 0 : 500)}px)`
    }
}));


type ChildrenRootProps = {
    height: number,
}
const ChildrenRoot = styled(animated.div)<ChildrenRootProps>(({theme, height}) => ({
    height: `calc(${height - 60}px)`,

    [theme.breakpoints.up('lg')]: {
        height: `calc(${height - 450}px)`
    }
}));

type BottomSheetProps = {
    openRef?: MutableRefObject<() => void>,
    title?: string | ReactNode,
    maxHeight?: number,
} & React.PropsWithChildren
export const BottomSheet = ({openRef, children, title, maxHeight}: BottomSheetProps) => {
    const BOTTOM_SHEET_HEIGHT = maxHeight ? maxHeight : (window.innerHeight - 180);

    const [{ y }, api] = useSpring(() => ({ y: BOTTOM_SHEET_HEIGHT }));
    const isOpenRef = useRef<boolean>(false);

    const open = useCallback(() => {
        isOpenRef.current = true;
        api.start({ y: 0, immediate: false, config: config.stiff})
    }, [api]);

    useEffect( () => {
        if(openRef) {
            openRef.current = open;
        }
    }, [openRef, open])
    const close = (velocity = 0) => {
        isOpenRef.current = false;
        api.start({ y: BOTTOM_SHEET_HEIGHT, immediate: false, config: { ...config.stiff, velocity } })
    }
    const onCloseHandler = (event: React.MouseEvent<HTMLElement>) => { close() }
    const bind = useDrag(({
                              cancel, last, canceled, event,
                              direction: [, dy],
                              movement: [, my],
                          }) => {
            if (my < -70) { cancel && cancel() }
            if (last) {
                my > BOTTOM_SHEET_HEIGHT * 0.5 || (dy > 0) ? close() : open()
            }
            else api.start({ y: my, immediate: true })
        },
        { from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
            threshold: 200,
        }
    )

    const display = y.to((py) => (py < BOTTOM_SHEET_HEIGHT ? 'block' : 'none'));
    const rootRef = useRef(null);

    const clickOutsideCallback = () => {
        isOpenRef.current && close();
    }

    useClickOutside(rootRef, clickOutsideCallback)
    
    return (
        <div ref={rootRef} className="flex" style={{ overflow: 'hidden', background: "transparent", }}>
            <AnimatedRoot height={BOTTOM_SHEET_HEIGHT}
                          maxheight={maxHeight}
                          className={styles.sheet}
                          {...bind()}
                          style={{ display, y }
            }
            >
                <div style={{position: "relative", width: "100%", height: "100%", }}>
                    <Background />
                    <Content>
                        <Header>
                            <Typography variant={"h4"}>
                                { title }
                            </Typography>
                            <IconButton onClick={onCloseHandler}>
                                <HighlightOffIcon style={{color: 'rgba(255,255,255,0.6)'}} />
                            </IconButton>
                        </Header>
                        <ChildrenRoot height={BOTTOM_SHEET_HEIGHT} >
                            { children }
                        </ChildrenRoot>

                    </Content>
                </div>
            </AnimatedRoot>
        </div>
    )
}