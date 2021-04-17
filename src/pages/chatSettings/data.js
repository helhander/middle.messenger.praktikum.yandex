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
        tag: 'div',
        attrs: {
          tag: 'div',
          classes: 'profile-info__user-name',
          inner: 'Никита'
        }
      },
      {
        tag: 'input',
        attrs: {
          label: 'Описание',
          name: 'chat-description',
          type: 'text',
          id: 'chat-description',
          divClasses: 'profile-info__input-wrapper profile-info__input-wrapper_last',
          labelClasses: 'profile-info__input-label',
          classes: 'profile-info__input',
          value: 'Чат для общения'
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