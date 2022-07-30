import React, { useState, useEffect } from "react";
import { getAllUsers } from "../utils/queryGQL";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { loading, error, data } = useQuery(getAllUsers);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState({ username: "", email: "", password: "" });


  if (loading) return "Loading...";
  if (error) return `Error! ${error.message} THIS IS MY MESSAGE`;
  
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
          console.log(username, email, password);
          setUsername("");
          setEmail("");
          setPassword("");
          //
          console.log(userData);
          setUserData({ username: "", email: "", password: "" });
        }}
      >
        <label>
          Username
          <input
            type="text"
            name="uName"
            placeholder="Type your username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUserData({ ...userData, username: e.target.value });
            }}
          />
        </label>

        <label>
          Email
          <input
            type="text"
            name="email"
            placeholder="Type your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setUserData({ ...userData, email: e.target.value });
            }}
          />
        </label>

        <label>
          Password
          <input
            type="text"
            name="pWord"
            placeholder="Type your password - unsafe"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setUserData({ ...userData, password: e.target.value });
            }}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
