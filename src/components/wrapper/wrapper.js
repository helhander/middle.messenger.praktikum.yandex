import Input from '../input/index';
import Link from '../link/index';
import Chat from '../chat/index';
import Button from '../button/index';
import Image from '../image/index';
import divTemplate from './div.tmpl';
import spanTemplate from './span.tmpl';
import PugTemplate from '../../pugTemplate';
import './wrapper.scss';

export default class Wrapper extends PugTemplate {
    constructor(tag, classes, elems = [], inner = null) {
        let formTemplate = (tag == 'div') ? divTemplate : spanTemplate;
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
                case 'image':
                    const image = new Image(elem.attrs);
                    formTemplate += image.get();
                    break;
                default:
                    break;
            }
        }
        console.log({ tag, classes, inner });
        super(formTemplate, { tag, classes, inner });
    }
}