import ChatHeader from '../chatHeader';
import ChatDialog from '../chatDialog';
import ChatFooter from '../chatFooter';
import template from './chatSpace.tmpl';
import PugTemplate from '../../pugTemplate';
import './chatSpace.scss';

export default class ChatSpace extends PugTemplate {
    constructor(headerElems, dialogElems = [],footerElems) {
        let formTemplate = template;
        const isEmpty = dialogElems.length === 0;
        if (!isEmpty) {
            const chatHeader = new ChatHeader(headerElems);
            formTemplate += chatHeader.get();
           
            const chatDialog = new ChatDialog(dialogElems);
            formTemplate += chatDialog.get();

            const chatFooter = new ChatFooter(footerElems);
            formTemplate += chatFooter.get();
        }

        super(formTemplate, { isEmpty });
    }
}