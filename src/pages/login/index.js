import Form from '../../components/form/index';
import elems from './data';

const loginForm = new Form('Вход', elems).get();
document.body.innerHTML = loginForm;
