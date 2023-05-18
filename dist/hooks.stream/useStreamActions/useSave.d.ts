import { ToasterOptions } from './types';
export default function useSave(): {
    add(type: 'ui' | 'sys', payload: object, options?: ToasterOptions): void;
};
