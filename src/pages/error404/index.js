import ErrorPage from '../../blocks/errorPage';
import errorElems from './data'; 

const html = new ErrorPage(errorElems).get();
document.body.innerHTML = html;
