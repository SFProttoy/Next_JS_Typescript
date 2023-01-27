import { GetStaticProps } from "next";
import UserList from "../components/UserList";

const Users = ({ userList }: any) => {
  console.log(userList);

  return (
    <>
      <UserList userList={userList} />
    </>
  );
};

export default Users;

type Users = any;

export const getStaticProps: GetStaticProps<{
  userList: Users[];
}> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const userList: Users[] = await res.json();

  return {
    props: {
      userList,
    },
  };
};
