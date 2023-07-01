"use client";
import { useState } from "react";
import UserCard from "./UserCard";
import User from "@/types/user.type";
import DeleteModal from "./modals/DeleteModal";
import EditModal from "./modals/EditModal";

type Props = {
  users: User[];
};

function CardArea({ users }: Props) {
  const [userList, setUserList] = useState<User[]>([...users]);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [userForEditIndex, setUserForEditIndex] = useState<number>(0);
  const [userForEdit, setUserForEdit] = useState<User>();
  const [deleteUserIndex, setDeleteUserIndex] = useState<number>(0);

  const toggleHeart = (userIndex: number) => {
    if (userList[userIndex].hearted) {
      userList[userIndex].hearted = !userList[userIndex].hearted;
    } else {
      userList[userIndex].hearted = true;
    }
    setUserList([...userList]);
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
  };

  const cancelEdit = () => {
    setEditModalOpen(false);
  };

  const confirmDelete = () => {
    userList.splice(deleteUserIndex, 1);
    setUserList([...userList]);
    setDeleteModalOpen(false);
  };

  const confirmEdit = (values: User) => {
    userList[userForEditIndex].name = values.name;
    userList[userForEditIndex].email = values.email;
    userList[userForEditIndex].phone = values.phone;
    userList[userForEditIndex].website = values.website;

    setUserList([...userList]);
    setEditModalOpen(false);
  };

  const deleteCard = (userIndex: number) => {
    setDeleteModalOpen(true);
    setDeleteUserIndex(userIndex);
  };

  const editCard = (index: number) => {
    setEditModalOpen(true);
    setUserForEdit(userList[index]);
    setUserForEditIndex(index);
  };

  return (
    <div className="py-5">
      <div className="card-area">
        {userList.map((user: User, index: number) => (
          <UserCard
            key={index}
            user={user}
            deleteCard={deleteCard}
            editCard={editCard}
            index={index}
            toggleHeart={toggleHeart}
          />
        ))}
      </div>

      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleCancel={cancelDelete}
        confirmDelete={confirmDelete}
      />

      <EditModal
        isEditModalOpen={isEditModalOpen}
        confirmEdit={confirmEdit}
        handleCancel={cancelEdit}
        userForEdit={userForEdit}
      />
    </div>
  );
}

export default CardArea;
