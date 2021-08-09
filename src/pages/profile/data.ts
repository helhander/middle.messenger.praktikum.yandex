import { Component, TAG_NAMES } from '../../components/component.types';

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
    },
  },
];

export const profileInfoElems: Component[] = [
  {
    tag: 'div',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'profile-info',
      comps: [
        {
          tag: 'image',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__avatar',
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
            tagClasses: 'profile-info__input-wrapper',
            label: 'Почта',
            name: 'email',
            type: 'email',
            id: 'profile-email',
            labelClasses: 'profile-info__input-label',
            classes: 'profile-info__input',
            readonly: true,
            value: 'felix@yandex.ru',
          },
        },
        {
          tag: 'input',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__input-wrapper',
            label: 'Логин',
            name: 'login',
            type: 'text',
            id: 'profile-login',
            labelClasses: 'profile-info__input-label',
            classes: 'profile-info__input',
            readonly: true,
            value: 'Felix',
          },
        },
        {
          tag: 'input',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__input-wrapper',
            label: 'Имя',
            name: 'firstname',
            type: 'text',
            id: 'profile-firstname',
            labelClasses: 'profile-info__input-label',
            classes: 'profile-info__input',
            readonly: true,
            value: 'Феликс',
          },
        },
        {
          tag: 'input',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__input-wrapper',
            label: 'Фамилия',
            name: 'lastname',
            type: 'text',
            id: 'profile-lastname',
            labelClasses: 'profile-info__input-label',
            classes: 'profile-info__input',
            readonly: true,
            value: 'Учтивый',
          },
        },
        {
          tag: 'input',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__input-wrapper',
            label: 'Имя в чате',
            name: 'alias',
            type: 'text',
            id: 'profile-alias',
            labelClasses: 'profile-info__input-label',
            classes: 'profile-info__input',
            readonly: true,
            value: 'Felix',
          },
        },
        {
          tag: 'input',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'profile-info__input-wrapper profile-info__input-wrapper_last',
            label: 'Телефон',
            name: 'tel',
            type: 'tel',
            id: 'profile-tel',
            labelClasses: 'profile-info__input-label',
            classes: 'profile-info__input',
            readonly: true,
            value: '+7(901)123-32-23',
          },
        },
        {
          tag: 'link',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: '',
            href: 'profileData.html',
            label: 'Изменить данные',
            classes: 'profile-info__link profile-info__link_blue',
          },
        },
        {
          tag: 'link',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: '',
            href: 'profilePassword.html',
            label: 'Изменить пароль',
            classes: 'profile-info__link profile-info__link_blue',
          },
        },
        {
          tag: 'link',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: '',
            href: 'signin.html',
            label: 'Выйти',
            classes: 'profile-info__link profile-info__link_red',
          },
        }],
    },

  },
];
