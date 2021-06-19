import './chat.scss';
import template from './chat.tmpl';
import PugTemplate from '../../modules/pugTemplate';

export default class Chat extends PugTemplate {
    constructor(attrs) {
        super(template, attrs);
    }
}
