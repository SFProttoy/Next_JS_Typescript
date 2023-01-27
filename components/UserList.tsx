import { FC } from "react";

interface Props {
  userList: any;
}

const UserList: FC<Props> = ({ userList }) => {
  return (
    <div>
      {userList?.map((user: any) => {
        return (
          <h4 key={user.id} style={{ textAlign: "center" }}>
            {user.name}
          </h4>
        );
      })}
    </div>
  );
};

export default UserList;
