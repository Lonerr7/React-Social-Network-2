import './reset.scss';
import './index.scss';

import state from './redux/state';
import { renderEntireTree } from './render';

renderEntireTree(state);
