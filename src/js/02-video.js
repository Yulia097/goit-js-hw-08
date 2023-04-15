import Player from '@vimeo/player';
import { throttle } from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime);
}
