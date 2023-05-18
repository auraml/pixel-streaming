/// <reference types="react" />
import { ActionProps } from './actions';
export declare const useGlobalContext: () => ActionProps;
interface Props {
    children: JSX.Element;
}
declare const Provider: (props: Props) => JSX.Element;
export default Provider;
