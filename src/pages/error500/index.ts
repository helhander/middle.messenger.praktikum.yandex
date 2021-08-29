import ErrorPage from '../../blocks/errorPage';
import render from '../../modules/render';
import errorComps from './data';

const error = new ErrorPage({ errorComps });
render('.app', error);
