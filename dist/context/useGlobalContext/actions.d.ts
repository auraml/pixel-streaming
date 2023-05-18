import { StateProps } from './initial';
declare const actions: () => {
    readonly state: StateProps;
    dispatch(payload: unknown): void;
    checkVersion(): Promise<void>;
    checkApiKey(): Promise<void>;
    readonly isLicenseValid: boolean;
    readonly isLicenseActivated: boolean;
    hidePreloader(): void;
};
export interface ActionProps {
    state: StateProps;
    checkVersion: () => void;
    checkApiKey: () => void;
    isLicenseValid: boolean;
    isLicenseActivated: boolean;
    hidePreloader: () => void;
}
export default actions;
