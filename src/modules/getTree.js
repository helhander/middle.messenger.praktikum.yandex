import Input from '../components/input/index';
import Link from '../components/link/index';
import Chat from '../components/chat/index';
import Button from '../components/button/index';
import Image from '../components/image/index';
import Wrapper from '../components/wrapper/index';

export function getTree(elems) {
  let html = '';
  for (let elem of elems) {
    html += getElementHTML(elem, html);
  }
}
function getElementHTML(elem, html) {
  if (!elem.elems){
    
  }
    for (let elem of elems) {
      switch (elem.tag) {
        case 'input':
          const input = new Input(elem.attrs);
          formTemplate += input.get();
          break;
        case 'link':
          const link = new Link(elem.attrs);
          formTemplate += link.get();
          break;
        case 'button':
          const button = new Button(elem.attrs);
          formTemplate += button.get();
          break;
        case 'chat':
          const chat = new Chat(elem.attrs);
          formTemplate += chat.get();
          break;
        case 'image':
          const image = new Image(elem.attrs);
          formTemplate += image.get();
          break;
        case 'span':
        case 'div':
          const image = new Image(elem.attrs);
          formTemplate += image.get();
          break;
        default:
          break;
      }
    }
}