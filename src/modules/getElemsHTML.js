import Input from '../components/input';
import Link from '../components/link';
import Chat from '../components/chat';
import Button from '../components/button';
import Wrapper from '../blocks/wrapper';
import Image from '../components/image';

export default function getElemsHTML(elems) {
  let elemsHTML = '';
  for (let elem of elems) {
    switch (elem.tag) {
      case 'input':
        const input = new Input(elem.attrs);
        elemsHTML += input.get();
        break;
      case 'link':
        const link = new Link(elem.attrs);
        elemsHTML += link.get();
        break;
      case 'button':
        const button = new Button(elem.attrs);
        elemsHTML += button.get();
        break;
      case 'chat':
        const chat = new Chat(elem.attrs);
        elemsHTML += chat.get();
        break;
      case 'span':
      case 'div':
        const wrapper = new Wrapper(elem.tag, elem.classes, elem.elems, elem.inner);
        elemsHTML += wrapper.get();
        break;
      case 'image':
        const image = new Image(elem.attrs);
        elemsHTML += image.get();
        break;
      default:
        break;
    }
  }
  return elemsHTML;
}