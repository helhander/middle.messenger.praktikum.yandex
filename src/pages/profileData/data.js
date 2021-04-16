export const sidebarElems = [
  {
    tag: 'button',
    attrs: {
      type: 'image',
      src: 'images/arrow-left.png',
      alt: 'добавить',
      imgClasses: 'sidebar-image',
      classes: 'sidebar__button sidebar-profile__button',
    }
  },
];
export const profileInfoElems = [
  {
    tag: 'div',
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
          label: 'Почта',
          name: 'email',
          type: 'email',
          id: 'profile-email',
          divClasses: 'profile-info__input-wrapper',
          labelClasses: 'profile-info__input-label',
          classes: 'profile-info__input',
          value: 'felix@yandex.ru'
        }
      },
      {
        tag: 'input',
        attrs: {
          label: 'Логин',
          name: 'login',
          type: 'text',
          id: 'profile-login',
          divClasses: 'profile-info__input-wrapper',
          labelClasses: 'profile-info__input-label',
          classes: 'profile-info__input',
          value: 'Felix'
        }
      },
      {
        tag: 'input',
        attrs: {
          label: 'Имя',
          name: 'firstname',
          type: 'text',
          id: 'profile-firstname',
          divClasses: 'profile-info__input-wrapper',
          labelClasses: 'profile-info__input-label',
          classes: 'profile-info__input',
          value: 'Феликс'
        }
      },
      {
        tag: 'input',
        attrs: {
          label: 'Фамилия',
          name: 'lastname',
          type: 'text',
          id: 'profile-lastname',
          divClasses: 'profile-info__input-wrapper',
          labelClasses: 'profile-info__input-label',
          classes: 'profile-info__input',
          value: 'Учтивый'
        }
      },
      {
        tag: 'input',
        attrs: {
          label: 'Имя в чате',
          name: 'alias',
          type: 'text',
          id: 'profile-alias',
          divClasses: 'profile-info__input-wrapper',
          labelClasses: 'profile-info__input-label',
          classes: 'profile-info__input',
          value: 'Felix'
        }
      },
      {
        tag: 'input',
        attrs: {
          label: 'Телефон',
          name: 'tel',
          type: 'tel',
          id: 'profile-tel',
          divClasses: 'profile-info__input-wrapper profile-info__input-wrapper_last',
          labelClasses: 'profile-info__input-label',
          classes: 'profile-info__input',
          value: '+7(901)123-32-23'
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