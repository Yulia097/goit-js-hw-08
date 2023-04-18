import Player from '@vimeo/player';
import { throttle } from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

player.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime);
}
