import { Button, Modal, Typography } from 'antd';
import React, { useState } from 'react';
import APIConfig from '../api/APIConfig';

const { Text } = Typography;

const styles = {
  msg: {
    textAlign: 'center',
  },
};

export default function ConfirmationModal(props) {
  const { id, visible, onCancel, refreshData } = props;
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDeleteSubmit(id) {
    try {
      setIsDeleting(true);
      const { data } = await APIConfig.delete('/customers', {
        data: { id: id },
      });
      console.log(data);
      setIsDeleting(false);
      onCancel();
      refreshData();
    } catch (e) {
      console.log(e);
      setIsDeleting(false);
    }
  }

  return (
    <Modal
      title="Hapus Pelanggan"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Batal
        </Button>,
        <Button
          form="customer-form"
          key="submit"
          type="danger"
          loading={isDeleting}
          onClick={() => handleDeleteSubmit(id)}
        >
          Hapus
        </Button>,
      ]}
    >
      <div style={styles.msg}>
        <Text>
          Hapus pelanggan dengan ID <Text strong>{id}</Text>?
        </Text>
      </div>
    </Modal>
  );
}
