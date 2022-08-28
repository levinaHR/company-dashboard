import { BellOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Col, Layout, Row, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;
const { Header } = Layout;

const styles = {
  header: {
    padding: '0px 18px',
  },
};

export default function Topbar() {
  return (
    <Header style={styles.header}>
      <Row align="middle">
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
    </Header>
  );
}
