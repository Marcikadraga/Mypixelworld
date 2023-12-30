import { useRef, useEffect } from 'react';
import drawings from '../drawings.json';
import './marcioWorldAnimation.css';


function drawImage(canvas, sizeOfPixel, colors) {
  var ctx = canvas.getContext("2d");

  for (let i = 0; i < colors.drawingTableColors[0].length; i++) {
    for (let j = 0; j < colors.drawingTableColors.length; j++) {
      ctx.fillStyle = "rgb(" + colors.uniqueColors[colors.drawingTableColors[j][i]].toString() + ")";
      ctx.fillRect(i * sizeOfPixel, j * sizeOfPixel, sizeOfPixel, sizeOfPixel);
    }
  }
}

function MarioWorldAnimation() {

  const data = drawings;
  console.log(typeof (data))
  //circle-1
  const pipe1 = useRef(null);
  const pipe2 = useRef(null);
  const marioWc = useRef(null);
  const cube1 = useRef(null);
  const cube2 = useRef(null);
  const cube3 = useRef(null);
  const cube4 = useRef(null);
  const flower_1 = useRef(null);
  const flower_2 = useRef(null);
  const mushroom1 = useRef(null);
  const mushroom2 = useRef(null);

  //circle-2
  const cloudCanvasRef1 = useRef(null);
  const cloudCanvasRef2 = useRef(null);
  const cloudCanvasRef3 = useRef(null);
  const cloudCanvasRef4 = useRef(null);
  const cloudCanvasRef5 = useRef(null);
  const cloudCanvasRef6 = useRef(null);

  //circle-3
  const mariocart_1 = useRef(null);
  const marioBomb_1 = useRef(null);

  //circle-6
  const mountain1 = useRef(null);
  const mountain2 = useRef(null);
  const mountain3 = useRef(null);
  const sun1 = useRef(null);
  const sun2 = useRef(null);
  const moon1 = useRef(null);
  const moon2 = useRef(null);

  useEffect(() => {
    function getDrawing(artName, canvasRef, pixelSize) {
      const drawing = data.drawings.find((item) => item.name === artName);
      if (drawing) {
        // eslint-disable-next-line no-control-regex
        const sanitizedData = JSON.stringify(drawing.colors).replace(/[\x00-\x1F]/g, '');
        const parsedData = JSON.parse(sanitizedData);
        const canvas = canvasRef.current;

        if (canvas) {
          canvas.width = parsedData.drawingTableColors[0].length * pixelSize;
          canvas.height = parsedData.drawingTableColors.length * pixelSize;
          drawImage(canvas, pixelSize, parsedData);
        }
      }
    }


    //circle-1
    getDrawing("pipe_1", pipe1, 10);
    getDrawing("pipe_1", pipe2, 10);
    getDrawing("Mario_wc", marioWc, 13);
    getDrawing("mario_cube_face", cube1, 10);
    getDrawing("mario_cube", cube2, 10);
    getDrawing("mario_cube_?", cube3, 10);
    getDrawing("mario_cube_?", cube4, 10);
    getDrawing("mario_flower", flower_1, 10);
    getDrawing("mario_flower3", flower_2, 10);
    getDrawing("red_mushroom", mushroom1, 10);
    getDrawing("yellow_mushroom", mushroom2, 10);

    //circle-2
    getDrawing("mario_cloud", cloudCanvasRef1, 10);
    getDrawing("mario_cloud", cloudCanvasRef2, 10);
    getDrawing("mario_ghost", cloudCanvasRef3, 15);
    getDrawing("mario_cloud", cloudCanvasRef4, 10);
    getDrawing("mario_cloud", cloudCanvasRef5, 10);
    getDrawing("mario_ghost", cloudCanvasRef6, 15);

    //circle-3
    getDrawing("mario_cart1", mariocart_1, 10);
    getDrawing("mario_bomb", marioBomb_1, 10);

    //circle-6
    getDrawing("mario_mountain1", mountain1, 10);
    getDrawing("mario_mountain2", mountain2, 10);
    getDrawing("mario_mountain3", mountain3, 10);
    getDrawing("mario_moon", moon1, 15);
    getDrawing("mario_sun", sun1, 15);
    getDrawing("mario_moon", moon2, 15);
    getDrawing("mario_sun", sun2, 15);

  }, [data]);

  return (
    <div>

      <div className="circle-container">
        <div className="circle-1">
          <canvas id="pipe-1" ref={pipe1}></canvas>
          <canvas id="pipe-2" ref={pipe2}></canvas>
          <canvas id="Mario_wc" ref={marioWc}></canvas>

          <canvas id="cube-1" ref={cube1}></canvas>
          <canvas id="cube-2" ref={cube2}></canvas>
          <canvas id="cube-3" ref={cube3}></canvas>
          <canvas id="cube-4" ref={cube4}></canvas>

          <canvas id="flower-1" ref={flower_1}></canvas>
          <canvas id="flower-2" ref={flower_2}></canvas>

          <canvas id="mushroom-1" ref={mushroom1}></canvas>
          <canvas id="mushroom-2" ref={mushroom2}></canvas>


        </div>

        <div className="circle-2">
          <canvas id="cloud1" ref={cloudCanvasRef1}></canvas>
          <canvas id="cloud2" ref={cloudCanvasRef2}></canvas>
          <canvas id="cloud3" ref={cloudCanvasRef3}></canvas>
          <canvas id="cloud4" ref={cloudCanvasRef4}></canvas>
          <canvas id="cloud5" ref={cloudCanvasRef5}></canvas>
          <canvas id="cloud6" ref={cloudCanvasRef6}></canvas>
        </div>

        <div className="circle-3">
          <canvas id="mario_cart1" ref={mariocart_1}></canvas>
          <canvas id="mario_bomb1" ref={marioBomb_1}></canvas>
        </div>

        <div className="circle-6">
          <canvas id="mario_mountain2" ref={mountain2}></canvas>
          <canvas id="mario_mountain3" ref={mountain3}></canvas>
          <canvas id="mario_mountain1" ref={mountain1}></canvas>
        </div>

        <div className="circle-7">
          <canvas id="mario_sun1" ref={sun1}></canvas>
          <canvas id="mario_moon1" ref={moon1}></canvas>
          <canvas id="mario_sun2" ref={sun2}></canvas>
          <canvas id="mario_moon2" ref={moon2}></canvas>
        </div>
      </div>
    </div>
  );
}

export default MarioWorldAnimation;
