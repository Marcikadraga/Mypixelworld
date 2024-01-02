export function GetDrawing(artName, canvasRef, pixelSize) {
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