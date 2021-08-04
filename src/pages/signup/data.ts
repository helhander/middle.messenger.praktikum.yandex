import { TAG_NAMES } from "../../components/component.types";

export default [
  {
    tag: 'input',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'login-form__input-wrapper',
      label: 'Почта',
      name: 'email',
      type: 'email',
      id: 'login-form-email',
      classes: 'login-form__input',
      validationMsg: 'Неправильный формат email',
      validationRegExp: '^\\S{1,100}@\\S{1,100}$',
    }
  },
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
      validationRegExp: '^\\S{1,100}$',
    }
  },
  {
    tag: 'input',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'login-form__input-wrapper',
      label: 'Имя',
      name: 'name',
      type: 'text',
      id: 'login-form-name',
      classes: 'login-form__input',
      validationMsg: 'Поле должно быть заполнено',
      validationRegExp: '^\\S{1,100}$',
    }
  },
  {
    tag: 'input',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'login-form__input-wrapper',
      label: 'Фамилия',
      name: 'lastname',
      type: 'text',
      id: 'login-form-lastname',
      classes: 'login-form__input',
      validationMsg: 'Поле должно быть заполнено',
      validationRegExp: '^\\S{1,100}$',
    }
  },
  {
    tag: 'input',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'login-form__input-wrapper',
      label: 'Телефон',
      name: 'tel',
      type: 'tel',
      id: 'login-form-tel',
      classes: 'login-form__input',
      validationMsg: 'Номер должен быть корректным. Например +79099673030',
      validationRegExp: '^\\+?(\\d| |-|\\(|\\)){5,15}$',
    }
  },
  {
    tag: 'input',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'login-form__input-wrapper',
      label: 'Пароль',
      name: 'password',
      type: 'password',
      id: 'login-form-password',
      classes: 'login-form__input',
      validationMsg: 'Поле должно быть заполнено',
      validationRegExp: '^\\S{1,100}$',
    }
  },
  {
    tag: 'input',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'login-form__input-wrapper login-form__input-space',
      label: 'Пароль (ещё раз)',
      name: 'password2',
      type: 'password',
      id: 'login-form-password2',
      classes: 'login-form__input login-form__input-space',
      validationMsg: 'Пароли не совпадают',
      validationField: 'password',
    }
  },
  {
    tag: 'input',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'login-form__input-wrapper',
      value: 'Зарегистрироваться',
      type: 'submit',
      classes: 'login-form__button login-form__button-space'
    }
  },
  {
    tag: 'link',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: '',
      href: 'login.html',
      label: 'Войти',
      classes: 'login-form__link'
    }
  },
];