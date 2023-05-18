export interface LicenseData {
    is_exclusion: boolean;
    is_valid: boolean;
}
export default function checkLicenseKey(): Promise<LicenseData>;
