import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Table, Tag, Typography } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import APIConfig from '../api/APIConfig';
import CustomersModalForm from './CustomersModalForm';

const { Title, Text } = Typography;

const styles = {
  container: {
    padding: '18px',
  },
  editBtn: {
    color: '#35763B',
  },
  deleteBtn: {
    color: '#F5222D',
  },
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone_number',
    key: 'phone_number',
  },
  {
    title: 'Job Title',
    dataIndex: 'job_title',
    key: 'job_title',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_, { status }) =>
      status ? (
        <Tag color="green">Active</Tag>
      ) : (
        <Tag color="volcano">Inactive</Tag>
      ),
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (_, { id }) => (
      <Space>
        <EditOutlined style={styles.editBtn} />
        <DeleteOutlined style={styles.deleteBtn} />
      </Space>
    ),
  },
];

export default function CustomersCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [customerList, setCustomerList] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  async function loadAllCustomers() {
    try {
      setIsLoading(true);
      const { data } = await APIConfig.get('/customers');
      setCustomerList(data.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  function handleCreate() {
    setCustomer({
      name: '',
      address: '',
      country: '',
      phone_number: '',
      job_title: '',
      status: false,
    });
    setIsCreate(true);
  }

  function handleCancel() {
    setIsCreate(false);
    setIsUpdate(false);
    setCustomer(null);
  }

  useEffect(() => {
    loadAllCustomers();
  }, []);

  return (
    <Fragment>
      <Card style={styles.container}>
        <Space size="middle" direction="vertical">
          <Row justify="space-between">
            <Col>
              <Title level={4}>Pelanggan</Title>
            </Col>
            <Col>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={handleCreate}
              >
                Tambah Pelanggan
              </Button>
            </Col>
          </Row>
          <Table
            loading={isLoading}
            dataSource={customerList}
            columns={columns}
            scroll={{ x: true }}
          />
        </Space>
      </Card>

      {(isCreate || isUpdate) && (
        <CustomersModalForm
          customer={customer}
          visible={isCreate || isUpdate}
          isCreate={isCreate}
          isUpdate={isUpdate}
          onCancel={handleCancel}
          refreshData={loadAllCustomers}
        />
      )}
    </Fragment>
  );
}
