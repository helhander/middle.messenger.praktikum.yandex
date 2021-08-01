import { render } from '../../modules/render';
import Profile from '../../superBlocks/profile';
import { sidebarComps, profileInfoComps } from './data'

const profile = new Profile(sidebarComps, profileInfoComps);
render('.app', profile);
