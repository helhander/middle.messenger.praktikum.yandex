import { TAG_NAMES } from "../../components/component.types";

export const sidebarElems = [
  {
    tag: 'link',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: '',
      href: 'profile.html',
      label: 'Профиль >',
      classes: 'sidebar__link'
    }
  },
  {
    tag: 'div',
    classes: 'sidebar__search',
    comps: [
      {
        tag: 'input',
        props: {
          tagName: TAG_NAMES.DIV,
          tagClasses: 'sidebar__input-wrapper',
          name: 'search',
          type: 'text',
          classes: 'sidebar__input',
          placeholder: 'Поиск'
        }
      },
      {
        tag: 'button',
        props: {
          type: 'image',
          src: 'images/add.png',
          alt: 'добавить',
          imgClasses: 'sidebar__image',
          classes: 'sidebar__button',
        }
      },

    ]
  },
  {
    tag: 'div',
    classes: 'chats-sidebar',
    elems: [
      {
        tag: 'chat',
        props: {
          src: 'images/empty-avatar.png',
          alt: 'Аватар',
          name: 'hellfer',
          msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
          date: '15:12',
          unreadNumber: 4,
        }
      },
      {
        tag: 'chat',
        props: {
          divClasses: 'chat__wrapper_active',
          src: 'images/empty-avatar.png',
          alt: 'Аватар',
          name: 'Max',
          msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
          date: '15:12',
          unreadNumber: 4,
          active: true
        }
      },
      {
        tag: 'chat',
        props: {
          src: 'images/empty-avatar.png',
          alt: 'Аватар',
          name: 'hellfer',
          msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
          date: '15:12',
          unreadNumber: 4,
        }
      },
      {
        tag: 'chat',
        props: {
          src: 'images/empty-avatar.png',
          alt: 'Аватар',
          name: 'hellfer',
          msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
          date: '15:12',
          unreadNumber: 4,
        }
      },
      {
        tag: 'chat',
        props: {
          src: 'images/empty-avatar.png',
          alt: 'Аватар',
          name: 'hellfer',
          msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
          date: '15:12',
          unreadNumber: 4,
          isUserMsg: true,
        }
      },
      {
        tag: 'chat',
        props: {
          src: 'images/empty-avatar.png',
          alt: 'Аватар',
          name: 'hellfer',
          msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
          date: '15:12',
          unreadNumber: 4,
          isUserMsg: true,
        }
      },
      {
        tag: 'chat',
        props: {
          src: 'images/empty-avatar.png',
          alt: 'Аватар',
          name: 'hellfer',
          msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
          date: '15:12',
          unreadNumber: 4,
          isUserMsg: true,
        }
      },
      {
        tag: 'chat',
        props: {
          src: 'images/empty-avatar.png',
          alt: 'Аватар',
          name: 'hellfer',
          msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
          date: '15:12',
          unreadNumber: 4,
          isUserMsg: true,
        }
      },
      {
        tag: 'chat',
        props: {
          src: 'images/empty-avatar.png',
          alt: 'Аватар',
          name: 'hellfer',
          msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
          date: '15:12',
          unreadNumber: 4,
        }
      },
      {
        tag: 'chat',
        props: {
          src: 'images/empty-avatar.png',
          alt: 'Аватар',
          name: 'hellfer',
          msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
          date: '15:12',
          unreadNumber: 4,
        }
      },
      {
        tag: 'chat',
        props: {
          src: 'images/empty-avatar.png',
          alt: 'Аватар',
          name: 'hellfer',
          msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
          date: '15:12',
          unreadNumber: 4,
        }
      },
    ]
  }

];

export const chatElems = {
  headerElems: [
    {
      tag: 'span',
      elems: [
        {
          tag: 'image',
          props: {
            name: 'helfer',
            src: 'images/empty-avatar.png',
            alt: 'avatar',
            classes: 'chat-header__image',
            divClasses: 'chat-header__avatar',
          }
        }
      ]
    },
    {
      tag: 'span',
      classes: 'chat-header__name',
      inner: 'Max'
    },
    {
      tag: 'button',
      props: {
        type: 'span',
        imgClasses: 'chat-header__svg',
        classes: 'chat-header__button',
      }
    }],
  dialogElems: [
    {
      tag: 'div',
      classes: 'message-list',
      elems: [
        {
          tag: 'div',
          props: {
            tag: 'div',
            classes: 'message-list__day-separator',
            inner: '4 апреля'
          }

        },
        {
          tag: 'message',
          props: {
            tag: 'div',
            classes: 'message-list__message message-list__message_incoming',
            inner: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
            time: '11:57',
            timeClasses: 'message-time message-time__incoming'
          }

        },
        {
          tag: 'message',
          props: {
            tag: 'div',
            classes: 'message-list__image message-list__image_incoming',
            imgSrc: 'images/tiger.jpeg',
            imgAlt: 'picture',
            imgClasses: 'message__image',
            time: '11:59',
            timeClasses: 'message-time message-time__incoming message-time__image'
          }

        },
        {
          tag: 'message',
          props: {
            tag: 'div',
            classes: 'message-list__image message-list__image_outcoming',
            imgSrc: 'images/tiger.jpeg',
            imgAlt: 'picture',
            imgClasses: 'message__image',
            time: '11:59',
            timeClasses: 'message-time message-time__incoming message-time__image'
          }

        },
        {
          tag: 'message',
          props: {
            tag: 'div',
            classes: 'message-list__message message-list__message_outcoming',
            inner: `I'm fine thank you!`,
            time: '18:34',
            timeClasses: 'message-time message-time__outcoming',
            status: 'read'
          }

        },
        /*             {
                        tag: 'button',
                        props: {
                            type: 'image',
                            src: 'images/add.png',
                            alt: 'добавить',
                            imgClasses: 'sidebar__image',
                            classes: 'sidebar-button',
                        }
                    }, */

      ]
    }
  ],
  footerElems: [
    {
      tag: 'button',
      props: {
        type: 'span',
        imgClasses: 'chat-footer__attach',
        classes: 'chat-footer__attach-button',
      }
    },
    {
      tag: 'input',
      props: {
        name: 'message-field',
        type: 'text',
        divClasses: 'message-footer__input-field-wrapper',
        classes: 'message-footer__input-field',
        placeholder: 'Сообщение'
      }
    },
    {
      tag: 'button',
      props: {
        type: 'span',
        imgClasses: 'chat-footer__send',
        classes: 'chat-footer__send-button',
      }
    }],
};