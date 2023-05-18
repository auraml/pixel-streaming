import { WebrtcStatus, StreamStatus } from './types';
import { PlayerConfigProps } from '../../snippets/Player/types';
export interface StateProps {
    playerConfig: PlayerConfigProps | null;
    webrtcStatus: WebrtcStatus;
    webrtcMessage: string | boolean;
    streamStatus: StreamStatus;
    streamMessage: string | boolean;
    freezeFrame: boolean;
}
export declare const initialState: StateProps;
