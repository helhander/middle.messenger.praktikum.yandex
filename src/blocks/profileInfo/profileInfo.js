import getElemsHTML from '../../modules/getElemsHTML'
import template from './profileInfo.tmpl';
import PugTemplate from '../../pugTemplate';
import './profileInfo.scss';

export default class ProfileInfo extends PugTemplate {
    constructor(elems = []) {
        const elemsHTML = getElemsHTML(elems);
        const viewTemplate = template + elemsHTML;    
        
        super(viewTemplate);
    }
}