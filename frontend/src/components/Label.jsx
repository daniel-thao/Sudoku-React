export default function Label({ dataID, userData, setUserData, ...props }) {
  
    function whatvalue(dataIden, dataUser, e, setDataUser) {
    switch (dataIden) {
      case "Username":
        if (e) return setDataUser({ ...dataUser, username: e.target.value });
        else return dataUser.username;
      case "Email":
        if (e) return setDataUser({ ...dataUser, email: e.target.value });
        else return dataUser.email;
      case "Password":
        if (e) return setDataUser({ ...dataUser, password: e.target.value });
        else return dataUser.password;
      default:
        return undefined;
    }
  }

  return (
    <label>
      {dataID}
      <input
        type="text"
        name="uName"
        placeholder="Type your username"
        value={whatvalue(dataID, userData)}
        onChange={(e) => whatvalue(dataID, userData, e, setUserData)}
      />
    </label>
  );
}
