/**
 * Usage
 *
 *
import CustomDrawer from 'src/components/Drawer';

interface Props {}
const DrawerMenu = React.forwardRef((props: Props, ref: any) => {

  const refDrawer = React.useRef<any>(null);

  React.useImperativeHandle(ref, () => ({
    open: () => {
      refDrawer?.current.open()
    },
    close: () => {
      refDrawer?.current.close()
    }
  }))

  return (
    <CustomDrawer
      contentPadding={0}
      placement='left'
      title="Drawer"
      ref={refDrawer}>
      <div style={{
        height: '100%'
      }}>
        Content
      </div>
    </CustomDrawer>
  );
})
 */
import * as React from 'react';
import { DrawerProps } from 'rsuite';
interface Props extends DrawerProps {
    title: string;
    children: React.ReactNode;
    contentPadding?: number;
    onClose?: () => void;
}
declare const CustomDrawer: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default CustomDrawer;
