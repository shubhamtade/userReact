import React from "react";

const card = (data) => {
  return (
    <div>
      <div className="flex gap-3 flex-wrap justify-center  text-center">
        {data.data.map((users, index) => (
          <div
            key={index}
            className="h-[300px] w-[300px] flex flex-col content-center justify-center rounded-lg border-2 border-pink-500 "
          >
            <img
              src={users.image}
              className="w-[100px] h-[100px] rounded-full mx-auto"
            />
            <p>
              {users.firstName} {users.maidenName} {users.lastName}
            </p>
            <p>
              {users.address.address}, {users.address.city},{" "}
              {users.address.postalCode}
            </p>
            <p>{users.email}</p>
            <p>{users.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default card;
