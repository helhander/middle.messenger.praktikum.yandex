import './input.scss';
import template from './input.tmpl';
import PugTemplate from '../../pugTemplate';

export default class Input extends PugTemplate {
    constructor(attrs) {
        super(template, attrs);
    }
}
