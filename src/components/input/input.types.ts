import VALIDATION_REG_EXP from '../../modules/validationRegExp';
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
  validationRegExp?: VALIDATION_REG_EXP,
  validationField?: string,
  hintClasses?: string,
}
