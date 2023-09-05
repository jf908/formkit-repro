import { defineFormKitConfig } from '@formkit/vue';
import { text } from './src/inputs/text';

export default defineFormKitConfig({
  inputs: { testText: text },
});
