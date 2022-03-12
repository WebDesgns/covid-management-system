const KEYS = {
  members: "members",
  memberId: "memberId"
};

export function getSocietyCollection(pincode) {
  return [
    { id: "1", title: "Godrej Sky Greens" },
    { id: "2", title: "Vasundhara Co-Op Hsg Society" },
    { id: "3", title: "Green Acres Co-Op Hsg Socy Limited" },
    { id: "4", title: "Antariksh Towers" }
  ];
}

export function insertMember(data) {
  let members = getAllMembers();
  data["id"] = generateMemberId();
  members.push(data);
  localStorage.setItem(KEYS.members, JSON.stringify(members));
}

export function updateMember(data) {
  let members = getAllMembers();
  let recordIndex = members.findIndex((x) => x.id === data.id);
  members[recordIndex] = { ...data };
  localStorage.setItem(KEYS.members, JSON.stringify(members));
}

export function deleteMember(id) {
  let members = getAllMembers();
  members = members.filter((x) => x.id != id);
  localStorage.setItem(KEYS.members, JSON.stringify(members));
}

export function generateMemberId() {
  if (localStorage.getItem(KEYS.memberId) === null)
    localStorage.setItem(KEYS.memberId, "0");
  var id = parseInt(localStorage.getItem(KEYS.memberId));
  localStorage.setItem(KEYS.memberId, (++id).toString());
  return id;
}

export function getAllMembers() {
  if (localStorage.getItem(KEYS.members) === null)
    localStorage.setItem(KEYS.members, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.members));
}
// export function addRow() {
//   (newData) =>
//     new Promise((resolve, reject) => {
//       setData([...Data, newData]);
//       resolve();
//     });
// }

// export function updateMember(){(newRow, oldRow) =>
//     new Promise((resolve, reject) => {
//       const updatedData = [...Data];
//       updatedData[oldRow.Data.id] = newRow;
//       setData(updatedData);
//       setTimeout(() => resolve(), 500);
//     })}

