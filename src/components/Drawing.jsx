import { DrawImage } from "../Utility/DrawImage";

export function Drawing({ pixelSize, colors }) {
    
    
    DrawImage(canvas, pixelSize, colors);

    return (
        <>
            {canvas}
        </>
    );
}