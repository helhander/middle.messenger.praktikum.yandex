/* eslint-disable no-unused-vars */
export enum EVENTS {
  INIT = 'init',
  FLOW_CDM = 'flow=component-did-mount',
  FLOW_CDU = 'flow=component-did-update',
  FLOW_RENDER = 'flow=render',
  FLOW_AEL = 'flow=add-event-listeners'
}

export interface EventInfo {
  eventName: string;
  // eslint-disable-next-line no-undef
  fn: EventListener;
}
