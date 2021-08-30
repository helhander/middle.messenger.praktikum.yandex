import { Component } from '../../components/component.types';

export interface WorkspaceProps {
  sidebarComps?: Component[],
  headerComps?: Component[],
  dialogComps?: Component[],
  footerComps?: Component[]
}
