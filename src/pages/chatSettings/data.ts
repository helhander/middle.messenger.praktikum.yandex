import { Component, TAG_NAMES } from '../../components/component.types';
import VALIDATION_REG_EXP from '../../modules/validationRegExp';

export const sidebarComps: Component[] = [
  {
    tag: 'button',
    props: {
      tagName: TAG_NAMES.BUTTON,
      tagClasses: 'sidebar__button sidebar-profile__button',
      type: 'image',
      src: 'images/arrow-left.png',
      alt: 'добавить',
      imgClasses: 'sidebar__image',
    },
  },
];

export const profileInfoComps: Component[] = [
  {
    tag: 'form',
    props: {
      tagClasses: 'profile-info',
      tagName: TAG_NAMES.FORM,
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
          },
        },
        {
          tag: 'div',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__user-name',
            tagInnerHTML: 'Никита',
          },
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
            value: 'Чат для общения',
            validationMsg: 'Поле должно быть заполнено',
            validationRegExp: VALIDATION_REG_EXP.NOT_EMPTY100,
            hintClasses: 'input__hint input__hint_right',
          },
        },
        {
          tag: 'input',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__button-wrapper',
            value: 'Сохранить',
            type: 'submit',
            classes: 'profile-info__button',
          },
        }],
    },

  },
];
