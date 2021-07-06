import Form from '../../blocks/form/index';
import { render } from '../../modules/render';
import elems from './data';

const signUp = new Form('Регистрация', elems);
render('.app', signUp);
