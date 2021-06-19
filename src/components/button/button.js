import template from './button.tmpl';
import PugTemplate from '../../modules/pugTemplate';

export default class Button extends PugTemplate {
    constructor(attrs) {
        super(template, attrs);
    }
}
