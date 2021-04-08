import Form from '../../components/form/index';
const elems = [
    {
        tag: 'input',
        attrs: {
            label: 'Почта',
            name: 'email',
            type: 'email',
            id: 'login-form-email',
            classes: 'login-form-input'
        }
    },
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
            label: 'Имя',
            name: 'name',
            type: 'text',
            id: 'login-form-name',
            classes: 'login-form-input'
        }
    },
    {
        tag: 'input',
        attrs: {
            label: 'Фамилия',
            name: 'lastname',
            type: 'text',
            id: 'login-form-lastname',
            classes: 'login-form-input'
        }
    },
    {
        tag: 'input',
        attrs: {
            label: 'Телефон',
            name: 'tel',
            type: 'tel',
            id: 'login-form-tel',
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
            classes: 'login-form-input'
        }
    },
    {
        tag: 'input',
        attrs: {
            label: 'Пароль (ещё раз)',
            name: 'password2',
            type: 'password',
            id: 'login-form-password2',
            classes: 'login-form-input login-form-input-space',
            divClasses: 'login-form-input-wrapper login-form-input-space'
        }
    },
    {
        tag: 'input',
        attrs: {
            value: 'Зарегистрироваться',
            type: 'submit',
            classes: 'login-form-button login-form-button-space'
        }
    },
    {
        tag: 'link',
        attrs: {
            href: 'index.html',
            label: 'Войти',
            classes: 'login-form-link'
        }
    },
];
const loginForm = new Form('Регистрация', elems).get();
document.body.innerHTML = loginForm;
