import Form from '../../blocks/form/index';
import render from '../../modules/render';
import comps from './data';

const loginForm = new Form({ name: 'Вход', comps });

render('.app', loginForm);
