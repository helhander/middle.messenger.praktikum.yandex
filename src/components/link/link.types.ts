import { Component, ComponentProps } from "../component.types";

export interface LinkProps extends ComponentProps {
  label: string,
  href: string,
}
