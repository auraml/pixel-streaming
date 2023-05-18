export default function usePreloader(): {
    readonly isWebrtcConnected: boolean;
    readonly webrtcErrorHeader: string | boolean;
    readonly connectionHeader: string | true;
    connect(): void;
    hide(): void;
};
