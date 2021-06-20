import getComponents from '../../modules/getElemsFragment';
import template from './errorPage.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './errorPage.scss';

export default class ErrorPage extends PugTemplate {
    constructor(elems = []) {
        const elemsHTML = getComponents(elems);
        const blockTemplate = template + elemsHTML;

        super(blockTemplate);
    }
}
