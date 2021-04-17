import Input from '../../components/input/index';
import Link from '../../components/link/index';
import Chat from '../../components/chat/index';
import Button from '../../components/button/index';
import Wrapper from '../wrapper/index';
import Image from '../../components/image/index';
import template from './chatHeader.tmpl';
import PugTemplate from '../../pugTemplate';
import './chatHeader.scss';

export default class ChatSpace extends PugTemplate {
    constructor(elems = []) {
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
                case 'span':
                case 'div':
                    const wrapper = new Wrapper(elem.tag, elem.classes, elem.elems, elem.inner);
                    formTemplate += wrapper.get();
                    break;
                case 'image':
                    const image = new Image(elem.attrs);
                    formTemplate += image.get();
                    break;
                default:
                    break;
            }
        }
        super(formTemplate);
    }
}