import { TAG_NAMES } from '../../components/component.types';

export default [
  {
    tag: 'div',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'error__code',
      tagInnerHTML: '500',
    },
  },
  {
    tag: 'div',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'error__text',
      tagInnerHTML: 'Мы уже фиксим',
    },
  },
  {
    tag: 'link',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: '',
      href: 'chats.html',
      label: 'Назад к чатам',
      classes: 'error__link',
    },
  },
];
