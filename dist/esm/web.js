import { WebPlugin } from '@capacitor/core';
export class CapacitorFlashWeb extends WebPlugin {
    isAvailable() {
        return Promise.resolve({ value: false });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    switchOn(_options) {
        throw new Error('Method not implemented.');
    }
    switchOff() {
        throw new Error('Method not implemented.');
    }
    isSwitchedOn() {
        throw new Error('Method not implemented.');
    }
    toggle() {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=web.js.map