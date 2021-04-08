import './button.scss';
import template from './button.tmpl';
import PugTemplate from '../../pugTemplate';

export default class Button extends PugTemplate {
    constructor(attrs) {
        super(template, attrs);
    }
}
