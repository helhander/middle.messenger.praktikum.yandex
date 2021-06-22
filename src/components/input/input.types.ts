import { Component, ComponentProps } from "../component.type";

export interface InputType<CP extends ComponentProps> extends Component<CP> {
  label: string,
  name: string,
  type: string,
  value: string,
}
