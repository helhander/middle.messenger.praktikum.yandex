import Sidebar from '../sidebar/index';
import ChatSpace from '../chatSpace/index';
import Link from '../link/index';
import template from './workspace.tmpl';
import PugTemplate from '../../pugTemplate';
import './workspace.scss';
export default class Workspace extends PugTemplate {
    constructor(sidebarElems, chatData) {
        let formTemplate = template;
        const sidebar = new Sidebar(sidebarElems);
        formTemplate += sidebar.get();
        console.log(chatData);
        const chatSpace = new ChatSpace(chatData);
        formTemplate += chatSpace.get();      
/*         for (let elem of elems) {
            switch (elem.tag) {
                case 'input':
                    const input = new Input(elem.attrs);
                    formTemplate += input.get();
                    break;
                case 'link':
                    const link = new Link(elem.attrs);
                    formTemplate += link.get();
                    break;
                default:
                    break;
            }
        } */
        super(formTemplate, {});
    }
}