import {styled} from "@mui/system";
import {StackListContainerProps} from "./types";
import Button from "@mui/material/Button";
import {FormGroup} from "@mui/material";

export const Content = styled('div')({
    padding: "40px 20px 0 20px",
});

export const StackItemContainer = styled('div')({})


export const StackItemLogo = styled('img')({});


export const ContentVerticalSeparator = styled('div')({
    width: "1px",
    height: "30px",
    background: "rgba(255,255,255,0.6)",
})


export const StackItemTitleContainer = styled('div')({
    display: "flex",
    alignItems: "center",
    padding: "0 5px 10px 5px",
    gap: "20px",

})

export const StackListContainer = styled('div')<StackListContainerProps>(({ height }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    overflowY: "auto",
    maxHeight: height,
    height: height,
}));


export const CheckboxListRoot = styled('div')({
    overflowY: "auto",
    height: "100%",
})



export const ClearFilterButton = styled(Button)({
    margin: "auto"
})

export const BottomSheetRoot = styled('div')({
    height: "100%",
    padding: "10px 20px 30px 20px",
    display: "flex",
    flexDirection: "column",
    maxHeight: "100%",
    overflowY: "auto",
})

export const BottomSheetStyledRoot = styled('div')(({theme}) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up('lg')]: {
        width: "60%",
        margin: "auto",
    }
}));

export const FormGroupListStyled = styled(FormGroup)(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
    }
}));
