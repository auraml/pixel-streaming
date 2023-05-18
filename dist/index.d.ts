import ContextProvider from './context';
import './globalTypes';
import type { IApplication } from './globalTypes';
import usePreloader from './hooks.player/usePreloader';
import useStreamActions from './hooks.stream/useStreamActions';
import useStreamEvents from './hooks.stream/useStreamEvents';
import useEventListener from './hooks/useEventListener';
import Player from './snippets/Player';
declare const Context: {
    global: () => import("./context/useGlobalContext/actions").ActionProps;
    stream: () => import("./context/useStreamContext/actions").ActionProps;
};
declare const Hooks: {
    actions: typeof useStreamActions;
    events: typeof useStreamEvents;
    listener: typeof useEventListener;
    preloader: typeof usePreloader;
};
export { ContextProvider as MetaProvider, Player as MetaEditor, Context, Hooks, };
import type { PlayerConfigProps } from './snippets/Player/types';
export type { PlayerConfigProps, IApplication, };
