import Button from "./button";
import { ButtonProps } from "./button/button.types";
import Chat from "./chat";
import { ChatProps } from "./chat/chat.types";
import Input from "./input";
import { InputProps } from "./input/input.types";
import Link from "./link";
import { LinkProps } from "./link/link.types";


export type Blocks = Input | Link | Button | Chat;
export type Props = InputProps | LinkProps | ButtonProps | ChatProps;

export interface Component {
  tag: string,
  props: Props
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
  BUTTON = 'button',
}

