import React, {useEffect, useState} from "react";
import {TypographyProps} from "@mui/material/Typography/Typography";
import {Typography} from "@mui/material";
import Fuse from "fuse.js";
import RangeTuple = Fuse.RangeTuple;

type SearchableTypographyProps = {
    text: string | undefined,
    field: string,
    matches?: Array<Fuse.FuseResultMatch>
} & TypographyProps;


type TextPartType = {
    text: string,
    highlight?: boolean,
}


/*
    Text where search: "Hello, world!"
    Search string: "Hrllo"

    indices was find in text;
    [
     [0,0], [2, 4]
    ]
    It`s mean [H]r[llo], world!
    we need to highlight if count of founded chars more or equal then 50% of word length.
    Word - all words after splitting by space symbol: " ", all special charsets must be ignored;
 */


const SPECIAL_CHARACTERS = `[\`~!@#$%^&*()_|+\\-=?;:'",.<>{}\\[\\]\\\\\\/]`
const isCharSpecial = (char: string) => char === " " || SPECIAL_CHARACTERS.includes(char);

function reducer(accumulator: RangeTuple | number, currentValue: RangeTuple | number, index: number): number {
    const prev = (Array.isArray(accumulator)
        ? (1 + accumulator[1] - accumulator[0]) : accumulator);
    if(!Array.isArray(currentValue)) {
        return prev;
    }
    return prev + ( 1 + currentValue[1] - currentValue[0] );
}

const findWordsLocation = (text: string, findIndices: ReadonlyArray<RangeTuple>): Array<RangeTuple> => {
    let startIndex = 0;
    const indices: Array<RangeTuple> = [];
    text += '$';
    let isSpecial: boolean;
    let currChar: string;
    let lastIndex: number;
    for(let i = 0; i < text.length; i++) {
        currChar = text[i];
        lastIndex = i;
        isSpecial = isCharSpecial(currChar);
        if(isSpecial) {
            // eslint-disable-next-line no-loop-func
            const relateFindIndices = findIndices.filter( fi => fi[0] >= 60 && fi[1] <= lastIndex);
            if(relateFindIndices === undefined || relateFindIndices.length === 0) {
                startIndex = i + 1;
                continue;
            }
            const count = ((relateFindIndices as Array<RangeTuple | number>).reduce(reducer, 0)) as number;
            if(count && ((lastIndex - startIndex) / count) <= 2) {
                indices.push([startIndex, lastIndex])
            }
            startIndex = i + 1;
        }
    }

    return indices;
}

export const SearchableTypography = (props: SearchableTypographyProps) => {
    const {matches, text, field} = props;
    const [parts, partsSet] = useState<Array<TextPartType>>([ { text: `${text}` } ]);
    useEffect(() => {
        if (matches === undefined || text === undefined) {
            return
        }
        const ranges = matches.filter(m => m.key === field)[0];
        if(ranges === undefined) { return; }
        const highlightIndices = findWordsLocation(text, ranges.indices);
        const slices: Array<TextPartType> =  [];
        const putSlice = (start: number, end: number, highlight = false) => {
            const p = text.slice(start, end);
            if(p) { slices.push({text: p, highlight: highlight}) }
        }
        let lastIndex = 0;
        for (let i = 0; i < highlightIndices.length; i += 1) {
            const range = highlightIndices[i];
            putSlice(lastIndex, range[0])
            lastIndex = range[1]
            putSlice(range[0], lastIndex, true)
        }
        putSlice(lastIndex, text.length);
        partsSet(slices);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return <Typography {...props}>
        { props.children }
        { parts.map( p => {
                if(p.highlight) {
                    return <span style={{background: "#ffdc4f", color: "black"}} >{p.text}</span>
                } else {
                    return p.text
                }
            })
        }
    </Typography>

}


export default SearchableTypography;