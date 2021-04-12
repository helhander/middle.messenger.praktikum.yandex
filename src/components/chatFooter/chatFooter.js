import getElemsHTML from '../../modules/getElemsHTML'
import template from './chatFooter.tmpl';
import PugTemplate from '../../pugTemplate';
import './chatFooter.scss';

export default class ChatFooter extends PugTemplate {
    constructor(elems = []) {
        const elemsHTML = getElemsHTML(elems);
        const formTemplate = template + elemsHTML;    
        
        super(formTemplate);
    }
}