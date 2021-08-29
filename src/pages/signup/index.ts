import Form from '../../blocks/form/index';
import render from '../../modules/render';
import comps from './data';

const signUp = new Form({ name: 'Регистрация', comps });
render('.app', signUp);
