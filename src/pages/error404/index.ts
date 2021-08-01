import ErrorPage from '../../blocks/errorPage';
import { render } from '../../modules/render';
import errorElems from './data';

const error = new ErrorPage(errorElems);
render('.app',error);
