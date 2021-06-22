import { ComponentProps } from "../components/component.type";
import Block from "./Block";
export default function getFragment<CP extends ComponentProps, B extends Block<CP>>(components: B[] = []): DocumentFragment {
  const fragment: DocumentFragment = document.createDocumentFragment();
  components.forEach(c => fragment.appendChild(c.getContent()));
  return fragment;
}
