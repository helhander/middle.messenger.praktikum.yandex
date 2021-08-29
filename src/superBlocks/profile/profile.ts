import Sidebar from '../../blocks/sidebar';
import ProfileInfo from '../../blocks/profileInfo';
import template from './profile.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './profile.scss';
import Block from '../../modules/Block';
import { ComponentProps, TAG_NAMES } from '../../components/component.types';
import { ProfileComp, ProfileProps } from './profile.types';

export default class Profile extends Block<ComponentProps> {
  constructor(profileProps: ProfileProps) {
    const { sidebarComps, profileInfoComps } = profileProps;
    const profileComps: ProfileComp[] = [];

    const sidebar = new Sidebar(sidebarComps, 'sidebar sidebar-profile');
    profileComps.push(sidebar);

    const profileInfo = new ProfileInfo(profileInfoComps);
    profileComps.push(profileInfo);

    super({ tagClasses: 'profile', tagName: TAG_NAMES.DIV }, profileComps);
  }

  render(): string {
    const pugTemplate = new PugTemplate(template, this.props);
    return pugTemplate.get();
  }
}
