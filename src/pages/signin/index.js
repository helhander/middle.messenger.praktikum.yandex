import Form from '../../blocks/form/index';
import { render } from '../../modules/render';
import elems from './data';

const loginForm = new Form('Вход', elems);
render('.app', loginForm);
