export default [
  {
    tag: 'input',
    attrs: {
      label: 'Почта',
      name: 'email',
      type: 'email',
      id: 'login-form-email',
      classes: 'login-form__input'
    }
  },
  {
    tag: 'input',
    attrs: {
      label: 'Логин',
      name: 'login',
      type: 'text',
      id: 'login-form-login',
      classes: 'login-form__input'
    }
  },
  {
    tag: 'input',
    attrs: {
      label: 'Имя',
      name: 'name',
      type: 'text',
      id: 'login-form-name',
      classes: 'login-form__input'
    }
  },
  {
    tag: 'input',
    attrs: {
      label: 'Фамилия',
      name: 'lastname',
      type: 'text',
      id: 'login-form-lastname',
      classes: 'login-form__input'
    }
  },
  {
    tag: 'input',
    attrs: {
      label: 'Телефон',
      name: 'tel',
      type: 'tel',
      id: 'login-form-tel',
      classes: 'login-form__input'
    }
  },
  {
    tag: 'input',
    attrs: {
      label: 'Пароль',
      name: 'password',
      type: 'password',
      id: 'login-form-password',
      classes: 'login-form__input'
    }
  },
  {
    tag: 'input',
    attrs: {
      label: 'Пароль (ещё раз)',
      name: 'password2',
      type: 'password',
      id: 'login-form-password2',
      classes: 'login-form__input login-form__input-space',
      divClasses: 'login-form__input-wrapper login-form__input-space'
    }
  },
  {
    tag: 'input',
    attrs: {
      value: 'Зарегистрироваться',
      type: 'submit',
      classes: 'login-form__button login-form__button-space'
    }
  },
  {
    tag: 'link',
    attrs: {
      href: 'login.html',
      label: 'Войти',
      classes: 'login-form__link'
    }
  },
];