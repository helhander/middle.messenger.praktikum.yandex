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
import { Blocks, Component, TAG_NAMES } from '../../components/component.types';
import { WrapperProps } from './wrapper.types';
import Block from '../../modules/Block';
import getComponents from '../../modules/getElemsFragment';

export default class Wrapper extends Block<WrapperProps> {
    constructor(tag: string, classes: string = '', inner: string = '', comps: Component[] = []) {
        const components: Blocks[] = getComponents(comps);
        const wrapperProps: WrapperProps = { tagName: TAG_NAMES.DIV, tagClasses: 'workspace-layout', tag, classes, inner };
        /* 
                for (let elem of comps) {
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
         */
        super(wrapperProps, components);
    }
    render(): string {
        let template: string = '';
        switch (this.props.tag) {
            case 'div':
                template = divTemplate;
                this.innerMountPath = 'div';
                break;
            case 'span':
                template = spanTemplate;
                this.innerMountPath = 'span';
                break;
            case 'form':
                template = formTemplate;
                this.innerMountPath = 'form'
                break;
            default:
                break;
        }
        const pugTemplate = new PugTemplate(template, this.props);
        return pugTemplate.get();
    }
}