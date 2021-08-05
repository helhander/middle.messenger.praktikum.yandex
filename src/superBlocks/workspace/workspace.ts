import Sidebar from '../../blocks/sidebar';
import ChatSpace from '../chatSpace';
import template from './workspace.tmpl';
import { Component, ComponentProps, TAG_NAMES } from '../../components/component.types';
import PugTemplate from '../../modules/pugTemplate';
import './workspace.scss';
import Block from '../../modules/Block';

export default class Workspace extends Block<ComponentProps> {
  constructor(sidebarComps: Component[], headerComps: Component[], dialogComps: Component[], footerComps: Component[]) {
    const workspaceComps = [];
    const sidebar = new Sidebar(sidebarComps);
    workspaceComps.push(sidebar);

    const chatSpace = new ChatSpace(headerComps, dialogComps, footerComps);
    workspaceComps.push(chatSpace);

    super({ tagName: TAG_NAMES.DIV, tagClasses: 'workspace-layout' }, workspaceComps);
  }

  render(): string {
    const pugTemplate = new PugTemplate(template, this.props);
    return pugTemplate.get();
  }
}
