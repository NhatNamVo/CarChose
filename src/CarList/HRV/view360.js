import * as SpriteSpin from 'spritespin';
const Arr = [
  {
    target: '#beta',
    source: SpriteSpin.source('./images/HRV/Blue/HRV-{frame}.jpg', {
      frame: [1, 35],
      digits: 1,
    }),
    animate: false,
    detectSubsampling: false,
    sense: 2,
    frames: 35,
    responsive: true,
    sizeMode: 'fill',
    width: 300,
    height: 300,
  },
  {
    target: '#beta',
    source: SpriteSpin.source('./images/HRV/Black/HRV-{frame}.jpg', {
      frame: [1, 35],
      digits: 1,
    }),
    animate: false,
    detectSubsampling: false,
    sense: 2,
    frames: 35,
    responsive: true,
    sizeMode: 'fill',
    width: 400,
    height: 500,
  },
  {
    target: '#beta',
    source: SpriteSpin.source('./images/HRV/Silver/HRV-{frame}.jpg', {
      frame: [1, 35],
      digits: 1,
    }),
    animate: false,
    detectSubsampling: false,
    sense: 2,
    frames: 35,
    responsive: true,
    sizeMode: 'fill',
    width: 300,
    height: 300,
  },
  {
    target: '#beta',
    source: SpriteSpin.source('./images/HRV/Red/HRV-{frame}.jpg', {
      frame: [1, 35],
      digits: 1,
    }),
    animate: false,
    detectSubsampling: false,
    sense: 2,
    frames: 35,
    responsive: true,
    sizeMode: 'fill',
    width: 300,
    height: 300,
  },
  {
    target: '#beta',
    source: SpriteSpin.source('./images/HRV/Steel/HRV-{frame}.jpg', {
      frame: [1, 35],
      digits: 1,
    }),
    animate: false,
    detectSubsampling: false,
    sense: 2,
    frames: 35,
    responsive: true,
    sizeMode: 'fill',
    width: 300,
    height: 300,
  },
  {
    target: '#beta',
    source: SpriteSpin.source('./images/HRV/Amethyst/HRV-{frame}.jpg', {
      frame: [1, 35],
      digits: 1,
    }),
    animate: false,
    detectSubsampling: false,
    sense: 2,
    frames: 35,
    responsive: true,
    sizeMode: 'fill',
    width: 300,
    height: 300,
  },
  {
    target: '#beta',
    source: SpriteSpin.source('./images/HRV/White/HRV-{frame}.jpg', {
      frame: [1, 35],
      digits: 1,
    }),
    animate: false,
    detectSubsampling: false,
    sense: 2,
    frames: 35,
    responsive: true,
    sizeMode: 'fill',
    width: 300,
    height: 300,
  },
]
const View360 = (id) => {
  SpriteSpin.spritespin(Arr[id]);
  const objClick = document.querySelectorAll('.btn');
    objClick.forEach((btn) => {
      if (btn.classList.contains('actived')) {
        btn.classList.remove('actived');
        return;
      }
    });
  objClick[id].classList.add('actived');
  return;
}

export default View360;