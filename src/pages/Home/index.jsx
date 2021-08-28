import { Col, Row } from "antd";
import React, { memo, useEffect, useState } from "react";
import api from "../../api";
import Economy from "../../components/Economy";
import Technology from "../../components/Technology";
import World from "../../components/World";

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNews = (articles) => {
    setLoading(false);
    setNews({
      world: articles[0]?.value.value,
      technology: articles[1]?.value.value,
      economy: articles[2]?.value.value,
    });
  };

  useEffect(() => {
    setLoading(true);
    Promise.allSettled([
      api.getNews("world"),
      api.getNews("technology"),
      api.getNews("economy"),
    ]).then(handleNews);
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}>
          <h2>World</h2>
          <World values={news?.world} />
        </Col>
        <Col span={24} md={8}>
          <h2>Economy</h2>
          <Economy values={news?.economy} />
        </Col>
      </Row>
      <hr />
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2>Technology</h2>
          <Technology values={news?.technology} />
        </Col>
      </Row>
    </div>
  );
}

export default memo(Home);
