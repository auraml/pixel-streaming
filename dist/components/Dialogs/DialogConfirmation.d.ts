/// <reference types="react" />
interface Props {
    children: JSX.Element;
    onConfirm: () => void;
}
declare const DialogConfirmation: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<unknown>>;
export default DialogConfirmation;
