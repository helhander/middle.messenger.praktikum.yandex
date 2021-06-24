import Form from '../../blocks/form/index';
import { render } from '../../modules/render';
import elems from './data';

const loginForm: Form = new Form('Вход', elems);

render('.app', loginForm);
setTimeout(() => {
  console.log(loginForm);
  loginForm.setProps({
    name: 'otherClass',
  });
}, 1000);
