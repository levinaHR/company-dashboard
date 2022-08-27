import { Col, Layout, Row } from 'antd';
import React, { Fragment } from 'react';
import ActivityCard from './ActivityCard';
import BankCard from './BankCard';
import LocationCard from './LocationCard';
import ProfileCard from './ProfileCard';
import RelationCard from './RelationCard';
import Topbar from './Topbar';

const { Header, Footer, Sider, Content } = Layout;

const styles = {
  container: {
    minHeight: '100vh',
  },
  content: {
    padding: '18px',
  },
};

export default function Dashboard() {
  return (
    <Layout style={styles.container}>
      {/* <Sider></Sider> */}
      <Layout>
        <Content style={styles.content}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col sm={24} md={6}>
                  <ProfileCard />
                </Col>
                <Col sm={24} md={18}>
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <LocationCard />
                    </Col>
                    <Col span={24}>
                      <Row gutter={[16, 16]}>
                        <Col sm={24} md={12}>
                          <Row gutter={[16, 16]}>
                            <Col span={24}>
                              <BankCard />
                            </Col>
                            <Col span={24}>
                              <RelationCard />
                            </Col>
                          </Row>
                        </Col>
                        <Col sm={24} md={12}>
                          <ActivityCard />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
