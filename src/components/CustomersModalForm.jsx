import { Button, Form, Input, Modal, Switch, message } from 'antd';
import React, { useState } from 'react';
import APIConfig from '../api/APIConfig';

function Capitalize(str) {
  const words = str.split('_');
  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
}

export default function CustomersModalForm(props) {
  const { customer, visible, isCreate, isUpdate, onCancel, refreshData } =
    props;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fields, setFields] = useState([
    {
      name: ['name'],
      value: customer.name,
    },
    {
      name: ['address'],
      value: customer.address,
    },
    {
      name: ['country'],
      value: customer.country,
    },
    {
      name: ['phone_number'],
      value: customer.phone_number,
    },
    {
      name: ['job_title'],
      value: customer.job_title,
    },
    {
      name: ['status'],
      value: customer.status,
    },
  ]);

  function onChange(newFields) {
    setFields(newFields);
  }

  // function onFinish(values) {
  //   console.log('Success:', values);
  //   handleSubmit(values);
  // }

  // function onFinishFailed(errorInfo) {
  //   console.log('Failed:', errorInfo);
  // }

  async function handleSubmit(values) {
    try {
      setIsSubmitting(true);
      if (isCreate) {
        const { data } = await APIConfig.post('/customers', values);
        // console.log(data);
        message.success(data.message);
      }
      if (isUpdate) {
        const { data } = await APIConfig.put('/customers', {
          id: customer.id,
          ...values,
        });
        // console.log(data);
        message.success(data.message);
      }
      setIsSubmitting(false);
      onCancel();
      refreshData();
    } catch (e) {
      // console.log(e);
      if (e.response.data === 'Unauthorized.') {
        message.error('[' + e.response.status + '] ' + e.response.data);
      } else {
        message.error('[' + e.response.status + '] ' + e.response.data.message);
      }
      setIsSubmitting(false);
    }
  }

  return (
    <Modal
      title={isCreate ? 'Tambah Pelanggan Baru' : 'Ubah Pelanggan'}
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Batal
        </Button>,
        <Button
          form="customer-form"
          key="submit"
          htmlType="submit"
          type="primary"
          loading={isSubmitting}
        >
          Simpan
        </Button>,
      ]}
    >
      <Form
        id="customer-form"
        layout="vertical"
        fields={fields}
        onFieldsChange={(_, allFields) => {
          onChange(allFields);
        }}
        onFinish={handleSubmit}
        // onFinishFailed={onFinishFailed}
      >
        {fields.map((field) =>
          field.name[0] === 'status' ? (
            <Form.Item name={field.name[0]} label={Capitalize(field.name[0])}>
              <Switch
                defaultChecked={field.value}
                checkedChildren="Active"
                unCheckedChildren="Inactive"
              />
            </Form.Item>
          ) : (
            <Form.Item
              name={field.name[0]}
              label={Capitalize(field.name[0])}
              rules={[
                {
                  required: true,
                  message: 'Required',
                },
              ]}
            >
              <Input />
            </Form.Item>
          )
        )}
      </Form>
    </Modal>
  );
}
