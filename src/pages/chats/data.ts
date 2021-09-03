import { Component, TAG_NAMES } from '../../components/component.types';

export const sidebarComps: Component[] = [
  {
    tag: 'link',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: '',
      href: 'profile',
      label: 'Профиль >',
      classes: 'sidebar__link',
    },
  },
  {
    tag: 'div',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'sidebar__search',
      comps: [
        {
          tag: 'input',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'sidebar__input-wrapper',
            name: 'search',
            type: 'text',
            classes: 'sidebar__input',
            placeholder: 'Поиск',
          },
        },
        {
          tag: 'button',
          props: {
            tagName: TAG_NAMES.BUTTON,
            tagClasses: 'sidebar__button',
            type: 'image',
            src: 'images/add.png',
            alt: 'добавить',
            imgClasses: 'sidebar__image',
          },
        },

      ],
    },
  },
  {
    tag: 'div',
    props: {
      tagName: TAG_NAMES.DIV,
      tagClasses: 'chats-sidebar',
      comps: [
        {
          tag: 'chat',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'chat__wrapper',
            src: 'images/empty-avatar.png',
            alt: 'Аватар',
            name: 'hellfer',
            msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
            date: '15:12',
            unreadNumber: 4,
          },
        },
        {
          tag: 'chat',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'chat__wrapper_active',
            src: 'images/empty-avatar.png',
            alt: 'Аватар',
            name: 'Max',
            msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
            date: '15:12',
            unreadNumber: 4,
            active: true,
          },
        },
        {
          tag: 'chat',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'chat__wrapper',
            src: 'images/empty-avatar.png',
            alt: 'Аватар',
            name: 'hellfer',
            msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
            date: '15:12',
            unreadNumber: 4,
          },
        },
        {
          tag: 'chat',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'chat__wrapper',
            src: 'images/empty-avatar.png',
            alt: 'Аватар',
            name: 'hellfer',
            msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
            date: '15:12',
            unreadNumber: 4,
          },
        },
        {
          tag: 'chat',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'chat__wrapper',
            src: 'images/empty-avatar.png',
            alt: 'Аватар',
            name: 'hellfer',
            msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
            date: '15:12',
            unreadNumber: 4,
            isUserMsg: true,
          },
        },
        {
          tag: 'chat',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'chat__wrapper',
            src: 'images/empty-avatar.png',
            alt: 'Аватар',
            name: 'hellfer',
            msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
            date: '15:12',
            unreadNumber: 4,
            isUserMsg: true,
          },
        },
        {
          tag: 'chat',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'chat__wrapper',
            src: 'images/empty-avatar.png',
            alt: 'Аватар',
            name: 'hellfer',
            msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
            date: '15:12',
            unreadNumber: 4,
            isUserMsg: true,
          },
        },
        {
          tag: 'chat',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'chat__wrapper',
            src: 'images/empty-avatar.png',
            alt: 'Аватар',
            name: 'hellfer',
            msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
            date: '15:12',
            unreadNumber: 4,
            isUserMsg: true,
          },
        },
        {
          tag: 'chat',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'chat__wrapper',
            src: 'images/empty-avatar.png',
            alt: 'Аватар',
            name: 'hellfer',
            msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
            date: '15:12',
            unreadNumber: 4,
          },
        },
        {
          tag: 'chat',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'chat__wrapper',
            src: 'images/empty-avatar.png',
            alt: 'Аватар',
            name: 'hellfer',
            msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
            date: '15:12',
            unreadNumber: 4,
          },
        },
        {
          tag: 'chat',
          props: {
            tagName: TAG_NAMES.DIV,
            tagClasses: 'chat__wrapper',
            src: 'images/empty-avatar.png',
            alt: 'Аватар',
            name: 'hellfer',
            msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
            date: '15:12',
            unreadNumber: 4,
          },
        },
      ],
    },
  },
];

export const chatComps = {
  headerComps: [
    {
      tag: 'span',
      props: {
        tagName: TAG_NAMES.SPAN,
        tagClasses: '',
        comps: [
          {
            tag: 'image',
            props: {
              tagName: TAG_NAMES.DIV,
              tagClasses: 'chat-header__avatar',
              name: 'helfer',
              src: 'images/empty-avatar.png',
              alt: 'avatar',
              classes: 'chat-header__image',
            },
          },
        ],
      },
    },
    {
      tag: 'span',
      props: {
        tagName: TAG_NAMES.SPAN,
        tagClasses: 'chat-header__name',
        tagInnerHTML: 'Max',
      },
    },
    {
      tag: 'button',
      props: {
        tagName: TAG_NAMES.BUTTON,
        tagClasses: 'chat-header__button',
        type: 'span',
        imgClasses: 'chat-header__svg',
      },
    }],
  dialogComps: [
    {
      tag: 'div',
      props: {
        tagName: TAG_NAMES.DIV,
        tagClasses: 'message-list',
        comps: [
          {
            tag: 'div',
            props: {
              tagName: TAG_NAMES.DIV,
              tagClasses: 'message-list__day-separator',
              inner: '4 апреля',
            },
          },
          {
            tag: 'message',
            props: {
              tagName: TAG_NAMES.DIV,
              tagClasses: 'message-list__message message-list__message_incoming',
              tag: 'div',
              // eslint-disable-next-line max-len
              inner: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
              time: '11:57',
              timeClasses: 'message-time message-time__incoming',
            },

          },
          {
            tag: 'message',
            props: {
              tagName: TAG_NAMES.DIV,
              tagClasses: 'message-list__image message-list__image_incoming',
              tag: 'div',
              imgSrc: 'images/tiger.jpeg',
              imgAlt: 'picture',
              imgClasses: 'message__image',
              time: '11:59',
              timeClasses: 'message-time message-time__incoming message-time__image',
            },

          },
          {
            tag: 'message',
            props: {
              tagName: TAG_NAMES.DIV,
              tagClasses: 'message-list__image message-list__image_outcoming',
              tag: 'div',
              imgSrc: 'images/tiger.jpeg',
              imgAlt: 'picture',
              imgClasses: 'message__image',
              time: '11:59',
              timeClasses: 'message-time message-time__incoming message-time__image',
            },

          },
          {
            tag: 'message',
            props: {
              tagName: TAG_NAMES.DIV,
              tagClasses: 'message-list__message message-list__message_outcoming',
              tag: 'div',
              inner: 'I\'m fine thank you!',
              time: '18:34',
              timeClasses: 'message-time message-time__outcoming',
              status: 'read',
            },

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

        ],
      },

    },
  ],
  footerComps: [
    {
      tag: 'button',
      props: {
        tagName: TAG_NAMES.BUTTON,
        tagClasses: 'chat-footer__attach-button',
        type: 'span',
        imgClasses: 'chat-footer__attach',
      },
    },
    {
      tag: 'input',
      props: {
        tagName: TAG_NAMES.DIV,
        tagClasses: 'message-footer__input-field-wrapper',
        name: 'message-field',
        type: 'text',
        classes: 'message-footer__input-field',
        placeholder: 'Сообщение',
      },
    },
    {
      tag: 'button',
      props: {
        tagName: TAG_NAMES.BUTTON,
        tagClasses: 'chat-footer__send-button',
        type: 'span',
        imgClasses: 'chat-footer__send',
      },
    }],
};
