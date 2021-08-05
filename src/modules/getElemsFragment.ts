import {
  Blocks, Component,
} from '../components/component.types';
import Input from '../components/input';
import Link from '../components/link';
import Image from '../components/image';
import { InputProps } from '../components/input/input.types';
import { LinkProps } from '../components/link/link.types';
import Button from '../components/button';
import { ButtonProps } from '../components/button/button.types';
import { ChatProps } from '../components/chat/chat.types';
import Chat from '../components/chat';
import Wrapper from '../blocks/wrapper';
import { ImageProps } from '../components/image/image.types';
import Message from '../components/message';
import { MessageProps } from '../components/message/input.types';
import { WrapperProps } from '../blocks/wrapper/wrapper.types';

export default function getComponents(elems: Component[]) {
  const components: Blocks[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const elem of elems) {
    switch (elem.tag) {
      case 'input':
        components.push(new Input(elem.props as InputProps));
        break;
      case 'link':
        components.push(new Link(elem.props as LinkProps));
        break;
      case 'button':
        components.push(new Button(elem.props as ButtonProps));
        break;
      case 'chat':
        components.push(new Chat(elem.props as ChatProps));
        break;
      case 'span':
      case 'div':
      case 'form':
        components.push(new Wrapper(elem.props as WrapperProps));
        break;
      case 'image':
        components.push(new Image(elem.props as ImageProps));
        break;
      case 'message':
        components.push(new Message(elem.props as MessageProps));
        break;
      default:
        break;
    }
  }

  return components;
}
