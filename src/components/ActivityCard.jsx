import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

const styles = {
  container: {
    padding: '18px',
    // maxWidth: '484px',
    height: '100%'
  },
};

function ActivityItem(props) {
  const { detail, date, time } = props;

  return (
    <Space size="1" direction="vertical">
      <Text>{detail}</Text>
      <Text type="secondary">{date + ', ' + time}</Text>
    </Space>
  );
}

export default function ActivityCard() {
  return (
    <Card style={styles.container}>
      <Space size="middle" direction="vertical">
        <Title level={4}>Aktivitas</Title>
        <ActivityItem
          detail="Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa"
          date="Hari ini"
          time="06:00"
        />
        <ActivityItem
          detail="Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet"
          date="Kemarin"
          time="17:32"
        />
        <ActivityItem
          detail="Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi"
          date="Kemarin"
          time="17:32"
        />
      </Space>
    </Card>
  );
}
