import { ComponentProps } from '../component.types';

export interface InputProps extends ComponentProps {
  type: string,
  placeholder: string,
  label?: string,
  name?: string,
  value?: string,
  labelClasses?: string,
  readonly?: boolean,
  validationMsg?: string,
  validationRegExp?: string,
  validationField?: string,
  hintClasses?: string,
}
