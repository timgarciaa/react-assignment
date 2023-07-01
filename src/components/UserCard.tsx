"use client";
import { Avatar, Divider } from "antd";
import {
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  PencilSquareIcon,
  TrashIcon,
  HeartIcon as HeartIconOutline,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import User from "@/types/user.type";
import GetAvatarUrl from "@/helpers/GetAvatarUrl";
import IconButton from "./buttons/IconButton";

type Props = {
  user: User;
  deleteCard: (userIndex: number) => void;
  editCard: (index: number) => void;
  index: number;
  toggleHeart: (userIndex: number) => void;
};

function UserCard({ user, deleteCard, editCard, index, toggleHeart }: Props) {
  return (
    <div className="border border-gray-300 rounded-sm w-80 md:w-72">
      <div className="flex justify-center bg-gray-100">
        <Avatar shape="square" size={128} src={GetAvatarUrl(user.username)} />
      </div>

      <div className="flex flex-col px-6 h-40 justify-center">
        <div className="py-2">
          <p className="font-semibold">{user.name}</p>
        </div>
        <a
          href={`mailto:${user.email}`}
          className="flex flex-row gap-1.5 pb-2 cursor-pointer"
        >
          <EnvelopeIcon className="card-icon" />
          <p className="text-sm">{user.email}</p>
        </a>
        <a href={`tel:${user.phone}`} className="flex flex-row gap-1.5 pb-2">
          <PhoneIcon className="card-icon" />
          <p className="text-sm">{user.phone}</p>
        </a>
        <a
          href={`http://${user.website}`}
          className="flex flex-row gap-1.5 pb-2"
          target="_blank"
        >
          <GlobeAltIcon className="card-icon" />
          <p className="text-sm">{`http://${user.website}`}</p>
        </a>
      </div>

      <div className="flex flex-row justify-evenly bg-gray-100 border-t border-gray-300 items-center">
        <IconButton
          icon={
            user.hearted ? (
              <HeartIconSolid className="card-icon text-[#f70a0a] m-1" />
            ) : (
              <HeartIconOutline className="card-icon text-[#f70a0a] m-1" />
            )
          }
          onClick={() => toggleHeart(index)}
        />

        <Divider type="vertical" className="border-gray-300" />

        <IconButton
          onClick={() => editCard(index)}
          icon={<PencilSquareIcon className="card-icon m-1" />}
        />

        <Divider type="vertical" className="border-gray-300" />

        <IconButton
          onClick={() => deleteCard(index)}
          icon={<TrashIcon className="card-icon m-1" />}
        />
      </div>
    </div>
  );
}

export default UserCard;
