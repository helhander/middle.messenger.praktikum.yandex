import getComponents from '../../modules/getElemsFragment'
import template from './profileInfo.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './profileInfo.scss';

export default class ProfileInfo extends PugTemplate {
    constructor(elems = []) {
        const elemsHTML = getComponents(elems);
        const viewTemplate = template + elemsHTML;    
        
        super(viewTemplate);
    }
}
