import { useState } from "react";
import { useMutation } from "@apollo/client";
import { createUser, loginUser } from "../utils/authGQL";

// Components
import Label from "./Label";

export default function UserAuth({ action, ...props }) {
  const [creatingUser, { loading: cULoading, error: cUError, data: cUData }] = useMutation(createUser);
  const [loggingUser, { loading: lULoading, error: lUError, data: lUData }] = useMutation(loginUser);

  const [userData, setUserData] = useState({ username: "", email: "", password: "" });

  if (cULoading) return "Loading...";
  if (cUError) return `Error! ${cUError.message} THIS IS MY MESSAGE`;

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(userData);

          if (action === "createUser") {
            await creatingUser({
              variables: { username: userData.username, email: userData.email, password: userData.password },
            });
          } else if (action === "login") {
            await loggingUser({
              variables: { email: userData.email, password: userData.password },
            })
          }

          setUserData({ username: "", email: "", password: "" });
        }}
      >
        {action === "createUser" ? (
          <Label dataID={"Username"} userData={userData} setUserData={setUserData}></Label>
        ) : (
          <></>
        )}
        <Label dataID={"Email"} userData={userData} setUserData={setUserData}></Label>
        <Label dataID={"Password"} userData={userData} setUserData={setUserData}></Label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
