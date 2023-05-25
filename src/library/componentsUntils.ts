/**
 *
 * @param value
 * @param defaultValue
 */
export const stringOrNumberCssPropertyTransform = (value: string | number | undefined, defaultValue: string): string => {
    return value ? (typeof value === "number" ? `${value}px` : value) : defaultValue
}


/**
    For size of img controlling in situations when u have many images
    with different aspect ratio.
    Add width/height and `BreakpointsExtender` as params for more flexible using.

    @param {string} base64 - base64 encoded img or path to file
 */
export const CalculateLogoImageSize = (base64: string) => {
    const image = new Image();
    image.src = base64;
    if(image.height >= image.width) {
        return { width: "auto", height: "40px", maxHeight: "40px", }
    } else {
        return { width: "60px", height: "auto" }
    }
}
