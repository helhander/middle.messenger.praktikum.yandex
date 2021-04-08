import Input from '../input/index';
import Link from '../link/index';
import Chat from '../chat/index';
import Button from '../button/index';
import Wrapper from '../wrapper/index';
import template from './sidebar.tmpl';
import PugTemplate from '../../pugTemplate';
import './sidebar.scss';

export default class Sidebar extends PugTemplate {
    constructor(elems) {
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
                case 'button':
                    const button = new Button(elem.attrs);
                    formTemplate += button.get();
                    break;
                case 'chat':
                    const chat = new Chat(elem.attrs);
                    formTemplate += chat.get();
                    break;
                case 'div':
                case 'span':
                    const wrapper = new Wrapper(elem.tag, elem.classes, elem.elems, elem.inner, elem.inner);
                    formTemplate += wrapper.get();
                    break;
                default:
                    break;
            }
        }
        super(formTemplate);
    }
}