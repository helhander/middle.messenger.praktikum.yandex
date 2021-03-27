//import { sum } from '../../modules/sum';
import template from './index.tmpl'

const pug = require('pug');
const root = document.querySelector('#login-root');
const loginTemplateFunc = pug.compile(template);
const loginCompiled = loginTemplateFunc({});
root.innerHTML = loginCompiled;
