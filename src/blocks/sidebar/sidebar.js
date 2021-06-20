import getComponents from '../../modules/getElemsFragment';
import template from './sidebar.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './sidebar.scss';

export default class Sidebar extends PugTemplate {
    constructor(elems, classes) {
        const elemsHTML = getComponents(elems);
        const blockTemplate = template + elemsHTML;

        super(blockTemplate, { classes });
    }
}