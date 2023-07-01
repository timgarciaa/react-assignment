import React from "react";

type Props = { onClick: any, icon: React.ReactNode };

function IconButton({ onClick, icon }: Props) {
  return (
    <button onClick={onClick} className="cursor-pointer">
      {icon}
    </button>
  );
}

export default IconButton;
