import {
  EditOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Card,
  Col,
  Image,
  Row,
  Space,
  Switch,
  Typography,
} from 'antd';
import Banner from '../images/banner.jpg';
import MigLogo from '../images/mig-logo.png';
import React, { useState } from 'react';

const { Title, Text } = Typography;

const style = {
  card: {
    maxWidth: '300px',
  },
  container: {
    padding: '50px 18px 18px',
  },
  imgContainer: {
    position: 'relative',
    width: '100%',
  },
  banner: {
    width: '100%',
    borderTopRightRadius: '12px',
    borderTopLeftRadius: '12px',
  },
  profpic: {
    position: 'absolute',
    maxWidth: '60%',
    maxHeight: '60%',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: '1px solid gray',
    bottom: '-28%',
    left: '34%',
  },
  primary: {
    color: '#35763B',
  },
  btnLink: {
    padding: 0,
  },
};

function ProfileInfo(props) {
  const { title, body } = props;

  return (
    <Space size="1" direction="vertical">
      <Text type="secondary">{title}</Text>
      {body}
    </Space>
  );
}

export default function ProfileCard() {
  const [isActive, setIsActive] = useState(true);

  return (
    <Card style={style.card}>
      <div style={style.imgContainer}>
        <img style={style.banner} src={Banner} alt="banner" />
        <img style={style.profpic} src={MigLogo} alt="profpic" />
      </div>

      <div style={style.container}>
        <Space size="1" direction="vertical" align="center">
          <Title level={4}>Mitramas Infosys Global</Title>
          <Text type="secondary">Layanan IT</Text>
          <br />
          <Button style={style.btnLink} type="link" icon={<EditOutlined />}>
            Sunting profil
          </Button>
        </Space>
        <br />

        <Space size="small" direction="vertical">
          <ProfileInfo
            title="Status Perusahaan"
            body={
              <Row justify="space-between">
                <Col>
                  {isActive ? (
                    <Text style={style.primary} strong>
                      Aktif
                    </Text>
                  ) : (
                    <Text type="secondary" strong>
                      Nonaktif
                    </Text>
                  )}
                </Col>
                <Col>
                  <Switch
                    checked={isActive}
                    onChange={() => {
                      setIsActive(!isActive);
                    }}
                  />
                </Col>
              </Row>
            }
          />
          <ProfileInfo title="Singkatan" body={<Text>MIG</Text>} />
          <ProfileInfo
            title="Alamat Perusahaan"
            body={<Text>Jl. Tebet Raya No.42, Jakarta Selatan</Text>}
          />
          <ProfileInfo
            title="Penanggung Jawab (PIC)"
            body={<Text>John Doe</Text>}
          />
          <ProfileInfo title="Tanggal PKP" body={<Text>03 Maret 2021</Text>} />
          <ProfileInfo
            title="E-Mail"
            body={
              <Button style={style.btnLink} type="link" icon={<MailOutlined />}>
                <Text style={style.primary} underline>
                  mig@mitrasolusi.group
                </Text>
              </Button>
            }
          />
          <ProfileInfo
            title="No. Telp"
            body={
              <Button
                style={style.btnLink}
                type="link"
                icon={<PhoneOutlined />}
              >
                021-5678-1234
              </Button>
            }
          />
          <ProfileInfo
            title="Situs Web"
            body={
              <Button
                style={style.btnLink}
                type="link"
                icon={<GlobalOutlined />}
              >
                <Text style={style.primary} underline>
                  mitramas.com
                </Text>
              </Button>
            }
          />
        </Space>
      </div>
    </Card>
  );
}
