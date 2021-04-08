import Form from '../../components/form/index';
const elems = [
    {
        tag: 'input',
        attrs: {
            label: 'Логин',
            name: 'login',
            type: 'text',
            id: 'login-form-login',
            classes: 'login-form-input'
        }
    },
    {
        tag: 'input',
        attrs: {
            label: 'Пароль',
            name: 'password',
            type: 'password',
            id: 'login-form-password',
            classes: 'login-form-input',
            divClasses: 'login-form-input-wrapper login-form-input-space'
        }
    },
    {
        tag: 'input',
        attrs: {
            value: 'Авторизоваться',
            type: 'submit',
            classes: 'login-form-button'
        }
    },
    {
        tag: 'link',
        attrs: {
            href: 'signin.html',
            label: 'Нет аккаунта?',
            classes: 'login-form-link'
        }
    },
];
const loginForm = new Form('Вход', elems).get();
document.body.innerHTML = loginForm;
