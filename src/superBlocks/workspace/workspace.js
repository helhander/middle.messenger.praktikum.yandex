import Sidebar from '../../blocks/sidebar';
import ChatSpace from '../chatSpace';
import Link from '../../components/link';
import template from './workspace.tmpl';
import PugTemplate from '../../pugTemplate';
import './workspace.scss';
import chatDialog from '../../blocks/chatDialog';
export default class Workspace extends PugTemplate {
    constructor(sidebarElems, chatData) {
        let formTemplate = template;
        const sidebar = new Sidebar(sidebarElems);
        formTemplate += sidebar.get();
        const chatSpace = new ChatSpace(chatData.headerElems, chatData.dialogElems, chatData.footerElems);
        formTemplate += chatSpace.get();
        super(formTemplate, {});
    }
}