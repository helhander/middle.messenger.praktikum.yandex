import { Component, TAG_NAMES } from "../../components/component.types";

export const sidebarElems: Component[] = [
  {
    tag: 'button',
    props: {
      tagName: TAG_NAMES.BUTTON,
      tagClasses: 'sidebar__button sidebar-profile__button',
      type: 'image',
      src: 'images/arrow-left.png',
      alt: 'добавить',
      imgClasses: 'sidebar__image',
    }
  },
];

export const profileInfoElems: Component[] = [
  {
    tag: 'form',
    props: {
      tagClasses: 'profile-info',
      tagName: TAG_NAMES.DIV,
      comps: [
        {
          tag: 'image',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__avatar profile-info__avatar_separated',
            name: 'helfer',
            src: 'images/avatar.png',
            alt: 'avatar',
            classes: 'profile-info__image',
          }
        },
        {
          tag: 'div',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__user-name',
            tagInnerHTML: 'Никита'
          }
        },
        {
          tag: 'input',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__input-wrapper profile-info__input-wrapper_last',
            label: 'Описание',
            name: 'chat-description',
            type: 'text',
            id: 'chat-description',
            labelClasses: 'profile-info__input-label',
            classes: 'profile-info__input',
            value: 'Чат для общения'
          }
        },
        {
          tag: 'input',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__button-wrapper',
            value: 'Сохранить',
            type: 'submit',
            classes: 'profile-info__button'
          }
        }]
    }

  }
];