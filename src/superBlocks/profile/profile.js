import Sidebar from '../../blocks/sidebar';
import ProfileInfo from '../../blocks/profileInfo';
import template from './profile.tmpl';
import PugTemplate from '../../pugTemplate';
import './profile.scss';

export default class Profile extends PugTemplate {
    constructor(sidebarElems,profileInfoElems) {
        let viewTemplate = template;
        const sidebar = new Sidebar(sidebarElems, 'sidebar sidebar-profile');
        viewTemplate += sidebar.get();
        const profileInfo = new ProfileInfo(profileInfoElems);
        viewTemplate += profileInfo.get();
        super(viewTemplate);
    }
}