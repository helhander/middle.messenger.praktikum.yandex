import getComponents from '../../modules/getElemsFragment';
import template from './form.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './form.scss';
import Block from '../../modules/Block';

export default class Form extends Block {
    constructor(name, elems) {
        const components = getComponents(elems);
        super('div', { name }, components, 'form');
    }

    render() {
        const pugTemplate = new PugTemplate(template, this.props);
        return pugTemplate.get();
    }
}