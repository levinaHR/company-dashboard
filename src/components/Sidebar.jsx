import {
  HomeOutlined,
  ConfirmationNumberOutlined,
  AssignmentTurnedInOutlined,
  InboxOutlined,
  CorporateFareOutlined,
  PeopleAltOutlined,
  LayersOutlined,
  ZoomInOutlined,
  ListAltOutlined,
} from '@mui/icons-material';
import { Affix, Layout, Menu } from 'antd';
import SidebarLogo from '../images/sidebar-logo.png';
import React from 'react';
import { CodeSandboxOutlined, SlackOutlined } from '@ant-design/icons';
import { style } from '@mui/system';

const { Header, Footer, Sider, Content } = Layout;

const styles = {
  container: {
    padding: '36px 0px 12px',
    height: '100vh',
  },
  logo: {
    textAlign: 'center',
  },
  divider: {
    height: '40px',
  },
};

function getItem(key, icon, children) {
  return {
    key,
    icon,
    children,
  };
}

const menuItems = [
  getItem('1', <HomeOutlined />),
  getItem('2', <ConfirmationNumberOutlined />),
  getItem('3', <AssignmentTurnedInOutlined />),
  getItem('4', <InboxOutlined />),
  getItem('5', <CorporateFareOutlined />),
  getItem('6', <PeopleAltOutlined />),
  getItem('7', <LayersOutlined />),
  getItem('8', <CodeSandboxOutlined />),
  getItem('9', <SlackOutlined />),
  getItem('10', <ZoomInOutlined />),
  getItem('11', <ListAltOutlined />),
];

export default function Sidebar() {
  return (
    <Affix>
      <Sider
        style={styles.container}
        width={68}
        breakpoint="md"
        collapsedWidth="0"
      >
        <div style={styles.logo}>
          <img src={SidebarLogo} alt="sidebar-logo" />
        </div>
        <br />
        <Menu defaultSelectedKeys={['1']} mode="inline">
          {menuItems.map((item, i) => (
            <>
              <Menu.Item key={item.key} icon={item.icon} />
              {(i + 1) % 5 === 0 && <div style={styles.divider} />}
            </>
          ))}
        </Menu>
      </Sider>
    </Affix>
  );
}
