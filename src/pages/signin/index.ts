import Form from '../../blocks/form/index';
import Router from '../../modules/Router';
import comps from './data';

const router = new Router('.app');

router
  .use('/signin.html', Form, { props: { name: 'Вход', comps }, rootQuery: '.app' })
  .start();
