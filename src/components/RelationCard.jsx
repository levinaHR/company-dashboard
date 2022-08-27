import { ShareOutlined } from '@mui/icons-material';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

const styles = {
  container: {
    padding: '18px',
    // maxWidth: '424px',
  },
  itemText: {
    margin: 0,
  },
};

function RelationItem(props) {
  const { amount, type } = props;

  return (
    <Row align="middle" gutter={8}>
      <Col>
        <ShareOutlined fontSize='large' />
      </Col>
      <Col flex="auto">
        <Space size="1" direction="vertical">
          <Title style={styles.itemText} level={3}>
            {amount}
          </Title>
          <Text type="secondary">{type}</Text>
        </Space>
      </Col>
    </Row>
  );
}

export default function RelationCard() {
  return (
    <Card style={styles.container}>
      <Space size="middle" direction="vertical">
        <Row justify="space-between">
          <Col>
            <Title level={4}>Relasi</Title>
          </Col>
          <Col>
            <Button type="link">Lihat Semua</Button>
          </Col>
        </Row>
        <RelationItem amount="20" type="Memiliki" />
        <RelationItem amount="108" type="Menggunakan" />
        <RelationItem amount="67" type="Meminjam" />
      </Space>
    </Card>
  );
}
