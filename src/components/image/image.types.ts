import { Component, ComponentProps } from "../component.types";

export interface ImageProps extends ComponentProps {
  src: string,
  alt: string
}
