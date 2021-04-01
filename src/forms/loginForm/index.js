//import { sum } from '../../modules/sum';
import template from './index.tmpl';
import './index.css';

const pug = require('pug');
const templateFunc = pug.compile(template);
const compiledTemplate = templateFunc({});

export default compiledTemplate;
