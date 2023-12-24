import { registerPlugin } from '@capacitor/core';
const CapacitorFlash = registerPlugin('CapacitorFlash', {
    web: () => import('./web').then((m) => new m.CapacitorFlashWeb()),
});
export * from './definitions';
export { CapacitorFlash };
//# sourceMappingURL=index.js.map