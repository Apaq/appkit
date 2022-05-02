import { A as ActiveRouter } from './active-router-a7331619.js';
import './match-path-760e1797.js';
import './index-5573a81b.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
