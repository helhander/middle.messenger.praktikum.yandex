import getElemsHTML from '../../modules/getElemsHTML';
import template from './form.tmpl';
import PugTemplate from '../../pugTemplate';
import './form.scss';
export default class Form extends PugTemplate {
    constructor(name, elems) {
        const elemsHTML = getElemsHTML(elems);
        const blockTemplate = template + elemsHTML;

        super(blockTemplate, { name });
    }
}