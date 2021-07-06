import getComponents from '../../modules/getElemsFragment';
import template from './chatFooter.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './chatFooter.scss';
import { Blocks, Component, ComponentProps, TAG_NAMES } from '../../components/component.types';
import Block from '../../modules/Block';

export default class ChatFooter extends Block<ComponentProps> {
    constructor(comps: Component[]) {
        const components: Blocks[] = getComponents(comps);
        const chatFooterProps: ComponentProps = { tagClasses: 'chat-footer', tagName: TAG_NAMES.DIV };
        super(chatFooterProps, components, 'div');
    }

    render(): string {
        const pugTemplate = new PugTemplate(template, this.props);
        return pugTemplate.get();
    }
}
