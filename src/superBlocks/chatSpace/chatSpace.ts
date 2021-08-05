import ChatHeader from '../../blocks/chatHeader';
import ChatDialog from '../../blocks/chatDialog';
import ChatFooter from '../../blocks/chatFooter';
import template from './chatSpace.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './chatSpace.scss';
import Block from '../../modules/Block';
import { ChatspaceComp, ChatspaceProps } from './chatSpace.types';
import { Component, TAG_NAMES } from '../../components/component.types';

export default class ChatSpace extends Block<ChatspaceProps> {
  constructor(headerComps: Component[], dialogComps: Component[] = [], footerComps: Component[]) {
    const chatspaceComps: ChatspaceComp[] = [];
    const isEmpty = dialogComps.length === 0;
    if (!isEmpty) {
      const chatHeader = new ChatHeader(headerComps);
      chatspaceComps.push(chatHeader);

      const chatDialog = new ChatDialog(dialogComps);
      chatspaceComps.push(chatDialog);

      const chatFooter = new ChatFooter(footerComps);
      chatspaceComps.push(chatFooter);
    }

    super({ isEmpty, tagClasses: 'chat-space', tagName: TAG_NAMES.DIV }, chatspaceComps);
  }

  render(): string {
    const pugTemplate = new PugTemplate(template, this.props);
    return pugTemplate.get();
  }
}
