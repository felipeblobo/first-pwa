import { Col, Row } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import api from '../../api';

function Home() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNews = (articles) => {
    console.log("ar", articles)
  }

  useEffect(() => {
    setLoading(true)
    Promise.allSettled([
      api.getNews('world'), 
      api.getNews('tech'),
      api.getNews('economy')
    ])
    .then(handleNews)
  },[])

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}/>
        <h2>World</h2>     
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