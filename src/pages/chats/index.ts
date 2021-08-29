import render from '../../modules/render';
import Workspace from '../../superBlocks/workspace/index';
import { sidebarComps, chatComps } from './data';

const chats = new Workspace({
  sidebarComps, headerComps: chatComps.headerComps, dialogComps: chatComps.dialogComps, footerComps: chatComps.footerComps,
});
render('.app', chats);
