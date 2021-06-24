import { ComponentProps } from "../components/component.types";
import Block from "./Block";

export function render<CP extends ComponentProps, B extends Block<CP>>(query: string, block: B): HTMLElement {
  const root: HTMLElement = document.querySelector(query);
  root.appendChild(block.getContent());
  return root;
}