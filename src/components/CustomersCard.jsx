import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, message } from 'antd';
import { Button, Card, Col, Row, Space, Table, Tag, Typography } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import APIConfig from '../api/APIConfig';
import ConfirmationModal from './ConfirmationModal';
import CustomersModalForm from './CustomersModalForm';

const { Title, Text } = Typography;
const { Search } = Input;

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

export default function CustomersCard() {
  const [dataSource, setDataSource] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
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
      filters: [
        { text: 'Active', value: true },
        { text: 'Inactive', value: false },
      ],
      onFilter: (value, record) => record.status === value,
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
          <EditOutlined
            style={styles.editBtn}
            onClick={() => handleUpdate(id)}
          />
          <DeleteOutlined
            style={styles.deleteBtn}
            onClick={() => handleDelete(id)}
          />
        </Space>
      ),
    },
  ];

  async function loadAllCustomers() {
    try {
      setIsLoading(true);
      const { data } = await APIConfig.get('/customers');
      setCustomerList(data.data);
      setDataSource(data.data);
      setIsLoading(false);
    } catch (e) {
      // console.log(e);
      message.error('Gagal memuat pelanggan');
      if (e.response.data === 'Unauthorized.') {
        message.error('[' + e.response.status + '] ' + e.response.data);
      } else {
        message.error('[' + e.response.status + '] ' + e.response.data.message);
      }
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

  function handleUpdate(id) {
    setCustomer(customerList.find((c) => c.id === id));
    setIsUpdate(true);
  }

  function handleDelete(id) {
    setCustomer(customerList.find((c) => c.id === id));
    setIsDelete(true);
  }

  function handleCancel() {
    setIsCreate(false);
    setIsUpdate(false);
    setIsDelete(false);
    setCustomer(null);
  }

  function handleSearch(value) {
    if (value !== '') {
      const filteredData = customerList.filter((obj) =>
        Object.keys(obj).some((key) =>
          obj[key].toString().toLowerCase().includes(value.toLowerCase())
        )
      );
      setDataSource(filteredData);
    }
  }

  function handleSearchInputChange({ target }) {
    if (target.value === '') {
      setDataSource(customerList);
    }
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
              <Row gutter={24}>
                <Col>
                  <Search
                    placeholder="Cari Pelanggan"
                    allowClear
                    onSearch={handleSearch}
                    onChange={handleSearchInputChange}
                  />
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
            </Col>
          </Row>
          <Table
            loading={isLoading}
            dataSource={dataSource}
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
      <ConfirmationModal
        id={customer?.id}
        visible={isDelete}
        onCancel={handleCancel}
        refreshData={loadAllCustomers}
      />
    </Fragment>
  );
}
