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
  deleteCard: any;
  editCard: any;
  index: number;
  toggleHeart: any;
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
          className="flex flex-row gap-1.5 pb-2 cursor-pointer"
          href={`mailto:${user.email}`}
        >
          <EnvelopeIcon className="card-icon" />
          <p className="text-sm">{user.email}</p>
        </a>
        <div className="flex flex-row gap-1.5 pb-2">
          <PhoneIcon className="card-icon" />
          <p className="text-sm">{user.phone}</p>
        </div>
        <div className="flex flex-row gap-1.5 pb-2">
          <GlobeAltIcon className="card-icon" />
          <p className="text-sm">{user.website}</p>
        </div>
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