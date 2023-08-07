import React, { useState } from "react";
import Button from "./Button";

export const Users = () => {
  const [users, setUser] = useState([
    {
      id: 1,
      name: "Sanjay",
      skills: {
        'C#': 5,
        'AWS': 2,
        'Database': 1
      },
    },
    { 
      id: 2, 
      name: "Purnima",
      skills: {
        'C#': 15,
        'AWS': 22,
        'Database': 11
      }
    },
  ]);

  // add the new user
  const handleUserAdd = () => {
    setUser([
      {
        id: users.length + 1,
        name: "Aarav",
        skills: {
          'C#': 15,
          'AWS': 22,
          'Database': 11
        }
      },
      ...users,
    ]);
  };

  // update the user
  const handleUpdateUser = () => {
    const list = users.map((user) => {
      if (user.id == 2) {
        return { ...user, name: "Ariana" };
      }
      return user;
    });

    setUser(list);
  };


   // update the user AWS Score to 100 fpr Sanjay
   const handleUpdateUserScore = () => {
    const list = users.map((user) => {
      if (user.id == 1) {
        console.log(user);
        return { ...user, skills: {...user.skills, AWS: 100} };
      }
      return user;
    });

    setUser(list);
  };


  return (
    <>
      <Button color="primary" onButtonClick={handleUpdateUser}>
        Add User
      </Button>

      <Button color="danger" onButtonClick={handleUpdateUserScore}>
       Update User Score
      </Button>


      <ul className="list-group my-5 d-flex">
        {users &&
          users.map((user) => (
            <li className="list-group-item" key={user.id}>
              {user.id}-{user.name}
              <ul>
                {user.skills && <li>AWS: {user.skills.AWS} % </li>}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
};
