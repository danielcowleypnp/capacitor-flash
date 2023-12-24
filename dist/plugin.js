var capacitorCapacitorFlash = (function (exports, core) {
    'use strict';

    const CapacitorFlash = core.registerPlugin('CapacitorFlash', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.CapacitorFlashWeb()),
    });

    class CapacitorFlashWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorFlashWeb: CapacitorFlashWeb
    });

    exports.CapacitorFlash = CapacitorFlash;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
