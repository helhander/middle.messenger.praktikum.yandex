import { Blocks, Component, ComponentProps, Props } from '../components/component.types';
import Input from '../components/input';
import Link from '../components/link';
import Image from '../components/image';
import Block from './Block';
import { InputProps } from '../components/input/input.types'
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
/* import Chat from '../components/chat';
import Button from '../components/button';
import Wrapper from '../blocks/wrapper';
import Image from '../components/image';
import Message from '../components/message'; */

export default function getComponents(elems: Component[]) {
  let components: Blocks[] = [];
  for (let elem of elems) {
    switch (elem.tag) {
      case 'input':
        const input = new Input(elem.props as InputProps);
        components.push(input);
        break;
      case 'link':
        const link = new Link(elem.props as LinkProps);
        components.push(link);
        break;
      case 'button':
        const button = new Button(elem.props as ButtonProps);
        components.push(button);
        break;
      case 'chat':
        const chat = new Chat(elem.props as ChatProps);
        components.push(chat);
        break;
      case 'span':
      case 'div':
      case 'form':
        const wrapper = new Wrapper(elem.props as WrapperProps);
        components.push(wrapper);
        break;
      case 'image':
        const image = new Image(elem.props as ImageProps);
        components.push(image);
        break;
      case 'message':
        const message = new Message(elem.props as MessageProps);
        components.push(message);
        break;
      default:
        break;
    }
  }

  return components;
}