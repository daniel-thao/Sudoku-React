// components
import UserAuth from "./UserAuth";

export default function Landing() {
  // const { loading: allUsersLoading, error: allUsersError, data: users } = useQuery(getAllUsers);
  // const { loading: allSudokusLoading, error: allSudokusError, data: sudokus } = useQuery(getAllSudokus);

  return (
    <div>
      <UserAuth action={"createUser"}></UserAuth>
      <UserAuth action={"login"}></UserAuth>
      <h1>hdjsakdhasdasjdk</h1>
    </div>
  );
}
