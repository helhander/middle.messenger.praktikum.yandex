import getElemsHTML from '../../modules/getElemsHTML';
import template from './chatDialog.tmpl';
import PugTemplate from '../../pugTemplate';
import './chatDialog.scss';

export default class ChatDialog extends PugTemplate {
    constructor(elems = []) {
        const elemsHTML = getElemsHTML(elems);
        const blockTemplate = template + elemsHTML;

        super(blockTemplate);
    }
}
