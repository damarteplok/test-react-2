import React, {useState} from 'react';
import AddUser from "./components/Usrs/AddUser";
import UserList from "./components/Usrs/UserList";

function App() {
    const [userList, setUserList] = useState([]);
    const addUserhandler = (uName, uAge) => {
        setUserList((prevUserList) => {
            return [...prevUserList, {name: uName, age: uAge, id: Math.random()}];
        });
    };
  return (
    <React.Fragment>
        <AddUser onAddUser={addUserhandler}/>
        <UserList users={userList}/>
    </React.Fragment>
  );
}

export default App;
