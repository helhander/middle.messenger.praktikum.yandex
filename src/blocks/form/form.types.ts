import { Component, ComponentProps } from '../../components/component.types';

export interface FormProps extends ComponentProps {
    name: string;
}

export interface BlockFormProps {
    name?: string,
    comps?: Component[]
  }
