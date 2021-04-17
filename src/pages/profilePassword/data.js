export const sidebarElems = [
  {
    tag: 'button',
    attrs: {
      type: 'image',
      src: 'images/arrow-left.png',
      alt: 'добавить',
      imgClasses: 'sidebar__image',
      classes: 'sidebar__button sidebar-profile__button',
    }
  },
];

export const profileInfoElems = [
  {
    tag: 'form',
    classes: 'profile-info',
    elems: [
      {
        tag: 'image',
        attrs: {
          name: 'helfer',
          src: 'images/avatar.png',
          alt: 'avatar',
          classes: 'profile-info__image',
          divClasses: 'profile-info__avatar profile-info__avatar_separated',
        }
      },
      {
        tag: 'input',
        attrs: {
          label: 'Старый пароль',
          name: 'password',
          type: 'password',
          id: 'profile-password',
          divClasses: 'profile-info__input-wrapper',
          labelClasses: 'profile-info__input-label',
          classes: 'profile-info__input',
          value: ''
        }
      },
      {
        tag: 'input',
        attrs: {
          label: 'Новый пароль',
          name: 'password-new',
          type: 'password',
          id: 'profile-password-new',
          divClasses: 'profile-info__input-wrapper',
          labelClasses: 'profile-info__input-label',
          classes: 'profile-info__input',
          value: ''
        }
      },
      {
        tag: 'input',
        attrs: {
          label: 'Повторите новый пароль',
          name: 'password-new-repeat',
          type: 'password',
          id: 'profile-password-new-repeat',
          divClasses: 'profile-info__input-wrapper profile-info__input-wrapper_last',
          labelClasses: 'profile-info__input-label',
          classes: 'profile-info__input',
          value: ''
        }
      },
      {
        tag: 'input',
        attrs: {
          value: 'Сохранить',
          type: 'submit',
          divClasses: 'profile-info__button-wrapper',
          classes: 'profile-info__button'
        }
      }]
  }
];