import Workspace from '../../components/workspace/index';
import elems from './data' 

const loginForm = new Workspace(elems).get();
document.body.innerHTML = loginForm;
