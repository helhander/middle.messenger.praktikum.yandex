//import { sum } from '../../modules/sum';
import template from './index.tmpl';
import Wrapper from '../../components/wrapper/wrapper';
import Form from '../../components/form/form';
/*const wrapper = new Wrapper().get();
let innerPage = wrapper;
const inputs = [
    {
        name: 'Логин',
        attrs: {
            name: 'login',
            type: 'text',
            id: 'login-form-login'
        }
    },
    {
        name: 'Пароль',
        attrs: {
            name: 'password',
            type: 'password',
            id: 'login-form-password'
        }
    },
];
const loginForm = new Form('Login', inputs).get();
innerPage.appendChild(loginForm);
//console.log(wrapper);
document.body.appendChild(innerPage);*/
const pug = require('pug');
const root = document.body;
const loginTemplateFunc = pug.compile(template);
const loginCompiled = loginTemplateFunc({});
root.innerHTML = loginCompiled;
