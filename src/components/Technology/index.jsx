import React, { memo } from 'react';
import ProtoTypes from 'prop-types';
import { Row, Col} from 'antd';
import { useHistory } from 'react-router-dom';
import { createMarkup } from "../../utils";

function Technology({values}) {
  const history = useHistory();

  const renderImg = ({ image, description }) =>
    <div>
      <img src={image.url} alt={description} width='100%'  />
    </div>
    

  const renderDescription = (description) =>
    <p dangerouslySetInnerHTML={createMarkup(description)} />

  const openPost = (id) => {
    history.push(`/Technology/${id}`)
  }
  const renderPost = (post, index) => {
    const { title, image, description, id } = post;
    return (
      <Col span={12} md={6} key={`technology-${index}`}>
        <article onClick={() => openPost(id)}>
          <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
          <p dangerouslySetInnerHTML={createMarkup(description)} />
          {image.url && renderImg({ image, description })}
        </article>
      </Col>
    );
  };
  return <Row gutter={[16, 16]}>{values?.map(renderPost)}</Row>;
}

Technology.defaultProps = {
  values: []
}

Technology.protoTypes = {
    values: ProtoTypes.array.isRequired
}

export default memo(Technology);