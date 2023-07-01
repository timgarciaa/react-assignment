import { Button, Modal } from "antd";
type Props = {
  isDeleteModalOpen: boolean;
  confirmDelete: any;
  handleCancel: any;
};

function DeleteModal({
  isDeleteModalOpen,
  confirmDelete,
  handleCancel,
}: Props) {
  return (
    <Modal
      title="Delete Card"
      open={isDeleteModalOpen}
      onOk={confirmDelete}
      onCancel={handleCancel}
      okButtonProps={{ className: "bg-blue-500 decoration-white" }} 
    >
      <p>Are you sure you want to delete this card?</p>
    </Modal>
  );
}

export default DeleteModal;
