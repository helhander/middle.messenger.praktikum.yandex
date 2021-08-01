import { render } from '../../modules/render';
import Profile from '../../superBlocks/profile';
import { sidebarElems, profileInfoElems } from './data'

const profile = new Profile(sidebarElems, profileInfoElems);
render('.app',profile);
