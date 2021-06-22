export default function getFragment(components = []) {
  const fragment = document.createDocumentFragment();
  components.forEach(c => fragment.appendChild(c.getContent()));
  return fragment;
}
