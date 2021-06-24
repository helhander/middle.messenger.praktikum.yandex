import { Component, ComponentProps } from "../component.types";

export interface InputProps extends ComponentProps {
  type: string,
  label?: string,
  name?: string,
  value?: string,
}
