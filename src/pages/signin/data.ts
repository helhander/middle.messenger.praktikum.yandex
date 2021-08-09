import { TAG_NAMES } from '../../components/component.types';
import VALIDATION_REG_EXP from '../../modules/validationRegExp';

export default [
  {
    tag: 'input',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'login-form__input-wrapper',
      label: 'Логин',
      name: 'login',
      type: 'text',
      id: 'login-form-login',
      classes: 'login-form__input',
      validationMsg: 'Поле должно быть заполнено',
      validationRegExp: VALIDATION_REG_EXP.NOT_EMPTY100,
    },
  },
  {
    tag: 'input',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'login-form__input-wrapper login-form__input-space',
      label: 'Пароль',
      name: 'password',
      type: 'password',
      id: 'login-form-password',
      classes: 'login-form__input login-form__input-space',
      validationMsg: 'Поле должно быть заполнено',
      validationRegExp: VALIDATION_REG_EXP.NOT_EMPTY100,
    },
  },
  {
    tag: 'input',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'login-form__input-wrapper',
      value: 'Авторизоваться',
      type: 'submit',
      classes: 'login-form__button login-form__button-space',
    },
  },
  {
    tag: 'link',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: '',
      href: 'signup.html',
      label: 'Нет аккаунта?',
      classes: 'login-form__link',
    },
  },
];
