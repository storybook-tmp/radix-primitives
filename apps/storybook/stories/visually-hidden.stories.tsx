import { VisuallyHidden } from 'radix-ui';

export default { title: 'Utilities/VisuallyHidden', component: VisuallyHidden };

export const Basic = () => (
  <button>
    <VisuallyHidden.Root>Save the file</VisuallyHidden.Root>
    <span aria-hidden>💾</span>
  </button>
);
