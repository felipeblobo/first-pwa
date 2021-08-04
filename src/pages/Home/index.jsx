import { Col, Row } from 'antd';
import React, { memo } from 'react'

function Home() {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}/>
        <h2>World</h2>
      </Row>
      <hr />
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}/>
        <h2>Economy</h2>
      </Row>
      <hr />
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}/>
        <h2>Technology</h2>
      </Row>
    </div>
  )
}

export default memo(Home);