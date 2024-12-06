import { ReactComponent as SolidIcon } from "../image/icons/solid.svg";
import { ReactComponent as EmptyIcon } from "../image/icons/empty.svg";
import React, { useEffect, useState } from "react";

export default function Comments() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const res = await fetch("https://api.github.com/users");
    setUsers(await res.json());
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          {users.slice(0, 3).map((user, index) => (
            <div
              className="bg-white rounded-lg flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg shadow-md ring-1 ring-black"
              key={index}
            >
              <div className="text-center">
                <p className="text-gray-500 text-sm">
                  Anim laborum consectetur do culpa proident labore in qui duis
                  eu. Qui nostrud dolore non pariatur velit sint culpa do
                  pariatur. Eiusmod duis ipsum amet elit est aliqua velit labore
                  aute ipsum irure consequat. Minim sunt nisi laborum fugiat
                  voluptate aliqua. Ex dolore fugiat mollit elit dolore labore
                  ipsum voluptate elit. Commodo culpa cillum deserunt enim.
                  Voluptate reprehenderit amet ea consectetur et.
                </p>
              </div>
              <div className="flex justify-center py-4">
                {[...Array(4)].map((_, i) => (
                  <SolidIcon key={i} className="h-5 w-5" />
                ))}
                <EmptyIcon className="h-5 w-5" />
              </div>
              <img
                className="h-20 mt-4 rounded-full"
                src={user.avatar_url}
                alt={user.login}
              />
              <p className="text-black font-semibold text-xl mt-2">
                {user.login}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
