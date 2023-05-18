export interface CommandItem {
    type: 'ui' | 'sys';
    uuid: string;
    date: string;
    payload: object;
}
export interface ResponsItem {
    date: string;
    payload: object;
}
export declare type WebrtcStatus = null | 'connection' | 'connected' | 'autoConnect' | 'connecting' | 'failed' | 'disconnected' | 'disconnectedRestart';
export declare type StreamStatus = null | 'play' | 'initialized' | 'loading' | 'error' | 'rejected';
