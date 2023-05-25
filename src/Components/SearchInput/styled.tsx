import {styled} from "@mui/system";
import {Collapse, FormControl} from "@mui/material";
import FilledInput from "@mui/material/FilledInput";
import Button from "@mui/material/Button";
import {FormControlStyledProps} from "../../Pages/Stack/types";
import InputLabel from "@mui/material/InputLabel";


export const FormControlStyled = styled(FormControl)<FormControlStyledProps>(({ inFocus }) => ({
    width: "100%",
    background: "rgba(0,0,0,.6)",
    borderRadius: inFocus ? "5px" : "0 5px 5px 0",
    "input": {
        color: "white",
    },
}));

export const CollapseSearchIcon = styled(Collapse)({
    background: "rgba(0,0,0,.62)",
    borderRadius: "5px 0 0 5px",
});

export const FilledInputStyled = styled(FilledInput)({
    "&::before": {
        borderBottom: "none"
    },
    "&:hover": {
        borderRadius: "5px",
        "&::before": {
            borderBottom: "none !important"
        },
    }
});

export const FilterButton = styled(Button)({
    background: "rgba(0,0,0,.62)",
    marginLeft: "5px",

    "&:hover": {
        background: "rgba(0,0,0,.8)",
    }
});

export const InputLabelStyled = styled(InputLabel)({
    color: "white",
});

export const SearchInputContainerStyled = styled('div')({
    display: "flex",
});

export const SearchInputIconContainerStyled = styled('div')({
    width: "70px",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});
