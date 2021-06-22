export interface Component<CP extends ComponentProps> {
  tag: string,
  props: CP
}

export interface ComponentProps {
    tagName: TAG_NAMES,
    tagClasses: string,
    id?: string,
    classes?: string,
}

export enum TAG_NAMES {
  DIV = 'div',
  SPAN = 'span',
}