import { Component, ComponentProps } from "../component.types";

export interface MessageProps extends ComponentProps {
  inner: string,
  imgSrc: boolean,
  imgClasses: string,
  imgAlt: string,
  status: string,
  timeClasses: string
}
