export function DrawImage(canvas, sizeOfPixel, colors) {
    var ctx = canvas.getContext("2d");

    for (let i = 0; i < colors.drawingTableColors[0].length; i++) {
        for (let j = 0; j < colors.drawingTableColors.length; j++) {
            ctx.fillStyle = "rgb(" + colors.uniqueColors[colors.drawingTableColors[j][i]].toString() + ")";
            ctx.fillRect(i * sizeOfPixel, j * sizeOfPixel, sizeOfPixel, sizeOfPixel);
        }
    }
}