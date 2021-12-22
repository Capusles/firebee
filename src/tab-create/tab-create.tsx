import React from 'react';
import { CreateModal } from '@vortex-ui/env-puzzle';
import { Tabs, TabsProps } from 'antd';

import { CreateModalProps } from '@vortex-ui/env-puzzle/lib/create-modal/create-modal';
import './styles/index';
const { TabPane } = Tabs;

export interface TabCreateProps extends CreateModalProps {
  tabProps?: TabsProps
}
const TabCreate: React.FC<TabCreateProps> = (props) => {
  const { children = [], tabProps = {}, ...arg } = props;
  // 将tabPane name作为Key值, 从这个元素到下个name替换间的所有元素作为Value
  const childrenObj: { [propName:string] : Array<React.ReactElement> } = {};

  // 存储 - 当前正在渲染的tabPane name值 -> 方便向childrenObj 里 push元素 -
  let tabPaneName: React.Key = '';

  // 存储tabPane的名字作为Key值, 对应的key值作为value
  const allTabPaneObj: { [propName:string] : React.Key } = {};

  // TODO 什么原因导致key前面多了.$
  if (tabProps?.activeKey) {
    tabProps.activeKey = '.$' + tabProps?.activeKey;
  }

  if (tabProps?.defaultActiveKey) {
    tabProps.defaultActiveKey = '.$' + tabProps?.defaultActiveKey;
  }

  const renderChildren = () => {
    Array.isArray(children) &&(
      children.forEach((val: React.ReactElement) => {
        // tabPane name
        const tabName: React.Key | undefined | null = Array.isArray(val)
          ? undefined
          : val.props['data-tabname'];
        // tabPane Key
        const tabKey : React.Key | undefined | null = Array.isArray(val)
          ? undefined
          : val.props['data-tabkey'];

        if (tabName && tabKey) {
          tabPaneName = tabName;

          childrenObj[tabName] = [];

          // TODO 待改进
          // 将name和key进行结合，方便下面渲染的时候取值
          allTabPaneObj[tabName] = tabKey;
        } else {
          // 把之前存储的name和元素进行组合渲染
          childrenObj[tabPaneName].push(val);
        }
      }));
    return Object.keys(childrenObj).map((val) => (
      <TabPane tab={val} key={allTabPaneObj[val]} forceRender={true}>
        {childrenObj[val]}
      </TabPane>
    ));
  };
  return (
    <CreateModal
      {...arg}
    >
      <Tabs
        size={'middle'}
        type="card"
        {...tabProps}
        onChange={ (activeKey) => {
          const key = activeKey.slice(2);
          tabProps?.onChange &&tabProps?.onChange(key);
        }}
        style={{ width: '100%' }}
        className={'ljfl-tabs-wrap'}
      >
        {renderChildren()}
      </Tabs>
    </CreateModal>
  );
};

export default TabCreate;
