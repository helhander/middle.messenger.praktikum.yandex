//import { sum } from '../../modules/sum';
import template from './index.tmpl'

const pug = require('pug');
const templateFunc = pug.compile(template);
const compiledTemplate = templateFunc({});

export default template;
