import type { Application as IApplication } from 'metaeditor4-ui';
interface IMetaeditor {
    emitUIInteraction: (descriptor: object) => void;
    emitCommand: (descriptor: object) => void;
    emitResponse: {
        addResponseEventListener: (name: string, listener: (response: any) => void) => void;
        removeResponseEventListener: (name: string) => void;
    };
}
/***
 * Global declaration
 */
declare global {
    interface Window {
        player: IApplication;
        metaeditor: IMetaeditor;
    }
}
export type { IApplication };
