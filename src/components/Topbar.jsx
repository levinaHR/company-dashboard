import { BellOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Col, Row, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

const styles = {
  container: {
    // padding: '24px 0px',
  },
};

export default function Topbar() {
  return (
    <Row style={styles.container}>
      <Col>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Perusahaan</Breadcrumb.Item>
          <Breadcrumb.Item href="">Mitramas Infosys Global</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
      <Col flex="auto">
        <Row gutter={8} align="middle" justify="end">
          <Col>
            <SearchOutlined />
          </Col>
          <Col>
            <BellOutlined />
          </Col>
          <Col offset={1}>
            <Avatar size="small" icon={<UserOutlined />} />
          </Col>
          <Col>
            <Text>John Doe</Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
