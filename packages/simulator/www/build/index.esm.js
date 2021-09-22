import { A as ActiveRouter } from './active-router-4aac554d.js';
import './match-path-760e1797.js';
import './index-34d11060.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
