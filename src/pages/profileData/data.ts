import { Component, TAG_NAMES } from '../../components/component.types';
import VALIDATION_REG_EXP from '../../modules/validationRegExp';

export const pdSidebarComps: Component[] = [
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

export const pdProfileInfoComps: Component[] = [
  {
    tag: 'form',
    props: {
      tagName: TAG_NAMES.FORM,
      tagClasses: 'profile-info',
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
            label: 'Почта',
            name: 'email',
            type: 'email',
            id: 'profile-email',
            labelClasses: 'profile-info__input-label',
            classes: 'profile-info__input',
            value: 'felix@yandex.ru',
            validationMsg: 'Неправильный формат email',
            validationRegExp: VALIDATION_REG_EXP.EMAIL,
            hintClasses: 'input__hint input__hint_right',
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
            value: 'Felix',
            validationMsg: 'Поле должно быть заполнено',
            validationRegExp: VALIDATION_REG_EXP.NOT_EMPTY100,
            hintClasses: 'input__hint input__hint_right',
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
            value: 'Феликс',
            validationMsg: 'Поле должно быть заполнено',
            validationRegExp: VALIDATION_REG_EXP.NOT_EMPTY100,
            hintClasses: 'input__hint input__hint_right',
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
            value: 'Учтивый',
            validationMsg: 'Поле должно быть заполнено',
            validationRegExp: VALIDATION_REG_EXP.NOT_EMPTY100,
            hintClasses: 'input__hint input__hint_right',
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
            value: 'Felix',
            validationMsg: 'Поле должно быть заполнено',
            validationRegExp: VALIDATION_REG_EXP.NOT_EMPTY100,
            hintClasses: 'input__hint input__hint_right',
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
            value: '+7(901)123-32-23',
            validationMsg: 'Номер должен быть корректным. Например +79099673030',
            validationRegExp: VALIDATION_REG_EXP.TEL,
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
