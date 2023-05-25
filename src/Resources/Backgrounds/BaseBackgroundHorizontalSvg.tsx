import React, {useEffect, useState} from "react";

export const BaseBackgroundHorizontalSvg = () => {
    const [height, heightSet] = useState(window.innerHeight);
    const [width, widthSet] = useState(window.innerWidth);
    const onResize = () => {
        heightSet(window.innerHeight);
        widthSet(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [])

    const headerRectangleHeight = 180;


    return <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
        //preserveAspectRatio="none"
                viewBox={`0 0 ${width} ${height}`}
    >

        <defs>
            <clipPath id="mask">
                <path d={`
            M 0 ${headerRectangleHeight}
            ${width} ${headerRectangleHeight}
            ${width} ${height}
            0 ${height}
            0 0
            `
                }
                />
            </clipPath>
            <filter id="f1" x="0" y="0">
{/*
                <feGaussianBlur stdDeviation={width / 10} result="effect1_foregroundBlur_1263_1723"/>
*/}
            </filter>
            <filter id="f2" x="0" y="0">
{/*
                <feGaussianBlur stdDeviation={width / 20} result="effect1_foregroundBlur_1263_1723"/>
*/}
            </filter>

            <linearGradient id="linear_grad_1"
                            x1={0} y1={0}
                            x2={width} y2={height}
                            gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="blue"/>
                <stop offset="1" stop-color="yellow"/>
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse"
                            id="linear_grad_2"
                            x1={width / 2} y1={height / 1.2}
                            x2={width} y2={height / 1.5}
            >
                <stop stop-color="#FF0095"/>
                <stop offset="1" stop-color="#FFCDFF"/>
            </linearGradient>
        </defs>

        <path d={`
            M 0 0
            ${width} 0
            ${width} ${height}
            0 ${height}
            0 0
            `
        }
              fill={"#0E0C0E"}
        />


        <g>

            <path d={`
            M 0 ${headerRectangleHeight}
            ${width} ${headerRectangleHeight}
            ${width} ${height}
            0 ${height}
            Z
            `
            }
                  fill={"#0E0C0E"}
            />
            <g clip-path="url(#mask)" filter={"url(#f1)"}>
                <g filter={"url(#f2)"} >
                    <ellipse cx={width / 2} cy={height * 0.6} rx={width / 2} ry={height / 4} fill="#8349FF"/>
                </g>
                <g filter={"url(#f2)"}>
                    <ellipse cx={-width / 2} cy={height / 1.7} rx={width} ry={height / 2} fill="red"/>
                </g>
                <g filter={"url(#f2)"}>
                    <ellipse cx={-width / 1.4} cy={height / 1.4} rx={width} ry={height / 2.5} fill="orange"/>
                </g>
                <g filter={"url(#f2)"}>
                    <path d={`
                        M ${width / 3} ${height / 1.1}
                        C ${width / 3} ${height / 1.1}
                        ${width / 1.2} ${height / 1.5}
                        ${width / 3} ${height / 4}
                        M ${width / 3} ${height / 4}
                        ${width} ${height / 8}
                        ${width + 100} ${height / 1.1}
                        ${width / 3} ${height / 1.1}
                        `}
                          fill={"url(#linear_grad_2)"}
                          clipPath={"url(#mask)"}
                    />
                </g>
            </g>
        </g>


        {/*<path d={`
            M 0 0
            ${width} 0
            ${width} ${headerRectangleHeight}
            0 ${headerRectangleHeight}`
        }
              fill="#0E0C0E"
        />*/}


        {/*
        <circle cx={width / 2} cy={ (height) / 2 } r="50" stroke="green" strokeWidth="3" fill="white" />
*/}
    </svg>
}

export default BaseBackgroundHorizontalSvg;