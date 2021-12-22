import React from 'react';
import { TabsProps } from 'antd';
import { CreateModalProps } from '@vortex-ui/env-puzzle/lib/create-modal/create-modal';
import './styles/index';
export interface TabCreateProps extends CreateModalProps {
    tabProps?: TabsProps;
}
declare const TabCreate: React.FC<TabCreateProps>;
export default TabCreate;
