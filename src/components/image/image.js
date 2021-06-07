import template from './image.tmpl';
import PugTemplate from '../../pugTemplate';

export default class Input extends PugTemplate {
    constructor(attrs) {
        super(template, attrs);
    }
}
