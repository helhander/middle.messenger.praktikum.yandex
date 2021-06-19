import getElemsHTML from '../../modules/getElemsHTML';
import template from './chatHeader.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './chatHeader.scss';

export default class ChatSpace extends PugTemplate {
    constructor(elems = []) {
        const elemsHTML = getElemsHTML(elems);
        const blockTemplate = template + elemsHTML;

        super(blockTemplate);
    }
}
