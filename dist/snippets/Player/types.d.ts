/// <reference types="react" />
export interface PlayerConfigProps {
    children?: React.ReactElement;
    debugMode: 'off' | 'on' | 'commands' | 'responses';
    showToolbar: boolean;
    psHost: string;
    psConfig: {
        autoPlay: boolean;
        autoConnect: boolean;
        startMuted: boolean;
        hoveringMouse: boolean;
        fakeMouseWithTouches: boolean;
        matchViewportRes: boolean;
    };
    onLoad?: () => void;
}
