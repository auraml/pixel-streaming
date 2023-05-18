/// <reference types="react" />
import { ActionProps } from './actions';
export declare const useStreamContext: () => ActionProps;
interface Props {
    children: JSX.Element;
}
declare const Provider: (props: Props) => JSX.Element;
export default Provider;
