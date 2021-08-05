import React, { memo } from 'react';
import ProtoTypes from 'prop-types';
import { Row, Col} from 'antd';
import { useHistory } from 'react-router-dom';
import { createMarkup } from "../../utils";

function World({values}) {
  const history = useHistory();

  const renderImg = ({ image, description }) =>
    <div>
      <img src={image.url} alt={description} width='100%'  />
    </div>
    

  const renderDescription = (description) =>
    <p dangerouslySetInnerHTML={createMarkup(description)} />

  const openPost = (id) => {
    history.push(`/World/${id}`)
  }
  const renderPost = (post, index) => {
    const { title, image, description, id } = post;
    const isFirst = index === 0
    const spanValue= isFirst ? 24 : 12

    return (
      <Col span={spanValue} key={`World-${index}`}>
        <article onClick={() => openPost(id)}>
          <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
          <p dangerouslySetInnerHTML={createMarkup(description)} />
          {isFirst&& renderImg({ image, description })}
        </article>
      </Col>
    );
  };
  return <Row gutter={[16, 16]}>{values?.map(renderPost)}</Row>;
}

World.defaultProps = {
  values: []
}

World.protoTypes = {
    values: ProtoTypes.array.isRequired
}

export default memo(World);