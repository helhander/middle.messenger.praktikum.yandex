import Profile from '../../superBlocks/profile';
import { sidebarElems, profileInfoElems } from './data'

const html = new Profile(sidebarElems, profileInfoElems).get();
document.body.innerHTML = html;
