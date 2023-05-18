import { LicenseData } from '../../configs/utils/license';
export interface StateProps {
    packageVersion: {
        latest: null | string;
        current: null | string;
        needUpdate: boolean;
    };
    showPreloader: boolean;
    licenseData: LicenseData | null;
}
export declare const initialState: StateProps;
