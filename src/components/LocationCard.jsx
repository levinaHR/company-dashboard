import {
  HomeWorkOutlined,
  BuildOutlined,
  WarehouseOutlined,
} from '@mui/icons-material';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

const style = {
  container: {
    padding: '18px',
    maxWidth: '1000px',
  },
  flex: {
    display: 'flex',
  },
  firstLevel: {
    padding: '18px',
    color: 'white',
    backgroundColor: '#42934A',
  },
  secondLevel: {
    padding: '18px',
    color: 'white',
    backgroundColor: '#50B058',
  },
  thirdLevel: {
    padding: '18px',
    color: 'white',
    backgroundColor: '#6DBD74',
  },
  itemText: {
    margin: '0px',
    color: 'white',
  },
};

function LocationItem(props) {
  const { icon, amount, place, sty } = props;

  return (
    <Card style={sty}>
      <Row justify="space-between" align='middle'>
        <Col>{icon}</Col>
        <Col>
          <Space style={style.flex} size="1" direction="vertical" align="end">
            <Title style={style.itemText} level={3}>
              {amount}
            </Title>
            <Text style={style.itemText}>{place}</Text>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

export default function LocationCard() {
  return (
    <Card style={style.container}>
      <Space style={style.flex} size="middle" direction="vertical">
        <Row justify="space-between">
          <Col>
            <Title level={4}>Lokasi</Title>
          </Col>
          <Col>
            <Button type="link">Lihat Semua</Button>
          </Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Col xs={24} sm={8}>
            <LocationItem
              sty={style.firstLevel}
              icon={<HomeWorkOutlined fontSize="large" />}
              amount="20"
              place="Induk"
            />
          </Col>
          <Col xs={24} sm={8}>
            <LocationItem
              sty={style.secondLevel}
              icon={<BuildOutlined fontSize="large" />}
              amount="3"
              place="Sub Lokasi Level 1"
            />
          </Col>
          <Col xs={24} sm={8}>
            <LocationItem
              sty={style.thirdLevel}
              icon={<WarehouseOutlined fontSize="large" />}
              amount="1"
              place="Sub Lokasi Level 2"
            />
          </Col>
        </Row>
      </Space>
    </Card>
  );
}
