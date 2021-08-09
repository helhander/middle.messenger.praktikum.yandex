import { ComponentProps } from '../component.types';

export interface ChatProps extends ComponentProps {
  src: string,
  alt: string,
  name: string,
  isUserMsg: boolean,
  msg: string,
  date: string,
  unreadNumber: number,
  active:boolean,
}
