
# Pixel Streaming Reactjs plugin for Unreal Engine 5.2

## Installation
Install with npm:
```shell
npm install rsuite pixel-streaming --save
```
Install with yarn:
```shell
yarn add rsuite pixel-streaming
```

## Links:
* [Online Player](https://player.metaeditor.io)
* [CodeSandBox](https://codesandbox.io/s/pixel-streaming-react-xldl33)
* [Nextjs Sample](https://github.com/markolofsen/metaeditor) | [fork me](https://github.com/markolofsen/metaeditor/fork) | [installation](https://github.com/markolofsen/metaeditor/blob/main/INSTALLATION.md)
* [Signalling Server App](https://github.com/markolofsen/metaeditor/releases/tag/signaling-server)
* [Plugin for Unreal Engine](https://github.com/markolofsen/metaplugin-pixel-streaming)
* [Documentation](https://metaeditor.io/docs)
* [Discord Community](https://discordapp.com/invite/eGHKuQ3BHM)


## Usage
```typescript
import * as React from "react";
import "rsuite/dist/rsuite.min.css";
import { Button } from "rsuite";
import { MetaProvider, MetaEditor, Hooks, Context } from 'pixel-streaming'

const PlayerView = () => {
  const refPlayer = React.useRef(null)
  
  // context
  const global = Context.global()
  const stream = Context.stream()

  // hooks
  const actions = Hooks.actions()
  const events = Hooks.events()

  return (
    <MetaEditor
      ref={refPlayer}
      debugMode="on"
      showToolbar={true}
      onLoad={() => {
        console.log('@'.repeat(30))
        console.dir(refPlayer.current)
        console.dir(global) 
        console.dir(stream)
        console.dir(actions)
        console.dir(events)
      }}
      psHost="ws://127.0.0.1:80"
      psConfig={{
        "autoPlay": true,
        "autoConnect": true,
        "startMuted": true,
        "hoveringMouse": true,
        "fakeMouseWithTouches": true,
        "matchViewportRes": true
    }}>
      <Button onClick={() => actions.emitUi({ action: "ui_command" })}>
        Send action
      </Button>
    </MetaEditor>
  );
};

export default function AppHOC() {
  return (
    <MetaProvider>
      <PlayerView />
    </MetaProvider>
  );
}
```


## About Pixel Streaming for Unreal Engine
Pixel streaming is a powerful technology that enables remote rendering and streaming of real-time 3D graphics to any device, anywhere in the world. It has many applications, including online gaming, remote work, and virtual events. However, setting up a pixel streaming environment can be challenging, especially for those who are not familiar with complex server configurations and network setups.
This library provides a simple and easy-to-use solution for streaming real-time 3D content over the internet. It allows users to set up a pixel streaming server with just a few clicks, and then stream the content to any device with a compatible web browser.
The Pixel Streaming Plugin for Unreal Engine can save developers a significant amount of time and effort when it comes to configuring a pixel streaming environment. This is because the library comes with pre-built configurations and settings that work out of the box, meaning developers don't need to spend time tinkering with complex server configurations or network setups.
One of the key benefits of using the Pixel Streaming Plugin is that it eliminates the need for users to install any additional software or plugins on their devices. All they need is a compatible web browser and an internet connection, and they can access the streaming content from anywhere in the world.
<p align="center">
  <img src="https://metaeditor.io/assets/preview.png?v=1" width="100%" title="Pixel Streaming">
</p>

### Attention!
- React `18.1.0`
- Node `16.*`

### Built With
- [React](https://reactjs.org/) — A JavaScript library for building user interfaces
- [MetaEditor](https://metaeditor.io/) — Complete set of tools for professional developing and running the Unreal Engine’s Applications in browsers.
- [Unreal Engine Pixel Streaming](https://docs.unrealengine.com/5.1/en-US/pixel-streaming-in-unreal-engine/) — Library for Unreal Engine.
- [React Suite](https://www.npmjs.com/package/rsuite) — Set of react component libraries for enterprise system products.

## Thank you!
[Github profile](https://github.com/markolofsen)

## License
Pixel Streaming for React.js is licensed under the [MIT License](https://github.com/markolofsen/metaeditor/blob/main/LICENSE.md).