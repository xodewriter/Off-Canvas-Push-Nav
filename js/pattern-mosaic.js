const mosaicContainer = document.querySelector('.mosaic');
// tile HSL (Hue, Saturation, Lightness)
let tileH = 10; // 80 deg
let tileS = 64; // 61%
let tileL = 50; // 50%

let patternMosaic = () => {
  for (let i = 0; i < 64; i++) {
    let mosaicTile = document.createElement('DIV');
        mosaicTile.style.width = '47.5px';
        mosaicTile.style.height = '47.5px';
        mosaicTile.style.background = `hsl( 
            ${ tileH * i }, 
            ${ tileS }%, 
            ${ tileL }% 
        )`;
    mosaicContainer.appendChild(mosaicTile);
  }
}

patternMosaic();

export { patternMosaic }