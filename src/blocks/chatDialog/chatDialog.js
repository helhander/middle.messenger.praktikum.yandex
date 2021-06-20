import getComponents from '../../modules/getElemsFragment';
import template from './chatDialog.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './chatDialog.scss';

export default class ChatDialog extends PugTemplate {
    constructor(elems = []) {
        const elemsHTML = getComponents(elems);
        const blockTemplate = template + elemsHTML;

        super(blockTemplate);
    }
}
