import { render } from '../../modules/render';
import Workspace from '../../superBlocks/workspace/index';
import { sidebarElems, chatElems } from './data';

const chats = new Workspace(sidebarElems, chatElems.headerElems, chatElems.dialogElems, chatElems.footerElems);
render('.app',chats);