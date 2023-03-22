import React from "react";
import { useGetUsersQuery } from "../../app/features/user/userApi";
import { BsThreeDots } from "react-icons/bs";
import Loading from "../../components/Loading";

const Users = () => {
  const { data: userData, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-2xl text-[#323B4B] font-semibold my-6 ml-3">
        Users List
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#ID</th>
              <th>USER</th>
              <th>EMAIL</th>
              <th>OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {userData?.data?.map((user, i) => {
              return (
                <tr key={i}>
                  <td> {user.id} </td>
                  <td>
                    <div className="flex item-center gap-4 ">
                      <img
                        className="w-[60px] h-[60px] rounded-full"
                        src={user.avatar}
                        alt=""
                      />
                      <p className="my-auto">
                        {user.first_name} {user.last_name}
                      </p>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <BsThreeDots />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
