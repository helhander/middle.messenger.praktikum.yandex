import Workspace from '../../superBlocks/workspace/index';
import { sidebarElems, chatElems } from './data';

const loginForm = new Workspace(sidebarElems, chatElems).get();
document.body.innerHTML = loginForm;
