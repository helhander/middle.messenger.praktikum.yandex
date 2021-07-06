import getComponents from '../../modules/getElemsFragment';
import template from './chatHeader.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './chatHeader.scss';
import { Blocks, Component, ComponentProps, TAG_NAMES } from '../../components/component.types';
import Block from '../../modules/Block';

export default class ChatHeader extends Block<ComponentProps> {
    constructor(comps: Component[]) {
        const components: Blocks[] = getComponents(comps);
        const chatHeaderProps: ComponentProps = { tagClasses: 'chat-header', tagName: TAG_NAMES.DIV };
        super(chatHeaderProps, components, 'div');
    }

    render(): string {
        const pugTemplate = new PugTemplate(template, this.props);
        return pugTemplate.get();
    }
}
