/* eslint-disable no-unused-vars */
import Wrapper from '../blocks/wrapper';
import { WrapperProps } from '../blocks/wrapper/wrapper.types';
import Button from './button';
import { ButtonProps } from './button/button.types';
import Chat from './chat';
import { ChatProps } from './chat/chat.types';
import Input from './input';
import { InputProps } from './input/input.types';
import Link from './link';
import { LinkProps } from './link/link.types';

export type Blocks = Input | Link | Button | Chat | Wrapper;
export type Props = InputProps | LinkProps | ButtonProps | ChatProps | WrapperProps;

export interface Component {
  tag: string,
  props: Props,
}

// eslint-disable-next-line no-shadow
export enum TAG_NAMES {
  DIV = 'div',
  SPAN = 'span',
  BUTTON = 'button',
  FORM = 'form',
}

export interface ComponentProps {
  tagName: TAG_NAMES,
  tagClasses: string,
  id?: string,
  classes?: string,
  tagInnerHTML?: string,
}
