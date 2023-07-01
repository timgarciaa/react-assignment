import { useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import User from "@/types/user.type";
type Props = {
  isEditModalOpen: boolean;
  confirmEdit: (values: User) => void;
  handleCancel: () => void;
  userForEdit?: User;
};

function EditModal({
  isEditModalOpen,
  confirmEdit,
  handleCancel,
  userForEdit,
}: Props) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: userForEdit?.name,
      email: userForEdit?.email,
      phone: userForEdit?.phone,
      website: userForEdit?.website,
    });
  }, [
    form,
    userForEdit?.email,
    userForEdit?.name,
    userForEdit?.phone,
    userForEdit?.website,
  ]);

  return (
    <Modal
      title="Edit Card"
      footer={null}
      open={isEditModalOpen}
      onCancel={handleCancel}
    >
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={confirmEdit}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number." },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Website"
          name="website"
          rules={[{ required: false, message: "Please input your website." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 8 }}>
          <Button type="primary" htmlType="submit" className="bg-blue-500">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditModal;
