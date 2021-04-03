import './link.scss';
import template from './link.tmpl';
import PugTemplate from '../../pugTemplate';

export default class Link extends PugTemplate {
    constructor(attrs) {
        super(template, attrs);
    }
}
