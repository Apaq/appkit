import { A as ActiveRouter } from './active-router-7e935828.js';
import './match-path-760e1797.js';
import './index-b95215f1.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
