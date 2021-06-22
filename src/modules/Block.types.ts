import { ComponentProps } from "../components/component.type";

export enum EVENTS {
  INIT = 'init',
  FLOW_CDM = 'flow=component-did-mount',
  FLOW_CDU = 'flow=component-did-update',
  FLOW_RENDER = 'flow=render'
};