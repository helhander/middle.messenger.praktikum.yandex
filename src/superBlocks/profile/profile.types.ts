import ProfileInfo from '../../blocks/profileInfo';
import Sidebar from '../../blocks/sidebar';
import { Component } from '../../components/component.types';

export type ProfileComp = Sidebar | ProfileInfo;

export interface ProfileProps {
  sidebarComps?: Component[],
  profileInfoComps?: Component[]
}
