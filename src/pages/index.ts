/* eslint-disable max-len */
import Form from '../blocks/form';
import Router from '../modules/Router';
import signinComps from './signin/data';
import signupComps from './signup/data';
import { ppSidebarComps, ppProfileInfoComps } from './profilePassword/data';
import { pdSidebarComps, pdProfileInfoComps } from './profileData/data';
import Profile from '../superBlocks/profile';

const router = new Router('.app');

router
  .use('', Form, { props: { name: 'Вход', comps: signinComps }, rootQuery: '.app' })
  .use('#!/signin', Form, { props: { name: 'Вход', comps: signinComps }, rootQuery: '.app' })
  .use('#!/signup', Form, { props: { name: 'Регистрация', comps: signupComps }, rootQuery: '.app' })
  .use('/profilePassword', Profile, { props: { sidebarComps: ppSidebarComps, profileInfoComps: ppProfileInfoComps }, rootQuery: '.app' })
  .use('/profileData', Profile, { props: { sidebarComps: pdSidebarComps, profileInfoComps: pdProfileInfoComps }, rootQuery: '.app' })
  .start();

document.body.addEventListener('click', (event) => {
  const elem = event.target;
  if (!(elem instanceof HTMLAnchorElement)) return;

  router.go(elem.href.replace(/http:\/\/.*?\//, ''));
  event.preventDefault();
});
