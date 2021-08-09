import ChatDialog from '../../blocks/chatDialog';
import ChatFooter from '../../blocks/chatFooter';
import ChatHeader from '../../blocks/chatHeader';
import { ComponentProps } from '../../components/component.types';

export interface ChatspaceProps extends ComponentProps {
  isEmpty: boolean,
}

export type ChatspaceComp = ChatHeader | ChatDialog | ChatFooter;
