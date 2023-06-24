import React from "react";

export default function Comment({comment}) {
  return (
    <div className="flex flex-row gap-6">
      <div className="w-14 h-14 rounded-full overflow-hidden bg-blue self-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
          className="object-cover"
        />
      </div>
      <div className="bg-white rounded-2xl w-full h-fit drop-shadow-md p-4">
        <h6 className="text-lg font-semibold">{comment.user}</h6>
        <p>{comment.comentario}</p>
      </div>
    </div>
  );
}
