import { Component, TAG_NAMES } from '../../components/component.types';

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
          tag: 'input',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__input-wrapper',
            label: 'Старый пароль',
            name: 'password',
            type: 'password',
            id: 'profile-password',
            labelClasses: 'profile-info__input-label',
            classes: 'profile-info__input',
            value: '',
            validationMsg: 'Поле должно быть заполнено',
            validationRegExp: '^\\S{1,100}$',
            hintClasses: 'input__hint input__hint_right',
          },
        },
        {
          tag: 'input',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__input-wrapper',
            label: 'Новый пароль',
            name: 'password-new',
            type: 'password',
            id: 'profile-password-new',
            labelClasses: 'profile-info__input-label',
            classes: 'profile-info__input',
            value: '',
            validationMsg: 'Поле должно быть заполнено',
            validationRegExp: '^\\S{1,100}$',
            hintClasses: 'input__hint input__hint_right',
          },
        },
        {
          tag: 'input',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__input-wrapper profile-info__input-wrapper_last',
            label: 'Повторите новый пароль',
            name: 'password-new-repeat',
            type: 'password',
            id: 'profile-password-new-repeat',
            labelClasses: 'profile-info__input-label',
            classes: 'profile-info__input',
            value: '',
            validationMsg: 'Пароли не совпадают',
            validationField: 'password-new',
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
