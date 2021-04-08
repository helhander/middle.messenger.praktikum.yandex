import Workspace from '../../components/workspace/index';
const sidebarElems = [
    {
        tag: 'link',
        attrs: {
            href: '#',
            label: 'Профиль >',
            classes: 'sidebar-link'
        }
    },

    {
        tag: 'div',
        classes: 'slider-search-add-div',
        elems: [
            {
                tag: 'input',
                attrs: {
                    name: 'search',
                    type: 'text',
                    divClasses: 'sidebar-input-wrapper',
                    classes: 'sidebar-input',
                    placeholder: 'Поиск'
                }
            },
            {
                tag: 'button',
                attrs: {
                    type: 'image',
                    src: 'images/add.png',
                    alt: 'добавить',
                    imgClasses: 'sidebar-image',
                    classes: 'sidebar-button',
                }
            },

        ]
    },
    {
        tag: 'chat',
        attrs: {
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
        attrs: {
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
        attrs: {
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
        attrs: {
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
        attrs: {
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
        attrs: {
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
        attrs: {
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
        attrs: {
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
        attrs: {
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
        attrs: {
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
        attrs: {
            src: 'images/empty-avatar.png',
            alt: 'Аватар',
            name: 'hellfer',
            msg: 'Так ыв аы а ыа а ы аыа ыа ва ыа ыа ы...',
            date: '15:12',
            unreadNumber: 4,
        }
    },
];

const chatElems = [
    {
        tag: 'span',
        elems: [
            {
                tag: 'image',
                attrs: {
                    name: 'helfer',
                    src: 'images/empty-avatar.png',
                    alt: 'avatar',
                    classes:'chat-header__image',
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
        attrs: {
            type: 'span',
            imgClasses: 'chat-header__svg',
            classes: 'chat-header__button',
        }
    }
];
const loginForm = new Workspace(sidebarElems, chatElems).get();
document.body.innerHTML = loginForm;
