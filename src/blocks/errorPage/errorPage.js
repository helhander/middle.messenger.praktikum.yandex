import getElemsHTML from '../../modules/getElemsHTML';
import template from './errorPage.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './errorPage.scss';

export default class ErrorPage extends PugTemplate {
    constructor(elems = []) {
        const elemsHTML = getElemsHTML(elems);
        const blockTemplate = template + elemsHTML;

        super(blockTemplate);
    }
}
