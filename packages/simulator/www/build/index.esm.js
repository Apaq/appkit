import { A as ActiveRouter } from './active-router-9a2bf338.js';
import './match-path-760e1797.js';
import './index-1ee94472.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
