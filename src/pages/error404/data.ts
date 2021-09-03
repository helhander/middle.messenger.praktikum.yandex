import { TAG_NAMES } from '../../components/component.types';

export default [
  {
    tag: 'div',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'error__code',
      tagInnerHTML: '404',
    },
  },
  {
    tag: 'div',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'error__text',
      tagInnerHTML: 'Не туда попали',
    },
  },
  {
    tag: 'link',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: '',
      href: 'chats',
      label: 'Назад к чатам',
      classes: 'error__link',
    },
  },
];
