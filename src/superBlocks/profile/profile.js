import Sidebar from '../../blocks/sidebar';
import ProfileInfo from '../../blocks/profileInfo';
import template from './profile.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './profile.scss';

export default class Profile extends PugTemplate {
    constructor(sidebarElems, profileInfoElems) {
        let blockTemplate = template;
        
        const sidebar = new Sidebar(sidebarElems, 'sidebar sidebar-profile');
        blockTemplate += sidebar.get();

        const profileInfo = new ProfileInfo(profileInfoElems);
        blockTemplate += profileInfo.get();

        super(blockTemplate);
    }
}
