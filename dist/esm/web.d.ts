import { WebPlugin } from '@capacitor/core';
import type { CapacitorFlashPlugin } from './definitions';
export declare class CapacitorFlashWeb extends WebPlugin implements CapacitorFlashPlugin {
    isAvailable(): Promise<{
        value: boolean;
    }>;
    switchOn(_options: {
        intensity?: number;
    }): Promise<void>;
    switchOff(): Promise<void>;
    isSwitchedOn(): Promise<{
        value: boolean;
    }>;
    toggle(): Promise<{
        value: boolean;
    }>;
}
