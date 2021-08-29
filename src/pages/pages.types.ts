/* eslint-disable no-unused-vars */
import ErrorPage from '../blocks/errorPage';
import { ErrorPageProps } from '../blocks/errorPage/errorPage.types';
import Form from '../blocks/form';
import { BlockFormProps } from '../blocks/form/form.types';
import Profile from '../superBlocks/profile';
import { ProfileProps } from '../superBlocks/profile/profile.types';
import Workspace from '../superBlocks/workspace';
import { WorkspaceProps } from '../superBlocks/workspace/workspace.types';

export type Page = Workspace | Profile | ErrorPage | Form;
export type PagePropsBase = WorkspaceProps | ProfileProps | ErrorPageProps | BlockFormProps;

export interface PageProps {
  rootQuery: string,
  props: PagePropsBase,
}

export type PageConstructor = new(pageProps: PageProps) => Page;
