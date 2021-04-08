import Input from '../input/index';
import Link from '../link/index';
import template from './form.tmpl';
import PugTemplate from '../../pugTemplate';
import './form.scss';
export default class Form extends PugTemplate {
    constructor(name, elems) {
        let formTemplate = template;
        for (let elem of elems) {
            switch (elem.tag) {
                case 'input':
                    const input = new Input(elem.attrs);
                    formTemplate += input.get();
                    break;
                case 'link':
                    const link = new Link(elem.attrs);
                    formTemplate += link.get();
                    break;
                default:
                    break;
            }
        }
        super(formTemplate, { name });
    }
}