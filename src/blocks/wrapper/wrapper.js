import Input from '../../components/input/index';
import Link from '../../components/link/index';
import Chat from '../../components/chat/index';
import Button from '../../components/button/index';
import Image from '../../components/image/index';
import Message from '../../components/message/index';
import divTemplate from './div.tmpl';
import spanTemplate from './span.tmpl';
import formTemplate from './form.tmpl';
import PugTemplate from '../../modules/pugTemplate';

export default class Wrapper extends PugTemplate {
    constructor(tag, classes = '', elems = [], inner = null) {
        let template = '';
        switch (tag) {
            case 'div':
                template = divTemplate;
                break;
            case 'span':
                template = spanTemplate;
                break;
            case 'form':
                template = formTemplate;
                break;
            default:
                break;
        }
        for (let elem of elems) {
            switch (elem.tag) {
                case 'input':
                    const input = new Input(elem.attrs);
                    template += input.get();
                    break;
                case 'link':
                    const link = new Link(elem.attrs);
                    template += link.get();
                    break;
                case 'button':
                    const button = new Button(elem.attrs);
                    template += button.get();
                    break;
                case 'chat':
                    const chat = new Chat(elem.attrs);
                    template += chat.get();
                    break;
                case 'image':
                    const image = new Image(elem.attrs);
                    template += image.get();
                    break;
                case 'span':
                case 'div':
                    const pug = require('pug');
                    const templateFunc = pug.compile((tag == 'div') ? divTemplate : spanTemplate);
                    template += templateFunc(elem.attrs);
                    break;
                case 'message':
                    const message = new Message(elem.attrs);
                    template += message.get();
                    break;
                default:
                    break;
            }
        }

        super(template, { tag, classes, inner });
    }
}