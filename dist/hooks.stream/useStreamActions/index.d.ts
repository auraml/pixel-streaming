import { ToasterOptions } from './types';
declare global {
    interface Window {
        [key: string]: any;
    }
}
export default function useStreamActions(): {
    readonly nodeVideo: HTMLVideoElement;
    play(): void;
    reconnect(): void;
    disconnect(): void;
    emitUi(payload: object, options?: ToasterOptions): void;
    emitSys(payload: object, options?: ToasterOptions): void;
    resetResolution(): void;
    switchMuted(): void;
};
