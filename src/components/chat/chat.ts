import './chat.scss';
import template from './chat.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import Block from '../../modules/Block';
import { ChatProps } from './chat.types';

export default class Chat extends Block<ChatProps> {
  render(): string {
    const pugTemplate = new PugTemplate(template, this.props);
    return pugTemplate.get();
  }
}
