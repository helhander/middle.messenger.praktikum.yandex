import getComponents from '../../modules/getElemsFragment';
import template from './chatFooter.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './chatFooter.scss';

export default class ChatFooter extends PugTemplate {
    constructor(elems = []) {
        const elemsHTML = getComponents(elems);
        const blockTemplate = template + elemsHTML;

        super(blockTemplate);
    }
}
