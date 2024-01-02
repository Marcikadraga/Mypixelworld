import React, { useRef, useEffect } from 'react';
import drawingsData from '../datas/drawings.json';
import { DrawImage } from '../Utility/DrawImage';

export function DrawingComponent({ drawing }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        function getDrawing(artName, canvasRef, pixelSize) {
            const drawingData = drawingsData.drawings.find((item) => item.name === artName);
            if (drawingData) {
                const sanitizedData = JSON.stringify(drawingData.colors).replace(/[\x00-\x1F]/g, '');
                const parsedData = JSON.parse(sanitizedData);
                const canvas = canvasRef.current;

                if (canvas) {
                    canvas.width = parsedData.drawingTableColors[0].length * pixelSize;
                    canvas.height = parsedData.drawingTableColors.length * pixelSize;
                    DrawImage(canvas, pixelSize, parsedData);
                }
            }
        }

        getDrawing(drawing.name, canvasRef, 10);
    }, [drawing.name]);

    return (
        <td>
            <canvas ref={canvasRef}></canvas>
        </td>
    );
}



