import Sidebar from '../../blocks/sidebar';
import ChatSpace from '../chatSpace';
import Link from '../link';
import template from './workspace.tmpl';
import PugTemplate from '../../pugTemplate';
import './workspace.scss';
import chatDialog from '../chatDialog';
export default class Workspace extends PugTemplate {
    constructor(sidebarElems, chatData) {
        let formTemplate = template;
        const sidebar = new Sidebar(sidebarElems);
        formTemplate += sidebar.get();
        const chatSpace = new ChatSpace(chatData.headerElems, chatData.dialogElems, chatData.footerElems);
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