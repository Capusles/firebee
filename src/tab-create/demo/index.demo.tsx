import React, { ReactElement, useState } from 'react'
import { TabCreate } from 'firebee';
import { Button, Col, Input, Row } from 'antd'


function Tab(): ReactElement {
  const [showCreate, setShowCreate] = useState(false);
  const [active, setActive] = useState<string>('1')
  return (
    <>
      <Button onClick={()=>setShowCreate(true)}>新增</Button>
      <TabCreate
        visible={showCreate}
        title={"TabCreate"}
        onCancel={()=>{
          setShowCreate(false)
        }}
        tabProps={{
          onChange: (key) => {

            setActive(key);
          },
          activeKey: active,
        }}
      >
        <div data-tabname="表白" data-tabkey='1'/>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Input
                data-label="年纪"
                data-name="marker"
                data-required
                data-span={24}
                data-label-col={{ span: 3 }}
                data-wrapper-col={{ span: 18 }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={8}>
              <Input data-label="年纪" data-name="marker3" data-required />
            </Col>
            <Col span={8}>
              <Input data-label="年纪" data-name="marker4" data-required />
            </Col>
          </Row>
        </Col>

        <div data-tabname="firebee" data-tabkey='2'/>
        <Input
          data-label="年纪1"
          data-name="c"
          data-required
          data-span={24}
          data-label-col={{ span: 3 }}
          data-wrapper-col={{ span: 18 }}
        />

        <div data-tabname="Fight" data-tabkey='fire'/>
        <div>
          我不知道啊,摆烂了
        </div>
      </TabCreate>
    </>
  )
}

export default Tab
