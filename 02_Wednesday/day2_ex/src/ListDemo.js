import React, { useState } from "react";
import "./App.css";
function MemberTable(props) {
  const { members } = props.members;
  return (
    <table align="center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member, index) => (
          <tr key={index}>
            <td>{member.name}</td>
            <td>{member.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props} />
    </div>
  );
}

export default function Members() {
  const initialMembers = [
    { name: "Peter", age: 18 },
    { name: "Hanne", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Holger", age: 22 },
  ];
  const [members, setMembers] = useState(initialMembers);

  return <MemberDemo members={members} />;
}
