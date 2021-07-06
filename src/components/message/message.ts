import './message.scss';
import template from './message.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import Block from '../../modules/Block';
import { MessageProps } from './input.types';

export default class Message extends Block<MessageProps> {
    constructor(props: MessageProps) {
        super(props);
    }

    render(): string {
        const pugTemplate = new PugTemplate(template, this.props);
        return pugTemplate.get();
    }
}
