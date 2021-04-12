import './message.scss';
import template from './message.tmpl';
import PugTemplate from '../../pugTemplate';

export default class Message extends PugTemplate {
    constructor(attrs) {
        super(template, attrs);
    }
}
