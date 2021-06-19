import ChatHeader from '../../blocks/chatHeader';
import ChatDialog from '../../blocks/chatDialog';
import ChatFooter from '../../blocks/chatFooter';
import template from './chatSpace.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './chatSpace.scss';

export default class ChatSpace extends PugTemplate {
    constructor(headerElems, dialogElems = [], footerElems) {
        let blockTemplate = template;
        const isEmpty = dialogElems.length === 0;
        if (!isEmpty) {
            const chatHeader = new ChatHeader(headerElems);
            blockTemplate += chatHeader.get();

            const chatDialog = new ChatDialog(dialogElems);
            blockTemplate += chatDialog.get();

            const chatFooter = new ChatFooter(footerElems);
            blockTemplate += chatFooter.get();
        }

        super(blockTemplate, { isEmpty });
    }
}
