import React, {useRef, useEffect, Ref, CanvasHTMLAttributes} from 'react'


type CanvasType = {
    draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void,
} & CanvasHTMLAttributes<unknown>

const Canvas = (props: CanvasType) => {

    const { draw, ...rest } = props
    const canvasRef: Ref<HTMLCanvasElement> = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current;
        if(canvas === null) { return  }
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;
        let frameCount = 0
        let animationFrameId: number;

        const render = () => {
            frameCount++
            draw(context, frameCount)
            //animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas
