import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

const styles = {
  container: {
    padding: '18px',
    // maxWidth: '424px',
  },
  imgContainer: {
    position: 'relative',
    width: '100%',
  },
  bankPic: {
    minWidth: '125px',
    minHeight: '98px',
    borderRadius: '12px',
  },
  bankText: {
    position: 'absolute',
    bottom: '1%',
    right: '8%',
    color: 'white',
  },
  editBtn: {
    color: '#35763B',
  },
  deleteBtn: {
    color: '#F5222D',
  },
};

function BankPicture(props) {
  const { type, color1, color2 } = props;

  return (
    <div style={styles.imgContainer}>
      <div
        style={{
          ...styles.bankPic,
          background: `linear-gradient(135deg, ${color1}, ${color2})`,
        }}
      />
      <Title level={4} style={styles.bankText} strong italic>
        {type}
      </Title>
    </div>
  );
}

function BankItem(props) {
  const { bank, account, owner, currency, type, color1, color2 } = props;

  return (
    <Row gutter={16}>
      <Col>
        <BankPicture type={type} color1={color1} color2={color2} />
      </Col>
      <Col flex="auto">
        <Space size="large" direction="vertical">
          <Row gutter={8}>
            <Col flex="auto">
              <Text strong>{bank}</Text>
            </Col>
            <Col>
              <EditOutlined style={styles.editBtn} onClick={() => {}} />
            </Col>
            <Col>
              <DeleteOutlined style={styles.deleteBtn} onClick={() => {}} />
            </Col>
          </Row>
          <Space size="1" direction="vertical">
            <Text type="secondary">{account + ' - ' + owner}</Text>
            <Text type="secondary">{currency}</Text>
          </Space>
        </Space>
      </Col>
    </Row>
  );
}

export default function BankCard() {
  return (
    <Card style={styles.container}>
      <Space size="middle" direction="vertical">
        <Row justify="space-between">
          <Col>
            <Title level={4}>Akun Bank</Title>
          </Col>
          <Col>
            <Button type="primary" icon={<PlusOutlined />}>
              Tambah Akun Bank
            </Button>
          </Col>
        </Row>
        <BankItem
          bank="Bank KB Bukopin"
          account="**** 0876"
          owner="Yusron Taufiq"
          currency="IDR"
          type="VISA"
          color1="#F9DF17"
          color2="#7FA20B"
        />
        <BankItem
          bank="Citibank, NA"
          account="**** 5525"
          owner="Si Tampan"
          currency="USD"
          type="VISA"
          color1="#2597B3"
          color2="#5AC5DE"
        />
      </Space>
    </Card>
  );
}
