import { A as ActiveRouter } from './active-router-771be640.js';
import './match-path-760e1797.js';
import './index-b4fa92fa.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
