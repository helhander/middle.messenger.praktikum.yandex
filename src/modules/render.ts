import { ComponentProps } from '../components/component.types';
import Block from './Block';

export default function render<CP extends ComponentProps, B extends Block<CP>>(query: string, block: B): void {
  const root: HTMLElement|null = document.querySelector(query);
  if (!root) return;

  root.appendChild(block.getContent());
}
